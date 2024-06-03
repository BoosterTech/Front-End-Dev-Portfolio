import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import generalReducer from "./generalSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    general: generalReducer,
  },
});

export default store;
