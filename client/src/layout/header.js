import React, { memo, useMemo } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  background-color: #52a7f9;
  color: white;
  padding-left: 1.5rem;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: #52a7f9;
  border: none;
  text-decoration: none;
  font-size: 1rem;
  color: ${({ isHome }) => isHome ? 'darkblue' : 'white' };
  cursor: ${({ isHome }) => isHome ? 'auto' : 'pointer' };

  &:hover {
    color: darkblue;
  }
  &:focus {
    outline: none;
  }
`;

const Header = memo(() => {
  const history = useHistory();
  const isHome = useMemo(() => history.location.pathname === '/',
    [history.location.pathname]
  );
  const toDashboard = () => {
    if (!isHome) {
      history.push('/');
    }

    return null;
  };

  return (
    <Container>
      <StyledButton isHome={isHome} type="button" onClick={toDashboard}>
        GENIUS
      </StyledButton>
    </Container>
  );
});

export default Header;