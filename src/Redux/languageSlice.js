import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "English",
  },
  reducers: {
    setEnglish: (state) => {
      state.language = "English";
    },
    setPolish: (state) => {
      state.language = "Polish";
    },
    setSpanish: (state) => {
      state.language = "Spanish";
    },
  },
});

export const { toogleLanguage } = languageSlice.actions;

const selectLanguageState = (state) => state.language;
export const selectLanguage = (state) => selectLanguageState(state).language;

export default languageSlice.reducer;
