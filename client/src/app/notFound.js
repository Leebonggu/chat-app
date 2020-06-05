import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Routes from '../routes';

const Container = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
`;

const NotFound = memo(({ history }) => (
  <Container>
    <h4>
      Not all wander are lost. But you certainly are.
    </h4>
    <button
      type="button"
      onClick={() => history.push(Routes.home)}
    >
      Go back
    </button>
  </Container>
));

export default withRouter(NotFound);

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
