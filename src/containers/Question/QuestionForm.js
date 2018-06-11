import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Common/Footer';

require('./Question.css');

const initialState = {
  title: '',
  description: '',
  idealAnswer: '',
  options: [],
  correctOption: [],
  instructions: '',
  id: new Date().getTime()
};


class QuestionBuilder extends Component {

  static propTypes = {
    questionType: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.questionType !== this.props.questionType) {
      this.state = initialState;
    }
  }

  handleChekboxInput = (val, index) => {
    const { options } = this.state;
    options[index] = val;
    this.setState({ options });
  }
  handleCorrectOption = index => {
    const { correctOption } = this.state;
    if (correctOption[index]) {
      correctOption.splice(index, 1);
    } else {
      correctOption.push(index);
    }
    this.state = initialState;
  }

  submitClick = () => {
    this.state.questionType = this.props.questionType;
    const stateDt = Object.assign({}, this.state);
    const localQns = localStorage.getItem('questions');
    const qns = (localQns && JSON.parse(localQns)) ? JSON.parse(localQns) : [];
    qns.push(stateDt);
    localStorage.setItem('questions', JSON.stringify(qns));
    this.setState(initialState);
  }

  render() {
    const {
      questionType
    } = this.props;
    const {
      title,
      description,
      idealAnswer,
      instructions,
      options,
      correctOption
    } = this.state;
    return (
      <div className="container">
        <div className="row mainContainer">
          <div className="titleContainer">
            <div className="qnTitle">Question Title:</div>
            <div>
              <input
                type="text"
                className="qnTypeInput"
                value={title}
                placeholder="Type your question title here..."
                onChange={evt => this.setState({ title: evt.target.value })}
              />
            </div>
          </div>
          <div className="titleContainer">
            <div className="qnTitle">Question Description:</div>
            <div>
              <input
                type="text"
                value={description}
                className="qnTypeInput"
                placeholder="Type your question description here"
                onChange={evt => this.setState({ description: evt.target.value })}
              />
            </div>
          </div>
          {
            questionType === '1' &&
            <div className="mcqContainer">
              <div className="col-md-10 col-sm-9">
                <div className="row">
                  <div className="qnTitle">Question Type</div>
                  {
                    ['A', 'B', 'C', 'D'].map((item, index) => (
                      <div key={item} className="qnContainer">
                        <input
                          type="text"
                          className="qnTypeInput"
                          value={(options && options[index]) ? options[index] : ''}
                          placeholder={`type option ${item} here`}
                          onChange={e => this.handleChekboxInput(e.target.value, index)}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="col-md-2 colsm-3">
                <div className="row">
                  <div className="qnTitle text-right">Right Answers</div>
                  {
                    [0, 1, 2, 3].map((item, index) => (
                      <div key={item} className="ansContainer">
                        <input
                          type="checkbox"
                          className="qnTypeInput"
                          value={correctOption[index]}
                          onClick={() => this.handleCorrectOption(item)}
                        />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          }
          {
            questionType === '3' &&
            <div className="titleContainer">
              <div className="qnTitle">Ideal Aswer:</div>
              <div>
                <input
                  type="text"
                  className="qnTypeInput"
                  value={idealAnswer}
                  placeholder="Type your answer here"
                  onChange={evt => this.setState({ idealAnswer: evt.target.value })}
                />
              </div>
            </div>
          }
          <div className="titleContainer">
            <div className="qnTitle">Instructions:</div>
            <div>
              <input
                type="text"
                className="qnTypeInput"
                value={instructions}
                placeholder="Type instructions here ...(eg. file size, file format, do's and dont's etc.)"
                onChange={evt => this.setState({ instructions: evt.target.value })}
              />
            </div>
          </div>
        </div>
        <Footer
          authorClicked={this.submitClick}
        />
      </div>
    );
  }
}

export default QuestionBuilder;
