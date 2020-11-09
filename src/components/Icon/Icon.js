import React from 'react';
// import PropTypes from 'prop-types';

import './Icon.scss';

const Icon = ({
  className, onClick, id
}) => {

  return (
    <i
      className={className}
      onClick={onClick}
      id={id}
    />
  );
};

export default Icon;

Icon.propTypes = {
  // className: PropTypes.string,
  // changeBg: PropTypes.func,
  // name: PropTypes.string,
  // favItem: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  // article: PropTypes.string
};

Icon.defaultProps = {
  // className: '',
  // name: '',
  // article: '',
  // favItem: [],
  // changeBg: () => {}
};


