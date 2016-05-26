import React, { PropTypes } from 'react';
import Picture from './Picture.jsx';

const PictureList = ({ pictures, onPictClick }) => {
  return (
    <div className="pictureList">
      {pictures.map(picture => <Picture
        key={picture.id}
        {...picture}
        onClick={() => onPictClick(picture.picture)}
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