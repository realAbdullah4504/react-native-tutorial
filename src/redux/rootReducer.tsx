// reducers.js
import {combineReducers} from 'redux';
import itemsReducer from './state/itemsReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default rootReducer;
