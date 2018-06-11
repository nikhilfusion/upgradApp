import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import user from '../../utils/user';
import UserModal from '../../components/Common/UserModal';
import './TitleBand.css';

class TitleBand extends Component {
  state = {
    openModal: false
  }
  closeModal = users => {
    this.setState({ openModal: false });
    const qnAllocation = [];
    users.map(allottedUser => (qnAllocation.push({ [allottedUser]: this.props.selectedQns })));
    localStorage.setItem('qnAllocation', JSON.stringify(qnAllocation));
    this.props.closeUserModal();
  }
  render() {
    const {
      selectedQns
    } = this.props;
    const {
      openModal
    } = this.state;
    return (
      <div className="titleBandContainer">
        <div className="selectAll">
          <input type="checkbox" value="selectAll" name="select" onChange={e => this.props.selectAll(e.target.checked)} />
          <label htmlFor="select" id="selectLabel">SelectAll</label>
        </div>
        <div className="innerContainer">
          <div className="heading">Select questions to Assign</div>
          <div>
            <button className={`primaryBtn ${selectedQns.length === 0 ? 'disabled' : ''}`} disabled={selectedQns.length === 0} onClick={() => this.setState({ openModal: true })}>Assign</button>
            <button className="secondaryBtn" onClick={() => browserHistory.push('/builder')}>Author new Question</button>
          </div>
        </div>
        {
          openModal &&
          <UserModal
            closeModal={this.closeModal}
            users={user.users}
          />
        }
      </div>
    );
  }
}

TitleBand.propTypes = {
  selectedQns: PropTypes.array,
  selectAll: PropTypes.func,
  closeUserModal: PropTypes.func
};

TitleBand.defaultProps = {
  selectedQns: [],
  selectAll: undefined,
  closeUserModal: undefined
};

export default TitleBand;
