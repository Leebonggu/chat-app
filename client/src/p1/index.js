import React from 'react';
import styled from 'styled-components';

import Description from './component/description';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const P1 = () => {
  return (
    <Container>
      <Description />
      <div>start here...</div>
    </Container>
  );
};

export default P1;
