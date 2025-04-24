import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResumeState {
  parsedData: any | null;
  parsedAt: string | null; // Store date when resume was parsed
  selectedCountry: string | null;
  pincode: string | null;  // Add selected country
}

const initialState: ResumeState = {
  parsedData: null,
  parsedAt: null,
  selectedCountry: null,
  pincode: null, // Initialize as null
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setParsedResumeData: (state, action: PayloadAction<any>) => {
      state.parsedData = action.payload;
      state.parsedAt = new Date().toISOString();
    },
    clearResumeData: (state) => {
      state.parsedData = null;
      state.parsedAt = null;
      state.selectedCountry = null; // Clear country as well
    },
    setSelectedCountry: (state, action: PayloadAction<string>) => {
      state.selectedCountry = action.payload; // Store selected country
    },
    clearSelectedCountry: (state) => {
      state.selectedCountry = null; // Clear selected country
    },
    setPincode: (state, action: PayloadAction<string>) => {
      state.pincode = action.payload; // 👈 Add this reducer
    },
  },
});

export const {
  setParsedResumeData,
  clearResumeData,
  setSelectedCountry,
  clearSelectedCountry,
  setPincode,
} = resumeSlice.actions;
export default resumeSlice.reducer;