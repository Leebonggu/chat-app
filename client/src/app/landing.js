import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AllRoutes, adminRoutes } from '../routes/routeConfig';

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
  const [username , setUsername] = useState('');
  const [category, setCategory] = useState('');
  const tab = (route, i) => (
    <StyledSpan key={`link-${i}`} to={{
      pathname:`${route}`,
      search: `?username=${username}${username === 'admin' ? `` : `&roomname=${category}`}`,
    }}>
      {route.toUpperCase()}
    </StyledSpan>
  );

  const handleUsername = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handleCategory = (e) => {
    setCategory(`${e.target.value}-${Math.ceil(Math.random() * 10000)}`);
  }
  return (
    <Container>
      <h2>PRACTICE</h2>
      <input
        style={{ marginBottom: '1rem'}}
        type="text"
        placeholder="이름을 입력바람"
        value={username}
        onChange={handleUsername}
        required
      />
      <select onChange={handleCategory}>
        <option disabled selected>선택바람</option>
        <option value="시나리오">시나리오</option>
        <option value="강의">강의</option>
        <option value="일반행정">일반행정</option>
      </select>
      {username.length > 0 && (
        <Wrapper>
          {username !== 'admin' && AllRoutes.filter((r, i) => r.path !== '/관리자').map((r, i) => tab(r.path, i))}
          {username === 'admin' && adminRoutes.map((r, i) => tab(r.path, i))}
        </Wrapper>
      )}
    </Container>
  );
}

export default Landing;