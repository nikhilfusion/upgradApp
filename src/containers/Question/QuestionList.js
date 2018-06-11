import React, { Component } from 'react';
import TitleBand from './TitleBand';
import Header from '../../components/Common/Header';
import QuestionItem from '../../components/Question/QuestionItem';
import userList from '../../utils/user';

import './Question.css';

class QuestionList extends Component {
  state = {
    selectedQnList: []
  }
  handleClicked = item => {
    const { selectedQnList } = this.state;
    const index = selectedQnList.indexOf(item.id);
    if (index === -1) {
      selectedQnList.push(item.id);
    } else {
      selectedQnList.splice(index, 1);
    }
    this.setState({ selectedQnList });
  }
  selectAll = isChecked => {
    const selectedQnList = [];
    if (isChecked) {
      const localItem = localStorage.getItem('questions');
      const qns = (localItem && JSON.parse(localItem)) ? JSON.parse(localItem) : [];
      if (qns.length > 0) {
        qns.map(qn => selectedQnList.push(qn.id));
      }
    }
    this.setState({ selectedQnList });
  }
  closeUserModal = () => {
    const { selectedQnList } = this.state;
    this.setState({ selectedQnList });
  }
  render() {
    const localItem = localStorage.getItem('questions');
    const qns = (localItem && JSON.parse(localItem)) ? JSON.parse(localItem) : [];
    const localqnAlloc = localStorage.getItem('qnAllocation');
    const qnAllocation = (localqnAlloc && JSON.parse(localqnAlloc)) ? JSON.parse(localqnAlloc) : [];
    const {
      selectedQnList
    } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="listQnTitle">
              <h3>Question List</h3>
            </div>
            <TitleBand
              selectedQns={selectedQnList}
              selectAll={this.selectAll}
              closeUserModal={this.closeUserModal}
            />
            <div className="qnListContainer">
              {
                qns && qns.map((question, index) => {
                  const users = [];
                  qnAllocation.map(alloc => (
                    Object.keys(alloc).forEach(key => {
                      if (alloc[key].indexOf(question.id) > -1) {
                        users.push(key);
                      }
                    })
                  ));
                  const matchedUsers = userList.users.filter(user => users.indexOf(user.id) > -1);
                  return (
                    <QuestionItem
                      question={question}
                      onSelectDeselect={() => this.handleClicked(question)}
                      key={question.id}
                      slNo={index + 1}
                      selectedQnList={selectedQnList}
                      matchedUsers={matchedUsers}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionList;
