import React from 'react';
import { connect } from 'react-redux';
import { addPicture, clearPictures } from '../actions';

const remote = window.require('electron').remote;
const ipc = window.require('electron').ipcRenderer;
let reciverInit = false;

const setReciver = (func) => {
  ipc.on('getImg-reply', (ev, arg) => {
    func(arg);
  });
  reciverInit = true;
}

const check = (tgt) => {
  const ext = tgt.substring(tgt.lastIndexOf('.') + 1);
  if (ext === 'jpg' || ext === 'png') {
    return true;
  } else {
    return false;
  }
};

const addForm = ({onSubmitWithClear, onReciveData}) => {
  if (!reciverInit) {
    setReciver(onReciveData);
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmitWithClear();
      remote.require('./openDir')((arg) => {
        const files = arg.filter((f) => {
          return check(f);
        });
        files.forEach((f) => {
          ipc.send('getImg', f);
        });
      });
    }}>
      <button type="submit">Open Directory</button>
    </form>
  );
};


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitWithClear: () => {
      dispatch(clearPictures());
    },
    onReciveData: (data) => {
      dispatch(addPicture(data));
    }
  };
};

const AddPicture = connect(
  mapStateToProps,
  mapDispatchToProps
)(addForm);

export default AddPicture;