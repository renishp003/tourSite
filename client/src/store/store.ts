import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import rootReducer from "./rootReducer";
import  { userSetState } from "./user/user.slice";

export const store = configureStore({
    reducer: {
      
      user: userSetState,
    },
  });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export default store