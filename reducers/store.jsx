import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/userReducer";

// * create store
const store = configureStore({
  reducer: {
    UserReducer,
  },
});

export default store;
