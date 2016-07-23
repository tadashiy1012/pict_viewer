import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import PictureContainer from './containers/PictureContainer.jsx';
import AddPicture from './containers/AddPicture.jsx';
import ModalContainer from './containers/ModalContainer.jsx';

const App = () => (
  <div>
    <ModalContainer />
    <PictureContainer />
    <hr />
    <AddPicture />
  </div>
);

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);