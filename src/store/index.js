import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import content from "./content";

const store = configureStore({
  reducer: {
    auth,
    content,
  },
});

export default store;
