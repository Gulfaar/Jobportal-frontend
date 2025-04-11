import axios, { AxiosError } from "axios";

// Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000", // Fallback for development
});

const JOBS_ENDPOINT = process.env.NEXT_PUBLIC_APP_JOBS_API_ENDPOINT || "/job/jobs";
const SEARCH_JOBS_ENDPOINT = process.env.NEXT_PUBLIC_APP_SEARCH_JOBS_API_ENDPOINT || "/job/jobs/search";

// Generic error handler
const handleAxiosError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ error?: string }>;
    const responseData = axiosError.response?.data;

    const errorMessage =
      responseData && typeof responseData === "object" && responseData.error
        ? responseData.error
        : axiosError.message || "An error occurred";

    console.error("Axios error:", errorMessage);
    throw new Error(errorMessage);
  } else {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Unexpected error:", message);
    throw new Error("Unexpected error occurred");
  }
};

// Fetch all jobs
export const getAllJobs = async () => {
  try {
    if (!JOBS_ENDPOINT) {
      throw new Error("JOBS_ENDPOINT is not defined");
    }
    const response = await api.get(JOBS_ENDPOINT);
    console.log("✅ getAllJobs:", response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Search jobs by designation or title
export const searchJobs = async (query: string) => {
  try {
    if (!SEARCH_JOBS_ENDPOINT) {
      throw new Error("SEARCH_JOBS_ENDPOINT is not defined");
    }
    const url = `${SEARCH_JOBS_ENDPOINT}?designation=${encodeURIComponent(query)}`;
    console.log(`Sending request to: ${url}`);
    const response = await api.get(url);
    console.log("✅ searchJobs:", response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

// Get job details by ID
export const getJobById = async (uuid: string) => {
  try {
    const response = await api.get(`/job/${uuid}`);
    console.log("✅ getJobById:", response.data);
    return response.data.job;
  } catch (error) {
    handleAxiosError(error);
  }
};