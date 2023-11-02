import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Create your root reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;