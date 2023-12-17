import { configureStore } from "@reduxjs/toolkit";
import auth from "./modules/auth";
// redux root file
const store = configureStore({
  reducer: {
    auth
  }
})
export default store;