"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import React from "react";
import { BsBriefcase, BsCash, BsClock, BsGeoAlt } from "react-icons/bs";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import { toast } from "react-toastify";
import JobOverview from "@/app/Components/jobdetails/JobOverview";


const JobDetailsPage: React.FC = () => {

  const jobs = [
    {
      id: "1",
      logo: "/infosys.png",
      title: "Software Tester",
      company: "Infosys",
      location: "Chennai",
      experience: "Intermediate Level",
      salaryRange: "$50,000 - $65,000",
      tag: "Full-time",
      category: "QA/Testing",
      education: "B.Tech / B.Sc in IT",
      description:
        "Ensure the quality and reliability of applications by executing test strategies, identifying bugs, and working closely with development teams.",
      responsibilities: [
        "Develop and execute test cases",
        "Identify and document bugs",
        "Perform regression testing",
        "Collaborate with developers for issue resolution",
      ],
    },
    {
      id: "2",
      logo: "/google.png",
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      experience: "Entry Level",
      salaryRange: "$60,000 - $75,000",
      tag: "Remote",
      category: "Development",
      education: "B.Tech / BCA",
      description:
        "Build engaging and responsive user interfaces using React and modern frontend frameworks to enhance user experience.",
      responsibilities: [
        "Convert designs into functional UI",
        "Optimize frontend performance",
        "Work with designers and backend developers",
        "Write clean and maintainable code",
      ],
    },
    {
      id: "3",
      logo: "/microsoft.png",
      title: "Backend Developer",
      company: "Microsoft",
      location: "Hyderabad",
      experience: "Senior Level",
      salaryRange: "$90,000 - $120,000",
      tag: "Hybrid",
      category: "Development",
      education: "B.Tech / M.Tech",
      description:
        "Design and implement scalable backend services and APIs using modern backend technologies such as Node.js and Express.",
      responsibilities: [
        "Build scalable backend systems",
        "Integrate APIs and databases",
        "Write reusable backend components",
        "Ensure system security and efficiency",
      ],
    },
    {
      id: "4",
      logo: "/adobe.jpg",
      title: "UI/UX Designer",
      company: "Adobe",
      location: "Mumbai",
      experience: "Mid Level",
      salaryRange: "$65,000 - $80,000",
      tag: "Full-time",
      category: "Design",
      education: "B.Des / Equivalent",
      description:
        "Create intuitive and visually appealing designs for web and mobile platforms, enhancing the overall user experience.",
      responsibilities: [
        "Design wireframes and prototypes",
        "Conduct user research and testing",
        "Collaborate with developers",
        "Maintain design consistency across products",
      ],
    },
    {
      id: "5",
      logo: "/amazon.jpg",
      title: "Product Manager",
      company: "Amazon",
      location: "Remote",
      experience: "Senior Level",
      salaryRange: "$100,000 - $130,000",
      tag: "Full-time",
      category: "Product",
      education: "MBA / B.Tech",
      description:
        "Lead product development from ideation to launch, aligning business goals with user needs and driving the roadmap.",
      responsibilities: [
        "Define product vision and strategy",
        "Gather and prioritize requirements",
        "Work with cross-functional teams",
        "Analyze market and competition",
      ],
    },
    {
      id: "6",
      logo: "/ibm.png",
      title: "DevOps Engineer",
      company: "IBM",
      location: "Pune",
      experience: "Mid Level",
      salaryRange: "$70,000 - $90,000",
      tag: "Hybrid",
      category: "DevOps",
      education: "B.Tech / BCA",
      description:
        "Manage CI/CD pipelines, automate infrastructure, and ensure smooth deployment cycles across development environments.",
      responsibilities: [
        "Maintain CI/CD pipelines",
        "Automate infrastructure processes",
        "Monitor system performance",
        "Ensure system uptime and reliability",
      ],
    },
    {
      id: "7",
      logo: "/deloitte.jpg",
      title: "Data Analyst",
      company: "Deloitte",
      location: "Delhi",
      experience: "Entry Level",
      salaryRange: "$55,000 - $70,000",
      tag: "Full-time",
      category: "Analytics",
      education: "B.Sc / B.Tech",
      description:
        "Collect, analyze, and interpret complex data sets to help guide strategic decisions and improve business performance.",
      responsibilities: [
        "Analyze large datasets",
        "Generate business insights",
        "Create dashboards and reports",
        "Work with business teams on data needs",
      ],
    },
    {
      id: "8",
      logo: "/cisco.png",
      title: "Cybersecurity Analyst",
      company: "Cisco",
      location: "Noida",
      experience: "Intermediate Level",
      salaryRange: "$80,000 - $100,000",
      tag: "Full-time",
      category: "Security",
      education: "B.Tech / M.Sc in Cyber Security",
      description:
        "Protect digital assets and infrastructure by identifying threats, managing incidents, and ensuring compliance with security standards.",
      responsibilities: [
        "Monitor and respond to security threats",
        "Conduct vulnerability assessments",
        "Ensure security compliance",
        "Investigate security breaches",
      ],
    },
    {
      id: "9",
      logo: "/flip.png",
      title: "Mobile App Developer",
      company: "Flipkart",
      location: "Kolkata",
      experience: "Mid Level",
      salaryRange: "$75,000 - $95,000",
      tag: "Remote",
      category: "Development",
      education: "B.Tech / MCA",
      description:
        "Develop high-performance mobile applications using Flutter or React Native, focusing on usability and responsiveness.",
      responsibilities: [
        "Develop cross-platform apps",
        "Collaborate with UI/UX designers",
        "Integrate APIs and backend services",
        "Ensure app performance and stability",
      ],
    },
  ];


  const { uuid } = useParams();
  console.log("params", uuid);
  // get ID from the URL
  const job = jobs.find((job) => job.id === uuid); // find job by ID

  if (!job) {
    return <div className="text-center py-20">Job not found</div>;
  }

  return (
    <main>
      <Header title="Job details" subtitle="Explore more for jobs" />
      <div className="bg-gray-50 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-8">
            {/* LEFT COLUMN */}
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              <div className="p-2 md:p-4">
                <div className="mb-2">
                  {/* <span className="text-xs text-gray-500 bg-green-50 border border-green-300 rounded p-1">
                    Just now
                  </span> */}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-sm md:text-lg font-semibold text-gray-800">
                        {job.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {job.company}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toast.success("Applied")} 
                    className="block md:hidden bg-teal-600 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-700 transition-colors"
                  >
                    Apply
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-4 md:flex md:flex-nowrap md:items-center md:gap-6">
                  <div className="flex items-center gap-1">
                    <BsBriefcase className="text-teal-600" />
                    <span>{job.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsClock className="text-teal-600" />
                    <span>{job.tag}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsCash className="text-teal-600" />
                    <span>{job.salaryRange}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsGeoAlt className="text-teal-600" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="p-2 md:p-4 mx-4 md:mx-0">
                <h2 className="text-sm md:text-xl font-semibold text-gray-800 mb-4">
                  Job Description
                </h2>
                <p className="text-sm text-gray-700 mb-4">{job.description}</p>

                <h3 className="text-sm md:text-xl font-medium text-gray-800 mt-6 mb-4">
                  Key Responsibilities
                </h3>
                <ul className="space-y-4 text-sm text-gray-700">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <Image
                        src="/tick.png"
                        alt="tick"
                        width={16}
                        height={16}
                        className="mt-1"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="p-2 md:p-4">
                <h3 className="text-sm md:text-lg font-medium text-gray-800 mb-2">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm">
                    {job.tag}
                  </span>
                  <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm">
                    {job.category}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hidden md:flex md:w-1/3 flex-col gap-6">
              <div className="p-2 h-fit">
                <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition-colors mb-4 mt-12">
                  Apply Job
                </button>
                <JobOverview
                  title={job.title}
                  jobType={job.tag} // or selectedJob.jobType if available
                  category={job.category}
                  experience={job.experience}
                  education={job.education}
                  salaryRange={job.salaryRange}
                  location={job.location}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default JobDetailsPage;
