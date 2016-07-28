import React from 'react';
import { connect } from 'react-redux';
import { addPicture, showModal } from '../actions';

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

const ipc = window.require('electron').ipcRenderer;

const setReciver = (func) => {
  ipc.on('getImg-reply', (ev, arg) => {
    func(arg);
  });
}

const setSender = (files, page) => {
  const start = 10 * (page - 1);
  const end = (10 * (page -1)) + 10;
  const len = files.length;
  files.slice(start, end < len ? end : len).forEach((f) => {
    ipc.send('getImg', f);
  });
};

const PictureList = ({ pictures, onReciveData, onPictClick }) => {
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

let prevPage = 0;

const mapStateToProps = (state) => {
  console.log(state);
  if (state.page !== prevPage || state.loaded === true) {
    setSender(state.files, state.page);
  }
  prevPage = state.page;
  return {
    files: state.files,
    pictures: state.pictures,
    page: state.page
  };
};

const mapDispatchToProps = (dispatch) => {
  setReciver(data => dispatch(addPicture(data)));
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