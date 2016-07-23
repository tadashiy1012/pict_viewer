import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions';

const PictureModal = ({ picture, onCloseClick, height }) => {
  return (
    <div className="modal">
      <input id="modal-trigger" type="checkbox" checked={picture !== '' ? true : false} />
      <div className="modal-overlay">
        <div className="modal-wrap">
          <section className="closeContainer">
            <label onClick={() => onCloseClick()}>✖</label>
          </section>
          <section className="imgContainer">
            <div style={{
              height: height
            }}>
              <img className="modalPicture" src={picture} /></div>
          </section>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  if (state.modal === '') {
    return {
      picture: ''
    };
  }
  return {
    picture: state.modal.picture,
    height: state.modal.height
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseClick: () => {
      dispatch(closeModal());
    }
  };
};

const PictureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureModal);

export default PictureContainer;