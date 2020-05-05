import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router';
import Routes from '../../routes';

const NotFound = memo(({ history }) => (
  <div className="notfound-container">
    <div className="text-exa">404</div>
    <div className="text-tera">There&apos;s Nothing here!</div>
    <div className="text-giga text-dim">
      Not all wander are lost. But you certainly are.
    </div>
    <button
      type="button"
      className="secondary-button"
      onClick={() => history.push(Routes.home)}
    >
      Go back
    </button>
  </div>
));

export default withRouter(NotFound);

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
