import { configureStore } from "@reduxjs/toolkit";

import generalReducer from "./generalSlice";
import languageReducer from "./languageSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    general: generalReducer,
  },
});

export default store;
