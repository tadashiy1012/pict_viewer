import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions';

const Picture = ({ onClick, picture }) => {
  return (
    <img
      className="pictureThumbnail"
      src={picture}
      onClick={onClick}
    />
  );
};

function getWindowHeight() {
  const { BrowserWindow } = window.require('electron').remote;
  return BrowserWindow.getFocusedWindow().getSize()[1];
}

const PictureList = ({ pictures, onPictClick }) => {
  const pics = pictures.map((picture, idx) => {
    return (<Picture
      key={idx}
      picture={picture}
      onClick={() => onPictClick(picture, getWindowHeight())}
    />);
  });
  return (
    <div className="pictureList">
      {pics}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPictClick: (picture, size) => {
      dispatch(showModal([picture, size]));
    }
  };
};

const PictureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureList);

export default PictureContainer;