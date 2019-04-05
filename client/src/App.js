import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Login from './login/Login';
import SignUp from './signUp/SignUp';
import JokeList from './jokes/JokeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to='/login'>Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/sign-up'>Sign Up</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/jokes'>Jokes List</NavLink>
        </header>
        <main>
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/jokes' component={JokeList} />
        </main>
      </div>
    );
  }
}

export default App;
