import React from 'react';
import Side from './Side';
import Solutions from './Solutions';

class Sides extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sides: [' _ ',' _ ',' _ ',' _ '] , solutions: ['unsolved']};
    this.handleSideChange = this.handleSideChange.bind(this); 
    this.getSides = this.getSides.bind(this); 
  }

  handleSideChange(letters, side) {
    this.setState(state => {
      state.sides[side] = letters;
      return state.sides;
    });  
  }

  getSides() {
    return this.state.sides;
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
        <Solutions getSides={this.getSides}/>
      </div>
    );
  }
}

export default Sides;