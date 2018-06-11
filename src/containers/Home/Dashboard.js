import React, { Component } from 'react';
import Header from '../../components/Common/Header';
import QuestionItem from '../../components/Question/QuestionItem';
import './Homepage.css';

class Dashboard extends Component {
  render() {
    const qns = localStorage.getItem('questions') && JSON.parse(localStorage.getItem('questions'));
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="listQnTitle">
              <h3>Question List</h3>
            </div>
            <div className="qnListContainer">
              {
                qns && qns.map((question, index) => (
                  <QuestionItem question={question} key={question.id} slNo={index + 1} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
