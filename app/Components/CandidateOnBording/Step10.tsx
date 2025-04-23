"use client";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function ProfileSummary() {
  const resumeData = useSelector((state: RootState) => state.resume.parsedData);
  const educationEntries = resumeData?.structured_resume?.education || [];
  const experienceEntries = resumeData?.structured_resume?.experience || [];
  



  const experiences = [
    {
      title: "UI/UX Designer",
      company: "Oxpyn Technologies",
      location: "Kochi, Kerala",
    },
    {
      title: "Frontend Developer",
      company: "ABC Pvt Ltd",
      location: "Bangalore, India",
    },
  ];

  const education = [
    {
      course: "UI/UX Internship",
      institute: "Zoople Technologies",
    },
    {
      course: "React Developer Training",
      institute: "TechMaster Academy",
    },
    {
      course: "Web Design Certification",
      institute: "Design School",
    },
  ];

  const SectionCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="bg-[#2E5F5C]/50 p-4 rounded-xl shadow-sm relative border border-[#1C4B4B]/10">
      <h2 className="text-[#1C4B4B] font-semibold text-lg mb-3">{title}</h2>
      <button className="absolute top-4 right-4 text-[#1C4B4B] text-lg hover:text-[#DA6B64] transition">
        <FaRegEdit />
      </button>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#D3E2E2] rounded-2xl px-4 py-10 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-[#2E5F5C]/50 p-5 rounded-xl shadow mb-6 border border-[#1C4B4B]/10">
        <img
              src={resumeData?.profile_image_url || "/images/profile.svg"}
              onError={(e) => {
                e.currentTarget.src = "/images/profile.svg";
              }}
              alt="User Profile"
              className="w-28 h-30 object-cover"
            />
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold text-[#1C4B4B]">
              {resumeData?.structured_resume?.name}
            </h1>
            <p className="text-sm text-gray-600">{resumeData?.structured_resume?.email}</p>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="space-y-6">
          {/* Profile Info */}
          <SectionCard title="Profile">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-800">
              <p><strong>Name:</strong> {resumeData?.structured_resume?.name}</p>
              <p><strong>Email:</strong> {resumeData?.structured_resume?.email}</p>
              <p><strong>Phone:</strong>{resumeData?.structured_resume?.phone} </p>
              <p><strong>Country:</strong>{resumeData?.structured_resume?.email} </p>
              <p><strong>City:</strong>{resumeData?.structured_resume?.email} </p>
              <p><strong>Pincode:</strong>{resumeData?.structured_resume?.email} </p>
            </div>
          </SectionCard>

          {/* Experience Info */}
          <SectionCard title="Experience">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
              {experienceEntries.map((exp:any, idx:number) => (
                <div key={idx}>
                  <p><strong>Role:</strong> {exp.role}</p>
                  <p><strong>Company:</strong> {exp.company}</p>
                  <p><strong>Location:</strong> {exp.location}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Education Info */}
          <SectionCard title="Education">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-800">
              {educationEntries.map((edu:any, idx:number) => (
                <div key={idx}>
                  <p><strong>Course:</strong> {edu.degree}</p>
                  <p><strong>Institute:</strong> {edu.institution}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
          <Link href="/CandidateBoarding/Step9">
            <button className="w-full sm:w-auto border border-[#DA6B64] text-[#DA6B64] px-6 py-2 rounded-md hover:bg-[#fdf1f0] transition">
              Back
            </button>
          </Link>
          <Link href="/CandidateBoarding/Step12">
            <button className="w-full sm:w-auto bg-[#DA6B64] text-white px-6 py-2 rounded-md hover:bg-[#c3554f] transition">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
