let nextId = 0;
export const addPicture = (picture) => {
  return {
    type: 'ADD_PICTURE',
    id: nextId++,
    picture: picture
  };
};

export const clearPictures = () => {
  return {
    type: 'CLEAR_PICTURES'
  };
};

export const showModal = (picture, height) => {
  return {
    type: 'SHOW_MODAL',
    picture: picture,
    height: height
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  };
};