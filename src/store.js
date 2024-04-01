import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./common/languageSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default store;
