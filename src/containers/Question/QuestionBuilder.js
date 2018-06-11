import React, { Component } from 'react';
import QuestionForm from './QuestionForm';
import Header from '../../components/Common/Header';

export default class QuestionBuilder extends Component {

  state = {
    questionType: '1'
  }

  radioBtnHandler = e => {
    this.setState({ questionType: e.currentTarget.value });
  }

  render() {
    const {
      questionType
    } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <h4 className="questionTitle">Question Builder</h4>
          <div>
            <h6>What type of question you want to create</h6>
            <input type="radio" name="gender" value="1" className="radioBtn" onChange={this.radioBtnHandler} checked={questionType === '1'} /> Multiple choice question<br />
            <input type="radio" name="gender" value="2" className="radioBtn" onChange={this.radioBtnHandler} checked={questionType === '2'} /> Submission type question<br />
            <input type="radio" name="gender" value="3" className="radioBtn" onChange={this.radioBtnHandler} checked={questionType === '3'} /> Passage(text) type question<br />
          </div>
          <QuestionForm questionType={questionType} />
        </div>
      </div>
    );
  }
}
