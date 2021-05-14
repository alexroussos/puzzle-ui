import React from 'react';
import axios from 'axios'
import Solution from './Solution';

class Solutions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { solutions: [[]] };
    this.solve = this.solve.bind(this);
  }
  myChangeHandler = (event) => {
    this.setState({letters: event.target.value});
    this.props.onSideChange(event.target.value, this.props.sideNumber);
  }

  solve() {
    const headers = { 
      'x-api-key': 'C10PCPeVkv6jYc2jylyML4Zbg2YOgu9M1pDbJzA7',
      'content-type': 'application/json'
    };
    let sides = this.props.getSides();
    let data = {"sides": sides}
    let url = 'https://api.roussos.world/letter-boxed' 
    axios.post(url, data, {headers})
        .then(response => this.setState({ solutions: response.data }))
         .catch(error => {
            this.setState({ solutions: error.message });
            console.error('There was an error!', error);
        });
  }



  render() {
    return (
        <div>
          <span>
            <button type="button" onClick={this.solve}>
                Solve!
            </button>
          </span>
          <div>
            <h2> Solutions </h2>
            {this.state.solutions ? this.state.solutions.map(solution => <Solution words={solution} />) : 'No solutions'}
          </div>
        </div>
    );
  }
}

export default Solutions;