import React, { memo } from 'react';
import { PropTypes } from 'prop-types';

export const ArrowDown = memo(({ className, background, ...props }) => (
  <svg
    className={`arrow ${className}`}
    id="arrow-down"
    viewBox="0 0 24 24"
    role="presentation"
    focusable="false"
    height="24"
    width="24"
    {...props}
  >
    <g>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill={background} />
    </g>
  </svg>
));

ArrowDown.defaultProps = {
  className: '',
  background: 'currentColor'
};

ArrowDown.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string
};

export const ArrowRight = memo(({ className, background, ...props }) => (
  <svg
    className={`arrow ${className}`}
    id="arrow-right"
    viewBox="0 0 24 24"
    role="presentation"
    focusable="false"
    height="24"
    width="24"
    {...props}
  >
    <g>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill={background} />
    </g>
  </svg>
));

ArrowRight.defaultProps = {
  className: '',
  background: 'currentColor'
};

ArrowRight.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string
};
