import axios, { AxiosError } from "axios";

// ✅ Axios instance for cleaner imports and possible interceptors
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const JOBS_ENDPOINT = process.env.NEXT_PUBLIC_APP_JOBS_API_ENDPOINT;
const SEARCH_JOBS_ENDPOINT = process.env.NEXT_PUBLIC_APP_SEARCH_JOBS_API_ENDPOINT;

//  Generic error handler
const handleAxiosError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data;

    const errorMessage =
      responseData && typeof responseData === "object"
        ? (responseData as any).error || axiosError.message
        : axiosError.message;

    console.error("Axios error:", errorMessage);
    throw new Error(errorMessage);
  } else {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Unexpected error:", message);
    throw new Error("Unexpected error occurred");
  }
};

//  Fetch all jobs
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

//  Search jobs by designation or title
export const searchJobs = async (query: string) => {
  try {
    const url = `${SEARCH_JOBS_ENDPOINT}?designation=${encodeURIComponent(query)}`;
    const response = await api.get(url);
    console.log("✅ searchJobs:", response.data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

//  Get job details by ID
export const getJobById = async (uuid: string) => {
  try {
    const { data } = await api.get(`/job/${uuid}`);
    return data.job;
  } catch (error) {
    throw handleAxiosError(error);
  }
};
