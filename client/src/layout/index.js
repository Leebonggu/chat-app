import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 0.5rem 1.5rem;
`;

const Layout = ({ children }) => (
  <Container>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </Container>
);

export default memo(Layout);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
