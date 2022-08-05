import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import content from "./content";
import modal from "./modal";
import clickedComment from "./clickedComment";

const store = configureStore({
  reducer: {
    auth,
    content,
    modal,
    clickedComment,
  },
});

export default store;
