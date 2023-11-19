import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Mohammed",
  lastName: "Salah",
  email: "",
  active: "",
};

const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {
    login: (state, action) => {
      return initialState;
    },
  },
});

export const { login } = UserReducer.actions;

export default UserReducer.reducer;
