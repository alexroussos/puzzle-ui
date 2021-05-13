import React from 'react';
import Side from './Side';
import axios from 'axios'



class Sides extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sides: [' _ ',' _ ',' _ ',' _ '] , solutions: ['unsolved']};
    this.handleSideChange = this.handleSideChange.bind(this);
    this.solve = this.solve.bind(this);
  }

  handleSideChange(temperature, side) {
    this.setState(state => {
      state.sides[side] = temperature;
      return state.sides;
    });  
  }
  solve() {
    console.log('calling solve api')
    const headers = { 
      'x-api-key': 'C10PCPeVkv6jYc2jylyML4Zbg2YOgu9M1pDbJzA7'
    };
    let data = {"sides": this.state.sides}
    axios.post('https://xh5282ob00.execute-api.us-east-1.amazonaws.com/test/letter-boxed', data, {headers})
        .then(response => this.setState({ solutions: response.data }))
         .catch(error => {
            this.setState({ solutions: error.message });
            console.error('There was an error!', error);
        });
  }
  render() {
    return (  
      <div> 
        <h1>Letter Boxed Solver</h1>
        <span>Solve the New York Times <a href='https://www.nytimes.com/puzzles/letter-boxed'>Letter Boxed</a> Puzzle</span>
        <div className="Sides">
          <h2>Enter Letters</h2>
          <Side sideNumber="0" onSideChange={this.handleSideChange} / >  
          <Side sideNumber="1" onSideChange={this.handleSideChange} / >  
          <Side sideNumber="2" onSideChange={this.handleSideChange} / >  
          <Side sideNumber="3" onSideChange={this.handleSideChange} / >  
          <p> [{this.state.sides[0]}] [{this.state.sides[1]}] [{this.state.sides[2]}] [{this.state.sides[3]}] </p>
        </div>
        <div>
          <button type="button" onClick={this.solve}>
              Solve!
          </button>
        </div>
        <div>
          <h2> Solutions </h2>
          {this.state.solutions.map((solution, index) => {<span>{solution}</span>})}
          {this.state.solutions}
        </div>
      </div>




    );
  }
}

export default Sides;