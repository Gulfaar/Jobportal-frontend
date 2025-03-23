import React from 'react';
import { BsPerson, BsClock, BsBriefcase, BsGeoAlt } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';

const JobOverview = () => {
  return (
    <div className=" bg-[#EBF5F4] rounded-lg p-6 mb-6">
      <h3 className="text-lg text-black  font-semibold mb-4">Job Overview</h3>
      
      <div className="space-y-4">
        {/* Job Title */}
        <div className="flex items-center gap-3">
          <BsPerson className="text-teal-600 text-xl" />
          <div>
            <p className="text-sm text-black">Job Title</p>
            <p className="text-sm text-gray-500 font-medium">Corporate Solutions Executive</p>
          </div>
        </div>

        {/* Job Type */}
        <div className="flex items-center gap-3">
          <BsClock className="text-teal-600 text-xl" />
          <div>
            <p className="text-sm text-black  ">Job Type</p>
            <p className="text-sm text-gray-500 font-medium">Full Time</p>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-3">
          <BsBriefcase className="text-teal-600 text-xl" />
          <div>
            <p className="text-sm text-black">Category</p>
            <p className="text-sm text-gray-500 font-medium">Commerce</p>
          </div>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-3">
          <BsClock className="text-teal-600 text-xl" />
          <div>
            <p className="text-sm text-black">Experience</p>
            <p className="text-sm text-gray-500 font-medium">5 Years</p>
          </div>
        </div>

        {/* Degree */}
        <div className="flex items-center gap-3">
          <FaGraduationCap className="text-teal-600 text-xl" />
          <div>
            <p className="text-sm text-black">Degree</p>
            <p className="text-sm text-gray-500 font-medium">Master</p>
          </div>
        </div>

        {/* Offered Salary */}
        <div className="flex items-center gap-3">
          <BiDollar className="text-teal-600 text-xl" />
          <div>
            <p className="text-sm text-black">Offered Salary</p>
            <p className="text-sm text-gray-500 font-medium">$40000-$45000</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <BsGeoAlt className="text-teal-600 text-xl" />
          <div>
            <p className="text-sm text-black ">Location</p>
            <p className="text-sm text-gray-500 font-medium">New-York, USA</p>
          </div>
        </div>

        {/* Map */}
        <div className="mt-4 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1709667545317!5m2!1sen!2sin"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default JobOverview;
