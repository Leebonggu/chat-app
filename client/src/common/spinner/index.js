import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ isAbsolute }) => (
  <div className={`spinner-${isAbsolute ? 'absolute' : 'relative'}`}>
    <div className="spinner-loader">
      <div />
    </div>
  </div>
);

export default memo(Spinner);

Spinner.propTypes = {
  isAbsolute: PropTypes.bool
};

Spinner.defaultProps = {
  isAbsolute: false
}