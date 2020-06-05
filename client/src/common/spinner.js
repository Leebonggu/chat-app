import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: ${({ isAbsolute }) => isAbsolute ? 'absolute' : 'relative' };
  top: ${({ isAbsolute }) => isAbsolute ? '50%' : 'auto' };
  left: ${({ isAbsolute }) => isAbsolute ? '50%' : 'auto' };
`;

const Wrapper = styled.div`
  display: inline-block;
  position: absolute;
  left:0;
  right:0;
  margin:auto;
  height: 3rem;
  width:3rem;
  top:40%;
  vertical-align:middle;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    margin: 5px;
    border-radius: 50%;
    animation: ${loader} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border: 5px solid $neutral-10;
    border-color: gray transparent transparent transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

const Spinner = ({ isAbsolute }) => (
  <Container>
    <Wrapper isAbsolute={isAbsolute}>
      <div />
    </Wrapper>
  </Container>
);

export default memo(Spinner);

Spinner.propTypes = {
  isAbsolute: PropTypes.bool
};

Spinner.defaultProps = {
  isAbsolute: false
}