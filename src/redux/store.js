import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../features/User/movie/MovieSlice";
import UserReducer from "../features/User/UserSlice";

export default configureStore({
  reducer: {
    user: UserReducer,
    movie: MovieReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware()];
    //alternative way of adding middlewares
    /*    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) */
  },
});
