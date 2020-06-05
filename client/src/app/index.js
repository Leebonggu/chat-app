import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

import RouteConfig from '../routes/routeConfig';
import Layout from '../layout';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <RouteConfig />
      </Layout>
    </Router>
  );
}

export default App;
