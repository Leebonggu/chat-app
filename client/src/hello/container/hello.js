import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import HelloComponent from '../component/helloComponent';
import { initializeHello } from '../actions/hello';

const Container = styled.div`
  display: flex;
`;

const Hello = () => {
  const [isSample, handleSample] = useState(false);
  const allStates = useSelector(state => ({ ...state }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    handleSample(true);
    console.log('hello!', allStates);
  }, [isSample]);

  useEffect(() => {
    console.log('running action creator');
    dispatch(initializeHello())
  }, []);

  return (
    <Container>
      {isSample ? <HelloComponent /> : 'hello'}
    </Container>
  );
};

export default Hello;
