import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const QuestionItem = ({ question, onSelectDeselect, slNo, selectedQnList, matchedUsers }) => {
  const getType = type => {
    switch (type) {
      case '1': return 'MCQ(Quiz)';
      case '2': return 'Submission';
      case '3': return 'Passage(text)';
      default: return '';
    }
  };

  return (
    <div className="itemContainer">
      <div className="itemLhs">
        <input
          type="checkbox"
          className="qnTypeInput"
          onChange={onSelectDeselect}
          checked={selectedQnList && selectedQnList.length > 0 && selectedQnList.indexOf(question.id) > -1}
        />
      </div>
      <div className="itemRhs">
        <div className="slNoContainer">
          <div>S.No</div>
          <div>{slNo}</div>
        </div>
        <div className="detailsContainer">
          <div className="listTitle">{question.title}</div>
          <div className="listDesc">{question.description}</div>
        </div>
        <div className="typeContainer">
          <div>
            <div className="typeTitle">question type</div>
            <div className="type">{getType(question.questionType)}</div>
          </div>
          <div>
            {
              matchedUsers && matchedUsers.length > 0 &&
              matchedUsers.map(user => (
                <div className="username" key={user.id}>{user.name}</div>
              ))
            }
          </div>
        </div>
      </div>
    </div>

  );
};

QuestionItem.propTypes = {
  question: PropTypes.object,
  onSelectDeselect: PropTypes.func,
  slNo: PropTypes.number.isRequired,
  selectedQnList: PropTypes.array,
  matchedUsers: PropTypes.array
};
QuestionItem.defaultProps = {
  selectedQnList: [],
  matchedUsers: []
};

QuestionItem.defaultProps = {
  question: {},
  onSelectDeselect: undefined,
};

export default QuestionItem;
