const picture = (state, action) => {
  console.log('\t', action);
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
  console.log(action);
  switch (action.type) {
    case 'ADD_PICTURE':
      return [
        ...state,
        picture(undefined, action)
      ];
    default:
      return state;
  }
};

export default pictures;