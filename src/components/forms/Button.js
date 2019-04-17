/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onClick, type, children, ...attributes } = props;

  return (
    <button onClick={onClick} type={type} {...attributes}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'button',
  onClick: () => {}
}

export default Button;
