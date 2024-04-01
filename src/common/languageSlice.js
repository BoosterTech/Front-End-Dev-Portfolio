import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    islanguageEnglish: true,
  },
  reducers: {
    toogleLanguage: (state) => {
      state.islanguageEnglish = !state.islanguageEnglish;
    },
  },
});

export const { toogleLanguage } = languageSlice.actions;

const selectLanguageState = (state) => state.language;

export const selectIsLanguageEnglish = (state) =>
  selectLanguageState(state).islanguageEnglish;

export default languageSlice.reducer;
