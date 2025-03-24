import React from 'react';
import Image from 'next/image';
import { BsBriefcase, BsClock, BsCash, BsGeoAlt } from 'react-icons/bs';
import { CiBookmarkPlus } from 'react-icons/ci';

interface JobCardProps {
  companyLogo: string;
  title: string;
  company: string;
  category: string;
  type: string;
  salary: string;
  location: string;
  postedTime: string;
}

const JobCard: React.FC<JobCardProps> = ({
  companyLogo,
  title,
  company,
  category,
  type,
  salary,
  location,
  postedTime,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
      {/* Top Row: Posted Time & Bookmark */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500 bg-green-50 border border-green-300 rounded p-1">
          {postedTime}
        </span>
        <button className="text-gray-400 hover:text-gray-600">
          <CiBookmarkPlus size={20} />
        </button>
      </div>

      {/* Middle Row: Company Logo & Title */}
      <div className="flex gap-4 mb-4 items-center">
        <Image
          src='/samplecompanylogo.jpg'
          alt={company}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h3 className="text-base font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>

      {/* Bottom Row: Icons + "Job details" Button */}
      <div className="flex items-center justify-between">
        {/* 
          On mobile: Only show the briefcase icon/category.
          On desktop (md+): Show the other icons too.
        */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
          {/* Always visible */}
          <div className="flex items-center gap-1">
            <BsBriefcase className="text-teal-600" />
            <span>{category}</span>
          </div>

          {/* Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex items-center gap-1">
            <BsClock className="text-teal-600" />
            <span>{type}</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <BsCash className="text-teal-600" />
            <span>{salary}</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <BsGeoAlt className="text-teal-600" />
            <span>{location}</span>
          </div>
        </div>

        <button className="bg-teal-700 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-800 transition-colors">
          Job details
        </button>
      </div>
    </div>
  );
};

const RelatedJobs = () => {
  const jobs = [
    {
      companyLogo: '/company-logo1.png',
      title: 'Corporate Tactics Facilitator',
      company: 'Cormier, Turner and Flatley Inc',
      category: 'Commerce',
      type: 'Full time',
      salary: '$38000-$40000',
      location: 'New York, USA',
      postedTime: '26 min ago',
    },
    {
      companyLogo: '/company-logo2.png',
      title: 'District Intranet Director',
      company: 'VonRueden - Weber Co',
      category: 'Commerce',
      type: 'Full time',
      salary: '$42000-$48000',
      location: 'New York, USA',
      postedTime: '24 min ago',
    },
    {
      companyLogo: '/company-logo1.png',
      title: 'Corporate Tactics Facilitator',
      company: 'Cormier, Turner and Flatley Inc',
      category: 'Commerce',
      type: 'Full time',
      salary: '$38000-$40000',
      location: 'New York, USA',
      postedTime: '26 min ago',
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 inline-block">
        Related Jobs
      </h2>
      <div>
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default RelatedJobs;
