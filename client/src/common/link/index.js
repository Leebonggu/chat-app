/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Link = memo(({ className, to, href, onClick, color, weight, size, children, ...props }) => {
  if (to) {
    return (
      <NavLink
        className={`link active ${className}`}
        to={to}
        onClick={onClick}
        style={{
          fontSize: size,
          color,
          fontWeight: weight
        }}
        {...props}
      >
        {children}
      </NavLink>
    );
  }
  return (
    <a
      className={`link active ${className}`}
      style={{
        fontSize: size,
        color,
        fontWeight: weight
      }}
      {...props}
      onClick={() => {
        if (onClick) {
          onClick();
        }
        window.open(href);
      }}
    >
      {children}
    </a>
  );
});

export default Link;

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  size: PropTypes.string
};

Link.defaultProps = {
  className: '',
  to: '',
  href: '',
  color: 'black',
  weight: '400',
  size: '1.4rem',
  onClick: () => {}
};
