import axios from "axios";
import { Job } from "../types/job";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.gulfaarjobs.com";

interface JobApiResponse {
  success: boolean;
  data: Job[];
  totalJobs?: number;
}

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

    const { success, data: jobs } = response.data;

    if (!success) {
      return {
        success: false,
        message: "API request failed",
        data: [],
        total: 0,
      };
    }

    if (!Array.isArray(jobs)) {
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
      total: response.data.totalJobs || jobs.length,
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
export const searchJobs = async (query: string): Promise<JobServiceResponse> => {
  try {
    const response = await axios.get<JobApiResponse>(
      `${API_BASE_URL}/job/jobs/search?designation=${encodeURIComponent(query)}`,
      { withCredentials: true }
    );

    const { success, data: jobs } = response.data;

    if (!success) {
      return {
        success: false,
        message: "Search API request failed",
        data: [],
        total: 0,
      };
    }

    if (!Array.isArray(jobs)) {
      return {
        success: false,
        message: "Invalid response: search jobs is not an array",
        data: [],
        total: 0,
      };
    }

    return {
      success: true,
      data: jobs,
      total: response.data.totalJobs || jobs.length,
    };
  } catch (error: any) {
    console.error("Search Job error:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || "Failed to search jobs",
      data: [],
      total: 0,
    };
  }
};