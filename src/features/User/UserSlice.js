import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = UserSlice.actions;
/* export const SelectUsername = (state) => state.user.name;
export const SelectUserEmail = (state) => state.user.email;
export const SelectUserPhoto = (state) => state.user.photo; */
export const { name, email, photo } = (state) => state.user;
export default UserSlice.reducer;
