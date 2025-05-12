"use client";

import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function ProfileSummary() {
  const resumeData = useSelector((state: RootState) => state.resume.parsedData);
  const educationEntries = resumeData?.structured_resume?.education || [];
  const addeducationEntries = useSelector((state: RootState) => state.resume.education);
  const experienceEntries = resumeData?.structured_resume?.experience || [];
  const addedexperienceEntries = useSelector((state: RootState) => state.resume.experiences);
  const country = useSelector((state: RootState) => state.resume.selectedCountry);
  
  const pincode = useSelector((state: RootState) => state.resume.pincode);

  console.log(pincode, "pincode");

  console.log(addedexperienceEntries,"addedexperienceEntries");
  


  const SectionCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="bg-white p-5 rounded-2xl shadow-md border border-[#1C4B4B]/10 relative">
      <h2 className="text-[#1C4B4B] font-semibold text-lg mb-4">{title}</h2>
      <button className="absolute top-5 right-5 text-[#1C4B4B] hover:text-[#DA6B64] transition">
        <FaRegEdit />
      </button>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#D3E2E2] px-4 py-10 sm:px-8 rounded-2xl">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-2xl shadow-md mb-8 border border-[#1C4B4B]/10">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#1C4B4B]">
            <img
              src={resumeData?.profile_image_url || "/images/profile.svg"}
              onError={(e) => {
                e.currentTarget.src = "/images/profile.svg";
              }}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-[#1C4B4B]">
              {resumeData?.structured_resume?.name || "John Doe"}
            </h1>
            <p className="text-sm text-gray-600">{resumeData?.structured_resume?.email || "johndoe@email.com"}</p>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="space-y-6">

          {/* Profile Info */}
          <SectionCard title="Profile">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 ">
              <p><strong>Name:</strong> {resumeData?.structured_resume?.name}</p>
              <p><strong>Email:</strong> {resumeData?.structured_resume?.email}</p>
              <p><strong>Phone:</strong> {resumeData?.structured_resume?.phone}</p>
              <p><strong>Country:</strong> {country || country || ""}</p>
              <p><strong>City:</strong> {resumeData?.structured_resume?.city}</p>
              <p><strong>Pincode:</strong> {pincode}</p>
            </div>
          </SectionCard>

          {/* Experience Info */}
          <SectionCard title="Experience">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
              {experienceEntries.map((exp: any, idx: number) => (
                <div key={idx}>
                  <p><strong>Role:</strong> {exp.role}</p>
                  <p><strong>Company:</strong> {exp.company}</p>
                  <p><strong>Location:</strong> {exp.location}</p>
                </div>
              ))}
            </div>
          </SectionCard>


          {/* Education Info */}

          {

            addedexperienceEntries.length > 0 &&

            <SectionCard title="Experience">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
                {addedexperienceEntries.map((exp: any, idx: number) => (
                  <div key={idx}>
                    <p><strong>Role:</strong> {exp.jobTitle}</p>
                    <p><strong>Company:</strong> {exp.companyName}</p>
                    <p><strong>Location:</strong> {exp.country}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

          }
          <SectionCard title="Education">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-800">
              {educationEntries.map((edu: any, idx: number) => (
                <div key={idx}>
                  <p><strong>Course:</strong> {edu.degree}</p>
                  <p><strong>Institute:</strong> {edu.institution}</p>
                </div>
              ))}
            </div>
          </SectionCard>



          {
            addeducationEntries.length > 0 &&

            <SectionCard title="Education">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-800">
                {educationEntries.map((edu: any, idx: number) => (
                  <div key={idx}>
                    <p><strong>Course:</strong> {edu.degree}</p>
                    <p><strong>Institute:</strong> {edu.institution}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

          }

        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-10 gap-4">
          <Link href="/CandidateBoarding/Step9">
            <button className="w-full sm:w-auto border border-[#DA6B64] text-[#DA6B64] px-6 py-2 rounded-lg hover:bg-[#fdf1f0] transition">
              Back
            </button>
          </Link>
          <Link href="/CandidateBoarding/Step12">
            <button className="w-full sm:w-auto bg-[#DA6B64] text-white px-6 py-2 rounded-lg hover:bg-[#c3554f] transition">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
