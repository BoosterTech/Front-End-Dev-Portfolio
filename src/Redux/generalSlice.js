import { createSlice, createSelector } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    isContactVisible: false,
  },
  reducers: {
    setContactVisibility: (state, { payload: newState }) => {
      state.isContactVisible = newState;
    },
  },
});

export const { setContactVisibility } = generalSlice.actions;

const selectGeneralState = (state) => state.general;

export const selectContactVisibility = createSelector(
  [selectGeneralState],
  (setting) => setting.isContactVisible
);

export default generalSlice.reducer;
