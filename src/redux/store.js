import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/User/UserSlice";

export default configureStore({
  reducer: {
    user: UserSlice, //userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware()];
    //alternative way of adding middlewares
    /*    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) */
  },
});
