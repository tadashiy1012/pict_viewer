const modal = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return action.picture || state;
    case 'CLOSE_MODAL':
      return '';
    default:
      return state;
  }
};

export default modal;