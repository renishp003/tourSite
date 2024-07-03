import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../store/user/user.slice';

const rootReducer = combineReducers({
  user: userReducer,
});
export default rootReducer