import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import HelloComponent from './component/helloComponent';

const Container = styled.div`
  display: flex;
`;

const P1 = () => {
  const [isSample, handleSample] = useState(false);

  useEffect(() => {
    handleSample(true);
  }, [isSample]);

  return (
    <Container>
      {isSample ? <HelloComponent /> : 'hello'}
    </Container>
  );
};

export default P1;
