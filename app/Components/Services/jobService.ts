import axios from "axios";
import { Job } from "../types/job";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

// Interface for Job (adjust based on your actual job structure)


// Interface for the API response
interface JobApiResponse {
  success: boolean;
  data: Job[];
  totalJobs?: number;
}

// Interface for the function's return value
interface JobServiceResponse {
  success: boolean;
  data: Job[];
  total: number;
  message?: string;
}

// Get All Jobs
export const getAllJobs = async (page: number, jobsPerPage: number): Promise<JobServiceResponse> => {
  try {
    const response = await axios.get<JobApiResponse>(`${API_BASE_URL}/job/jobs`, {
      params: {
        page,
        limit: jobsPerPage,
      },
      withCredentials: true,
    });

    // Log raw response for debugging
    console.log("Raw API response:", response.data);

    // Extract jobs and total from the response
    const { success, data: jobs, totalJobs } = response.data;

    if (!success) {
      console.error("API returned success: false", response.data);
      return {
        success: false,
        message: "API request failed",
        data: [],
        total: 0,
      };
    }

    if (!Array.isArray(jobs)) {
      console.error("Jobs is not an array:", jobs);
      return {
        success: false,
        message: "Invalid response: jobs is not an array",
        data: [],
        total: 0,
      };
    }

    return {
      success: true,
      data: jobs,
      total: totalJobs || jobs.length, // Fallback to jobs.length if totalJobs is not provided
    };
  } catch (error: any) {
    console.error("Get All Jobs error:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || "Failed to fetch jobs",
      data: [],
      total: 0,
    };
  }
};

// Search Jobs
export const searchJobs = async (query: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/job/jobs/search?designation=${encodeURIComponent(query)}`,
      { withCredentials: true }
    );
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Search Job error:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong",
    };
  }
};