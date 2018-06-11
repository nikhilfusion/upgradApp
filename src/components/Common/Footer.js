import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import './Header.css';

const Footer = ({ authorClicked }) => (
  <div className="ctaContainer">
    <div className="container">
      <div className="ctaInnerContainer">
        <p className="ctaHeading">Click author to create a new question and will be added automatically to the questions list</p>
        <button className="btn btn-default footerBtn" onClick={() => browserHistory.push('/qn-list')}>Cancel</button>
        <button className="btn btn-info footerBtn" onClick={authorClicked}>Author</button>
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  authorClicked: PropTypes.func
};

Footer.defaultProps = {
  authorClicked: () => { throw new Error('authorClicked is not passed'); }
};

export default Footer;
