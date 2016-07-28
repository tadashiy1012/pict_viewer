import React from 'react';
import {connect} from 'react-redux';
import {nextPage, prevPage, clearPictures} from '../actions';

const SelectForm= ({page, size, onPrev, onNext}) => {
  console.log(page, size);
  function checkA() {
    return page <= 1;
  }
  function checkB() {
    return page >= size;
  }
  return (
    <form onSubmit={e => e.preventDefault()}>
      <span>{page}<span></span>/<span>{size}</span></span>
      <span>{' '}</span>
      <button onClick={onPrev} disabled={checkA()}>{'<'}</button>
      <button onClick={onNext} disabled={checkB()}>{'>'}</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    size: state.pageSize,
    page: state.page
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPrev: () => {
      dispatch(prevPage());
      dispatch(clearPictures());
    },
    onNext: () => {
      dispatch(nextPage());
      dispatch(clearPictures());
    }
  };
};

const Pagenation = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectForm);

export default Pagenation;