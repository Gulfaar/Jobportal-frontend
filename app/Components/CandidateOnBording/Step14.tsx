import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";

export default function ProfileSummary() {
  // Sample dynamic data (replace this with real API or props data)
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

  const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white rounded-md p-4 mb-4 relative">
      <button className="text-[#1C4B4B] absolute top-2 right-2">
        <FaRegEdit />
      </button>
      <p className="font-semibold text-[#1C4B4B] mb-2">{title}</p>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col mt-14 w-full mr-[318px]">
      {/* Top profile section */}
      <div className="flex items-center gap-4 bg-[#EDF6F5] rounded-md p-4 mr-[349px] w-[27%]">
        <Image src="/images/profile.svg" alt="Profile" width={60} height={60} className="rounded-full" />
        <div>
          <h2 className="text-sm font-semibold text-black">Amanda Rawles</h2>
          <p className="text-xs text-black">alexarawles@gmail.com</p>
        </div>
      </div>

      {/* Main content */}
      <div className="w-[137%] max-w-4xl mt-6 bg-[#AEC1C1] p-4 rounded-lg">
        <div className="bg-[#1C4B4B] h-[400px] rounded-md overflow-y-scroll custom-scrollbar p-4">

          {/* Profile Section */}
          <Card title="Profile">
            <div className="text-sm text-gray-800 space-y-1">
              <p>Name : {profile.name}</p>
              <p>Country : {profile.country}</p>
              <p>Email : {profile.email}</p>
              <p>City : {profile.city}</p>
              <p>Phone number : {profile.phone}</p>
              <p>Pincode : {profile.pincode}</p>
            </div>
          </Card>

          {/* Experience Section */}
          <Card title="Experience">
            <div className="text-sm text-gray-800 grid grid-cols-2 gap-4">
              {experiences.map((exp, idx) => (
                <div key={idx}>
                  <p>{exp.title}</p>
                  <p>Company name: {exp.company}</p>
                  <p>{exp.location}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Education Section */}
          <Card title="Education">
            <div className="text-sm text-gray-800 grid grid-cols-3 gap-4">
              {education.map((edu, idx) => (
                <div key={idx}>
                  <p>{edu.course}</p>
                  <p>{edu.institute}</p>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full max-w-4xl mt-6">
        <button className="border border-[#FF6F61] text-[#DA6B64] px-4 py-1 rounded-md text-sm">Back</button>
        <button className="bg-[#DA6B64] text-white px-4 py-1 rounded-md text-sm">Continue</button>
      </div>
    </div>
  );
}
