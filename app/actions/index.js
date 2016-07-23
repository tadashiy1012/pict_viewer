import {createAction} from 'redux-actions'

export const addPicture = createAction('ADD_PICTURE');
export const clearPictures = createAction('CLEAR_PICTURES');
export const showModal = createAction('SHOW_MODAL');
export const closeModal = createAction('CLOSE_MODAL');