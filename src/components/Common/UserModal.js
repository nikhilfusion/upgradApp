import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

require('./UserModal.css');

const UserModal = ({ users, closeModal }) => {
  const userList = [];
  const selectDeselectUser = e => {
    const val = e.target.value;
    const index = userList.indexOf(val);
    if (index > -1) {
      userList.splice(index, 1);
    } else {
      userList.push(val);
    }
  };
  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Select User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            users.map(user => (
              <div className="modalContainer" key={user.id}>
                <input type="checkbox" name="user" value={user.id} onChange={selectDeselectUser} />
                <span htmlFor="user" className="user">{user.name}</span>
              </div>
            ))
          }
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" onClick={() => closeModal(userList)}>Assign</button>
          <button className="btn btn-primary" onClick={closeModal}>Cancel</button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

UserModal.propTypes = {
  users: PropTypes.array,
  closeModal: PropTypes.func,
};

UserModal.defaultProps = {
  users: [],
  closeModal: () => { throw new Error('closeModal is not passed'); },
};

export default UserModal;
