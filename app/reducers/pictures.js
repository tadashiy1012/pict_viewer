const picture = (state, action) => {
  switch (action.type) {
    case 'ADD_PICTURE':
      return {
        id: action.id,
        picture: action.picture
      };
    default:
      return state;
  }
};

const pictures = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PICTURE':
      return [
        ...state,
        picture(undefined, action)
      ];
    case 'CLEAR_PICTURES':
      return [];
    default:
      return state;
  }
};

export default pictures;