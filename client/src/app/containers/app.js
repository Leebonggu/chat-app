import React from "react";
import { Router } from 'react-router-dom';
import { history } from '../../store';
import RouteConfig from '../../routes/routeConfig';
import Layout from '../../layout/container/layout';
import ErrorBoundary from '../components/errorBoundary';

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <ErrorBoundary>
            <RouteConfig />
          </ErrorBoundary>
        </Layout>
      </Router>
    );
  }
}

export default App;
