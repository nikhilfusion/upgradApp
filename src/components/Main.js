import React, { PropTypes } from 'react';

const Main = ({ children }) => (
  <div className="layoutContainer">
    {/* this will render the child routes */}
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};


export default Main;
