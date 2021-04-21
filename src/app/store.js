import { configureStore } from '@reduxjs/toolkit';
import shakeReducer from '../AppReducer';

export default configureStore({
  reducer: {
    shake: shakeReducer,
  },
});
