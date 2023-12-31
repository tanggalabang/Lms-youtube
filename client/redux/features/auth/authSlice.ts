//fungsi kode ini adalah menyimpan data pada state untuk auth
// karena auth tidak menyimpan data pada database

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    userRegistration: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },

    userLoggedIn: (
      state,
      action: PayloadAction<{ accessToken: string; user: string }>
    ) => {
      state.token = action.payload.accessToken;//token setelah login
      state.user = action.payload.user;
    },

    userLoggedOut: (state) => {
      state.token = "";
      state.user ="";
    },

  },
});

export const { userRegistration, userLoggedIn, userLoggedOut } =
  authSlice.actions;

export default authSlice.reducer;
