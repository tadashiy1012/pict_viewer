import { combineReducers } from 'redux';
import pictures from './pictures.js';

const pictureApp = combineReducers({ pictures });

export default pictureApp;