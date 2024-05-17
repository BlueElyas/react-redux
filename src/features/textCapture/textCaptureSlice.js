import { createSlice } from "@reduxjs/toolkit";

export const textCaptureSlice = createSlice({
  name: "textCapture",
  initialState: "",
  reducers: {
    handleTextCapture(state, action) {
      return action.payload;
    },
  },
});

export const { handleTextCapture } = textCaptureSlice.actions;
