import { createSlice } from "@reduxjs/toolkit";

const studentSideSlice = createSlice({
  name: "studentSide",
  initialState: {
    selected: 0,
  },
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const selected = (state) => state.studentSide.selected;

export const { setSelected } = studentSideSlice.actions;

export default studentSideSlice.reducer;
