import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResumeState {
  parsedData: any | null; // Store parsed resume response
}

const initialState: ResumeState = {
  parsedData: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setParsedResumeData: (state, action: PayloadAction<any>) => {
      state.parsedData = action.payload;
    },
    clearResumeData: (state) => {
      state.parsedData = null;
    },
  },
});

export const { setParsedResumeData, clearResumeData } = resumeSlice.actions;
export default resumeSlice.reducer;
