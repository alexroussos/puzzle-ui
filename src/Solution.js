import React from 'react';

class Solution extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span className="Solution">{this.props.words.join('->')}</span>
    );
  }
}

export default Solution;
