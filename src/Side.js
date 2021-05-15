import React from 'react';
import styles from './Side.css';

class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = { letters: '' };
  }
  myChangeHandler = (event) => {
    event.preventDefault(); 
    event.stopPropagation();
    this.setState({letters: event.target.value.toLowerCase()});
    this.props.onSideChange(event.target.value.toLowerCase(), this.props.sideNumber);
  }
  render() {
    return (
      <form>
        <label>Side {this.props.sideNumber}:</label>
        <input
          type='text'
          onChange={this.myChangeHandler}
          minlength="3"
          maxlength="3"
        />
      </form>
    );
  }
}

export default Side;