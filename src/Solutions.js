import React from 'react';
import axios from 'axios'
import Solution from './Solution';
import styles from './Solutions.css';

class Solutions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { solutions: [[]] };
    this.solve = this.solve.bind(this);
  }

  solve(event) {
    event.preventDefault(); 
    event.stopPropagation();
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
            <form className="commentForm" onSubmit={this.solve}>
                  <button type="submit" class="submit-button">Solve!</button>
            </form>
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