import { combineReducers } from '@reduxjs/toolkit';
// import userReducer from '../store/user/user.slice';
import userSlice from '../store/user/user.slice';

const rootReducer = combineReducers({
  user: userSlice,
});
export default rootReducer