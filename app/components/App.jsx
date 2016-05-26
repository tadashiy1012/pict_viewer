import React from 'react';
import PictureContainer from '../containers/PictureContainer.jsx';
import AddPicture from '../containers/AddPicture.jsx';
import ModalContainer from '../containers/ModalContainer.jsx';

const App = () => (
  <div>
    <ModalContainer />
    <PictureContainer />
    <hr />
    <AddPicture />
  </div>
);

export default App;

