import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import content from "./content";
import modal from "./modal";

const store = configureStore({
  reducer: {
    auth,
    content,
    modal,
  },
});

export default store;
