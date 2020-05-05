import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.scss';

import App from './app/containers/app';
import configureStore from './store';

const store = configureStore();

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
