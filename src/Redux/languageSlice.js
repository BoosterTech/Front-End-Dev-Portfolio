import { createSlice, createSelector } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "English",
  },
  reducers: {
    setLanguage: (state, { payload: newState }) => {
      state.language = newState;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

const selectLanguageState = (state) => state.language;

export const selectLanguage = createSelector(
  [selectLanguageState],
  (setting) => setting.language
);

export default languageSlice.reducer;
