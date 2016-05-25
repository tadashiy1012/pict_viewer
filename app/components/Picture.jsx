import React, { PropTypes } from 'react';

const Picture = ({ onClick, picture }) => {
  return (
    <img
      src={picture}
      onClick={onClick}
    />
  );
};

Picture.propTypes = {
  onClick: PropTypes.func.isRequired,
  picture: PropTypes.string.isRequired
};

export default Picture;