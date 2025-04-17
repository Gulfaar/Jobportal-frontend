import React from 'react';
import { BsPerson, BsClock, BsBriefcase, BsGeoAlt } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';

interface JobOverviewProps {
  title: string;
  jobType: string;
  category: string;
  experience: string;
  education: string;
  salaryRange: string;
  location: string;
}

const JobOverview: React.FC<JobOverviewProps> = ({
  title,
  jobType,
  category,
  experience,
  education,
  salaryRange,
  location,
}) => {
  return (
    <div className="bg-[#EBF5F4] rounded-lg p-6 mb-6">
      <h3 className="text-lg text-black font-semibold mb-4">Job Overview</h3>
      <div className="space-y-4">
        <OverviewItem icon={<BsPerson className="text-teal-600 text-xl" />} label="Job Title" value={title} />
        <OverviewItem icon={<BsClock className="text-teal-600 text-xl" />} label="Job Type" value={jobType} />
        <OverviewItem icon={<BsBriefcase className="text-teal-600 text-xl" />} label="Category" value={category} />
        <OverviewItem icon={<BsClock className="text-teal-600 text-xl" />} label="Experience" value={experience} />
        <OverviewItem icon={<FaGraduationCap className="text-teal-600 text-xl" />} label="Degree" value={education} />
        <OverviewItem icon={<BiDollar className="text-teal-600 text-xl" />} label="Offered Salary" value={salaryRange} />
        <OverviewItem icon={<BsGeoAlt className="text-teal-600 text-xl" />} label="Location" value={location} />
      </div>
    </div>
  );
};

const OverviewItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3">
    {icon}
    <div>
      <p className="text-sm text-black">{label}</p>
      <p className="text-sm text-gray-500 font-medium">{value}</p>
    </div>
  </div>
);

export default JobOverview;
