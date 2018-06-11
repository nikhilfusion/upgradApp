import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './Login.css';

class Login extends Component {
  state = {
    user: '' || localStorage.getItem('user')
  }

  radioBtnHandler = e => {
    this.setState({ user: e.currentTarget.value });
  }
  handleLogin = () => {
    const user = Number(this.state.user);
    localStorage.setItem('user', user);
    if (user === 1) {
      browserHistory.push('/dashboard');
    } else {
      browserHistory.push('/builder');
    }
  }
  render() {
    const user = Number(this.state.user);
    return (
      <div className="loginContainer">
        <div className="loginTitle">Please Select Login</div>
        <div className="loginInner">
          <p >I am a...</p>
          <div>
            <input type="radio" name="gender" value="1" onChange={this.radioBtnHandler} checked={user === 1} /> Student<br />
            <input type="radio" name="gender" value="2" onChange={this.radioBtnHandler} checked={user === 2} /> Teacher<br />
          </div>
        </div>
        <div className="loginFooter">
          <div className="footerText">Please login to continue...</div>
          <div className="btnContainer">
            <button className="btn btn-default" onClick={() => this.setState({ user: '' })}>Cancel</button>
            <button className="btn btn-primary" onClick={this.handleLogin} disabled={!user} >Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

