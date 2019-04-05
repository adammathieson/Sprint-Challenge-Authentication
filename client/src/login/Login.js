import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  render() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </>
    )
  }

  handleSubmit = e => {
    e.preventDefault();

    const endpoint = 'http://localhost:3300/api/login';
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log('LOGIN RESPONSE', res);
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/jokes')
      })
      .catch(err => {
        console.error('LOGIN ERROR', err);
      });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

export default Login;