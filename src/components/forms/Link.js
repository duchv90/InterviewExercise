import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { href, children, ...attributes } = props;

  return (
    <a href={href} {...attributes}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Link;
