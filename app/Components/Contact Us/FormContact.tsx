"use client";
import { useState } from "react";
import Image from "next/image";

const FormContact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section className="p-10 bg-white flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8">
        "Let's <span className="text-[#2E5F5C]">Connect</span> – We’re Here to Help!"
      </h2>
      
      <div className="flex flex-col md:flex-row items-stretch w-full max-w-6xl gap-10">
        {/* Contact Info Section */}
        <div className="w-full md:w-1/3 bg-[#2E5F5C] text-white p-10 shadow-lg rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">Say something to start a live chat!</h3>
            <p className="flex items-center gap-3 mb-3"><span className="text-xl">📞</span> +1012 3456 789</p>
            <p className="flex items-center gap-3 mb-3"><span className="text-xl">📧</span> gulfaar@gmail.com</p>
            <p className="flex items-center gap-3 text-sm leading-relaxed"><span className="text-xl">📍</span> Kurishupally Road, Ravipuram, Perumanoor, Kochi, Kerala</p>
          </div>
          <div className="flex space-x-4 mt-6 text-2xl">
            <span className="cursor-pointer">🐦</span>
            <span className="cursor-pointer">📸</span>
            <span className="cursor-pointer">🔗</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 bg-white p-10 shadow-lg rounded-lg">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="firstName" placeholder="First Name" className="shadow-lg p-3 w-full rounded-md focus:ring-2 focus:ring-[#2E5F5C]" onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" className="shadow-lg p-3 w-full rounded-md focus:ring-2 focus:ring-[#2E5F5C]" onChange={handleChange} />
              <input type="email" name="email" placeholder="E-mail" className="shadow-lg p-3 w-full rounded-md focus:ring-2 focus:ring-[#2E5F5C]" onChange={handleChange} />
              <input type="text" name="phone" placeholder="Phone Number" className="shadow-lg p-3 w-full rounded-md focus:ring-2 focus:ring-[#2E5F5C]" onChange={handleChange} />
            </div>
            
            <div>
              <p className="mb-3 font-semibold">Select Subject</p>
              <div className="flex space-x-6">
                {["General Enquiry", "Support", "Feedback"].map((subject) => (
                  <label key={subject} className="flex items-center gap-3 text-sm">
                    <input
                      type="radio"
                      name="subject"
                      value={subject}
                      checked={formData.subject === subject}
                      onChange={handleChange}
                      className="form-radio text-[#2E5F5C] focus:ring-[#2E5F5C]"
                    />
                    <span>{subject}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <textarea
                name="message"
                placeholder="Write a message"
                className="border-b p-3 w-full outline-none focus:ring-2 focus:ring-[#2E5F5C]"
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="submit" className="bg-[#2E5F5C] text-white px-6 py-3 hover:bg-opacity-80 transition rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormContact;