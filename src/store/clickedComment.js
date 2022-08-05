import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clickedComment: [],
};

const clickedComment = createSlice({
  name: "clickedComment",
  initialState,
  reducers: {
    setComment: (state, action) => {
      state.clickedComment = action.payload;
    },
  },
});

export const { setComment } = clickedComment.actions;
export default clickedComment.reducer;
