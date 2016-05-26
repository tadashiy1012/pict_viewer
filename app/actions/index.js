let nextId = 0;
export const addPicture = (picture) => {
  return {
    type: 'ADD_PICTURE',
    id: nextId++,
    picture: picture
  };
};

export const showPicture = (picture) => {
  return {
    type: 'SHOW_PICTURE',
    picture: picture
  };
};

export const showModal = (picture) => {
  return {
    type: 'SHOW_MODAL',
    picture: picture
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  };
};