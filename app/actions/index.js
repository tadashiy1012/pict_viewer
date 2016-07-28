import {createAction} from 'redux-actions'

export const addPicture = createAction('ADD_PICTURE');
export const clearPictures = createAction('CLEAR_PICTURES');
export const showModal = createAction('SHOW_MODAL');
export const closeModal = createAction('CLOSE_MODAL');
export const setData = createAction('SET_DATA');
export const setPageSize = createAction('SET_PAGE_SIZE');
export const setPage = createAction('SET_PAGE');
export const nextPage = createAction('NEXT_PAGE');
export const prevPage = createAction('PREV_PAGE');