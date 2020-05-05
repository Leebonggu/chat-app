import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="layout-container">
    <Header />
    <div className="layout-content">
      {children}
    </div>
    <Footer />
  </div>
);

export default memo(Layout);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
