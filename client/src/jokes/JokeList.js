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
      </div>
    )
  }
}



export default requiresAuth(JokeList);
