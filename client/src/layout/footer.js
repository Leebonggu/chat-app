import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  background-color: #52a7f9;
  color: white;
  justify-content: center;
  align-items: center;
`;

const Footer = memo(() => (
  <Container>
     <footer role="contentinfo" aria-label="Footer">
        @CYS Insight
      </footer>
  </Container>
));

export default Footer;
