import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
  children, onClick, className, ...attrs 
}) => {


  return (
    <button
      className={className}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: ''
};

export default Button;
