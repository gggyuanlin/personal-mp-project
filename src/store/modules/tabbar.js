import { createSlice } from "@reduxjs/toolkit";
import utils from "src/utils";

const tabBarChangeHandler = (tabKey) => {
  switch (tabKey) {
    case "index":
      utils.navigator.gotoHome();
      break;
    case "getMedicine":
      utils.navigator.gotoGetMedicine();
      break;
    case "exchangeCertificate":
      utils.navigator.gotoExchangeCertificate();
      break;
    case "my":
      utils.navigator.gotoMy();
      break;

    default:
      break;
  }
};

const initialState = {
  activeKey: "index",
};
const tabbarSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateActiveKey: (state, action) => {
      tabBarChangeHandler(action.payload);
      state.activeKey = action.payload;
    },
  },
});

export const { updateActiveKey } = tabbarSlice.actions;

export default tabbarSlice.reducer;
