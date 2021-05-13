import React from 'react';

class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = { letters: '' };
  }
  myChangeHandler = (event) => {
    this.setState({letters: event.target.value});
    this.props.onSideChange(event.target.value, this.props.sideNumber);
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