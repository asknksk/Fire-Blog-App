import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: [],
};

const content = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setContent } = content.actions;
export default content.reducer;
