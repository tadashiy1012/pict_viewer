import {handleAction, handleActions} from 'redux-actions';
import {addPicture, clearPictures, showModal, closeModal} from '../actions';

const reducer = handleActions({
  [addPicture]: (state, action) => {
    return Object.assign({}, state, {
      pictures: [...state.pictures, action.payload]
    });
  },
  [clearPictures]: (state, action) => {
    return Object.assign({}, state, {
      pictures: []
    });
  },
  [showModal]: (state, action) => {
    return Object.assign({}, state, {
      modal: {
        picture: action.payload[0],
        height: action.payload[1]
      }
    });
  },
  [closeModal]: (state, action) => {
    return Object.assign({}, state, {
      modal: ''
    });
  }
}, {
  pictures: [],
  modal: ''
});

export default reducer;