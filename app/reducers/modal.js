const modal = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { picture: action.picture, height: action.height };
    case 'CLOSE_MODAL':
      return '';
    default:
      return state;
  }
};

export default modal;