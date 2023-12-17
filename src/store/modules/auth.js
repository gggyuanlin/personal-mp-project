import { createSlice } from "@reduxjs/toolkit";

const Status = {
  idle: 0,
  loading: 1,
  login: 2,
  logout: 3,
  timeout: 4,
  guest: 5,
};
const Role = {
  doctor: 1,
  patient: 2,
  admin: 3,
  sale: 4,
};
const initialState = {
  status: Status.idle,
  role: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
    updateRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { updateStatus, updateRole } = authSlice.actions;
export const authSelector = {
  role: (state) => state.auth.role,
  status: (state) => state.auth.status,
};
export default authSlice.reducer;
