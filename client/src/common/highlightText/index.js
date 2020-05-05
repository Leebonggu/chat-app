import React, { memo } from 'react';
import PropTypes from 'prop-types';

const HighlightText = memo(({
  className,
  weight,
  color,
  size,
  children,
  ...props
}) => (
  <span
    className={className}
    style={{
      fontWeight: weight,
      color,
      fontSize: size,
      ...props
    }}
  > 
    {children}
  </span>
));

export default HighlightText;

HighlightText.propTypes = {
  children: PropTypes.node.isRequired,
  weight: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string
};

HighlightText.defaultProps = {
  weight: '',
  color: '',
  size: '',
  className: ''
}