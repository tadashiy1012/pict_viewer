import React, { PropTypes } from 'react';

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

PictureModal.propTypes = {
  picture: PropTypes.string.isRequired,
  height: PropTypes.number,
  onCloseClick: PropTypes.func
};

export default PictureModal;