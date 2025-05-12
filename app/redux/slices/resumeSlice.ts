import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResumeState {
  parsedData: any | null;
  parsedAt: string | null; // Store date when resume was parsed
  selectedCountry: string | null;
  pincode: string | null; 
  experiences: Experience[];
  education: Education[]; // Add selected country
}

interface Experience {
  jobTitle: string;
  companyName: string;
  country: string;
  startDate: string;
  endDate: string;
  description: string;
  currentlyWorking: boolean;
}

interface Education {
  collegeName: string;
  fieldOfStudy: string;
  graduationMonth: string;
  graduationYear: string;
  stillStudying: boolean;
}

const initialState: ResumeState = {
  parsedData: null,
  parsedAt: null,
  selectedCountry: null,
  pincode: null,
  experiences: [],
  education: [],
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
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.experiences.push(action.payload); // 👈 Store the experience
    },
    addEducation: (state, action: PayloadAction<Education>) => {
      state.education.push(action.payload);
    },
  },
});

export const {
  setParsedResumeData,
  clearResumeData,
  setSelectedCountry,
  clearSelectedCountry,
  setPincode,
  addExperience,
  addEducation,
} = resumeSlice.actions;
export default resumeSlice.reducer;


