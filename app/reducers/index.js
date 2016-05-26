import { combineReducers } from 'redux';
import pictures from './pictures.js';
import modal from './modal.js';

const pictureApp = combineReducers({ pictures, modal });

export default pictureApp;