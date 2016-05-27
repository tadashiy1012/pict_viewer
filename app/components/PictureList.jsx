import React, { PropTypes } from 'react';
import Picture from './Picture.jsx';

function getWindowHeight() {
  const { BrowserWindow } = window.require('electron').remote;
  return BrowserWindow.getFocusedWindow().getSize()[1];
}

const PictureList = ({ pictures, onPictClick }) => {
  return (
    <div className="pictureList">
      {pictures.map(picture => <Picture
        key={picture.id}
        {...picture}
        onClick={() => onPictClick(picture.picture, getWindowHeight())}
      />)}
    </div>
  );
};

PictureList.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onPictClick: PropTypes.func.isRequired
};

export default PictureList;