import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResumeState {
  parsedData: any | null;
  parsedAt: string | null; // Store date when resume was parsed
}

const initialState: ResumeState = {
  parsedData: null,
  parsedAt: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setParsedResumeData: (state, action: PayloadAction<any>) => {
      state.parsedData = action.payload;
      state.parsedAt = new Date().toISOString(); // Store the current date
    },
    clearResumeData: (state) => {
      state.parsedData = null;
      state.parsedAt = null;
    },
  },
});

export const { setParsedResumeData, clearResumeData } = resumeSlice.actions;
export default resumeSlice.reducer;
