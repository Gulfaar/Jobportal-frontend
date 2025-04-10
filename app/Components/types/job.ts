// types/job.ts
export interface Job {
  _id: string;
  jobId: string;
  company: {
    logoUrl: string;
    name: string;
    logo: string;
  };
  title: string;
  type: string;
  category: string;
  salaryRange: {
    min: number;
    max: number;
  };
  location: {
    city: string;
    country: string;
  };
  experience: number;
  degree: string;
  description: string;
  keyResponsibilities: string[];
  professionalSkills: string[];
  tags: string[];
  phoneNumber: string;
  postDate: Date;
  proficiencyLevel: string;
  designation: string;
}
