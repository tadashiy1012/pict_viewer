import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pictureApp from './reducers';
import App from './components/App.jsx';

let store = createStore(pictureApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);