import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class JokeList extends React.Component {
    state = {
        jokes: []
    }

  render() {
    return (
      <div>
        <h2>Jokes List</h2>
        <ul>
            {this.state.jokes.map(joke => (
                <li key={joke.id}>{joke.joke}</li>
        ))}
        </ul>
        
      </div>
    )
  }

  componentDidMount() {
      const endpoint = '/jokes';
      axios
        .get(endpoint)
        .then(res => {
            this.setState({ jokes: res.data})
        })
        .catch(err => {
            console.log('JOKES ERROR', err)
        });
  }
}



export default requiresAuth(JokeList);
