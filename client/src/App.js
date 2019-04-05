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
          <NavLink to='/'>Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/login'>Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/sign-up'>Sign Up</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/jokes'>Jokes List</NavLink>
          &nbsp;|&nbsp;
          <button onClick={this.logout}>Logout</button>
        </header>
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/jokes' component={JokeList} />
        </main>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('token');
    // this.props.history.push('/')
  };
}

function Home(props) {
    return <h1>Home Page</h1>
  }
export default App;
