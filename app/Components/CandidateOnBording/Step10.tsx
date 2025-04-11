"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

export default function ProfileSummary() {
  const profile = {
    name: "Sneha S",
    email: "wwdjgst@gmail.com",
    phone: "38494849",
    country: "India",
    city: "Ernakulam",
    pincode: "682001",
  };

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

  const Card = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="bg-white rounded-lg shadow p-6 mb-6 relative">
      <button className="text-[#1C4B4B] absolute top-4 right-4 text-xl">
        <FaRegEdit />
      </button>
      <h3 className="text-lg font-bold text-[#1C4B4B] mb-4">{title}</h3>
      {children}
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC] p-4">
      <div className="w-full max-w-[71%]">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#EDF6F5] rounded-xl p-6 mb-6">
          <Image
            src="/images/profile.svg"
            alt="Profile"
            width={70}
            height={70}
            className="rounded-full"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-black">Amanda Rawles</h2>
            <p className="text-base text-black">alexarawles@gmail.com</p>
          </div>
        </div>

        {/* Main Card Section */}
        <div className="bg-[#AEC1C1] p-6 rounded-xl shadow-lg">
          <div className="bg-[#1C4B4B] rounded-lg overflow-y-auto max-h-[500px] p-6 space-y-6">
            {/* Profile Info */}
            <Card title="Profile">
              <div className="text-base text-black space-y-2">
                <p>
                  <strong>Name:</strong> {profile.name}
                </p>
                <p>
                  <strong>Country:</strong> {profile.country}
                </p>
                <p>
                  <strong>Email:</strong> {profile.email}
                </p>
                <p>
                  <strong>City:</strong> {profile.city}
                </p>
                <p>
                  <strong>Phone number:</strong> {profile.phone}
                </p>
                <p>
                  <strong>Pincode:</strong> {profile.pincode}
                </p>
              </div>
            </Card>

            {/* Experience Info */}
            <Card title="Experience">
              <div className="text-base text-black grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experiences.map((exp, idx) => (
                  <div key={idx}>
                    <p>
                      <strong>Role:</strong> {exp.title}
                    </p>
                    <p>
                      <strong>Company:</strong> {exp.company}
                    </p>
                    <p>
                      <strong>Location:</strong> {exp.location}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education Info */}
            <Card title="Education">
              <div className="text-base text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <p>
                      <strong>Course:</strong> {edu.course}
                    </p>
                    <p>
                      <strong>Institute:</strong> {edu.institute}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
        <Link href="/CandidateBoarding/Step9">
          <button className="border border-[#FF6F61] text-[#DA6B64] px-6 py-2 rounded-lg text-base hover:bg-[#FFEBE8] transition">
            Back
          </button>
        </Link>
        <Link href="/CandidateBoarding/Step11">
          <button className="bg-[#DA6B64] text-white px-6 py-2 rounded-lg text-base hover:bg-[#c65751] transition">
            Continue
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
