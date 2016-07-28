import {handleAction, handleActions} from 'redux-actions';
import {
  addPicture, clearPictures,
  showModal, closeModal,
  setData,
  setPageSize, setPage, nextPage, prevPage
} from '../actions';

const reducer = handleActions({
  [addPicture]: (state, action) => {
    return Object.assign({}, state, {
      pictures: [...state.pictures, action.payload],
      loaded: false 
    });
  },
  [clearPictures]: (state, action) => {
    return Object.assign({}, state, {
      pictures: [],
      loaded: false 
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
  },
  [setData]: (state, action) => {
    return Object.assign({}, state, { files: action.payload,
      loaded: true });
  },
  [setPageSize]: (state, action) => {
    return Object.assign({}, state, { pageSize: action.payload, 
      loaded: false });
  },
  [setPage]: (state, action) => {
    return Object.assign({}, state, { page: action.payload, 
      loaded: false });
  },
  [nextPage]: (state, action) => {
    return Object.assign({}, state, {
      page: state.page < state.pageSize ? state.page + 1 : state.page
    });
  },
  [prevPage]: (state, action) => {
    return Object.assign({}, state, {
      page: state.page > 1 ? state.page - 1 : state.page
    })
  }
}, {
  files: [],
  pictures: [],
  modal: '',
  pageSize: 0,
  page: 0,
  loaded: false
});

export default reducer;