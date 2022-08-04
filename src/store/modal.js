import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  date: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = action.payload.name;
      state.data = action.payload.date || false;
    },
    closeModal: (state) => {
      state.open = false;
      state.data = false;
    },
  },
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;
