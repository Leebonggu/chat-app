import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AllRoutes } from '../routes/routeConfig';

const Container = styled.div`
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledSpan = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 1rem;
  color: lightblue;
  &:hover {
    color: darkblue;
  }
`;

const Landing = () => {
  const tab = (route, i) => (
    <StyledSpan key={`link-${i}`} to={route}>
      {route.toUpperCase()}
    </StyledSpan>
  );

  return (
    <Container>
      <h2>PRACTICE</h2>
      <Wrapper>
        {AllRoutes.map((r, i) => tab(r.path, i))}
      </Wrapper>
    </Container>
  );
}

export default Landing;