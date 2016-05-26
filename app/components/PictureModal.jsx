import React, { PropTypes } from 'react';

const PictureModal = ({ picture, onCloseClick }) => {
  return (
    <div className="modal">
      <input id="modal-trigger" type="checkbox" checked={picture !== '' ? true : false} />
      <div className="modal-overlay">
        <div className="modal-wrap">
          <section>
            <label onClick={() => onCloseClick()}>✖</label>
          </section>
          <section>
            <img className="modalPicture" src={picture} />
          </section>
        </div>
      </div>
    </div>
  );
};

PictureModal.propTypes = {
  picture: PropTypes.string.isRequired
};

export default PictureModal;