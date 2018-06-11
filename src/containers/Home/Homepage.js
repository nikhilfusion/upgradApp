import React, { Component } from 'react';
import Header from '../../components/Common/Header';
import Login from '../Login/Login';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
      </div>
    );
  }
}
export default Homepage;
