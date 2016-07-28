import React from 'react';
import { connect } from 'react-redux';
import { clearPictures, setData,
  setPageSize, setPage } from '../actions';

const check = (tgt) => {
  const ext = tgt.substring(tgt.lastIndexOf('.') + 1);
  if (ext === 'jpg' || ext === 'png') {
    return true;
  } else {
    return false;
  }
};

const getPsize = (flen) => {
  const num = Math.floor(flen / 10);
  const rem = flen % 10;
  const psize = num + (rem > 0 ? 1 : 0);
  return psize;
};

const addForm = ({onSubmitWithClear, onSetPage, onSetData, onReciveData}) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmitWithClear();
      const remote = window.require('electron').remote;
      remote.require('./openDir')().then((resp) => {
        const list = resp.filter(f => check(f));
        onSetData(list);
        onSetPage(1, getPsize(list.length));
      });
    }}>
      <button type="submit">Open Directory</button>
    </form>
  );
};


const mapStateToProps = (state) => {
  return { page: state.page };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitWithClear: () => {
      dispatch(clearPictures());
    },
    onSetPage: (page, size) => {
      dispatch(setPageSize(size));
      dispatch(setPage(page));
    },
    onSetData: (data) => {
      dispatch(setData(data));
    }
  };
};

const AddPicture = connect(
  mapStateToProps,
  mapDispatchToProps
)(addForm);

export default AddPicture;