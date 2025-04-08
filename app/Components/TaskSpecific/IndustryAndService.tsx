"use client";

import { Truck, Wrench, Users, Warehouse, Shield, Brush } from "lucide-react";

const IndustriesAndServices = () => {
  const services = [
    {
      title: "Professional Drivers",
      description: "Heavy & Light Vehicle Drivers – Trained professionals for logistics, trucking, and passenger transport. Chauffeurs & Personal Drivers – Skilled, background-verified drivers for corporate and personal use. Delivery & Fleet Drivers – On-demand drivers for e-commerce, food delivery, and logistics companies.",
      icon: <Truck size={24} className="text-white" />,
    },
    {
      title: "Construction Workers & Skilled Technicians",
      description: "Civil & Structural Workers – Masons, welders, painters, and site laborers. Plumbers & Electricians – Certified professionals for residential, commercial, and industrial projects. HVAC & Mechanical Technicians – Experts in air conditioning, heating, and ventilation systems.",
      icon: <Wrench size={24} className="text-white" />,
    },
    {
      title: "Maintenance & Repair Specialists",
      description: "Facility Maintenance Experts – Skilled workers for building repairs, electrical work, and plumbing. Handymen & Equipment Technicians – Quick, efficient repair solutions for homes and businesses. Industrial Maintenance Teams – Specialists in machinery and equipment servicing.",
      icon: <Users size={24} className="text-white" />,
    },
    {
      title: "Cleaning & Sanitization Experts",
      description: "Janitorial & Housekeeping Services – Reliable cleaning professionals for hotels, offices, and residences. Deep Cleaning & Disinfection Experts – COVID-safe, high-standard sanitization services for healthcare, schools, and commercial buildings. Waste Management & Industrial Cleaning – On-demand specialists for large-scale sanitation.",
      icon: <Brush size={24} className="text-white" />,
    },
    {
      title: "Logistics & Warehousing Workforce",
      description: "Warehouse managers, drivers, and delivery associates. Logistics coordinators & supply chain analysts for real-time fleet management.",
      icon: <Warehouse size={24} className="text-white" />,
    },
    {
      title: "Security & Surveillance Personnel",
      description: "Security Officers & Surveillance Teams – Skilled personnel for ensuring safety, monitoring premises, and enforcing regulations at corporate, residential, and industrial sites.",
      icon: <Shield size={24} className="text-white" />,
    },
  ];

  return (
    <section className="py-16 px-6 flex justify-center w-full mx-auto bg-[#2E5F5C] relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <img src="/bgCircle.svg" alt="Background Effect" className="w-[50%] h-auto" />
      </div>
      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-center text-2xl font-bold text-white mb-12">INDUSTRIES AND SERVICES WE COVER</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {services.map((service, index) => (
            <div key={index} className="relative p-6 rounded-lg shadow-md flex items-start gap-4 bg-white bg-opacity-50">
              <div className="bg-[#2E5F5C] p-3 rounded-full shadow-lg flex items-center justify-center">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E3A56]">{service.title}</h3>
                <p className="text-gray-700 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesAndServices;