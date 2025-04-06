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
    <section className="max-w-[1200px] mx-auto p-8">
      {/* Heading */}
      <h2 className="text-[40px] font-normal ml-[17rem] mb-12">
        <span className="text-[#2E5F5C]">Let's Connect</span>
        <span className="text-black"> – We're Here to Help You!</span>
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Info Section */}
        <div className="w-full md:w-[450px] bg-[#2E5F5C] text-white p-10 rounded-[20px] flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-8 relative z-10">
            <p className="text-xl font-light">Say something to start a live chat!</p>
            
            <div className="space-y-6">
              <p className="flex items-center gap-4">
                <Image src="/contactusphoneicon.svg" alt="phone" width={24} height={24} className="opacity-90" />
                +18-555-169-667
              </p>
              <p className="flex items-center gap-4">
                <Image src="/contactusemailicon.svg" alt="email" width={24} height={24} className="opacity-90" />
                info@gulfaar.com
              </p>
            
            </div>
          </div>

          {/* Background Circles */}
          <div className="absolute bottom-0 right-0 w-full h-full">
            {/* Larger circle */}
            <div className="absolute bottom-[0] right-[-1px]">
              <Image
                src="/Ellipsecontactus.png"
                alt="Background Circle 1"
                width={800}
                height={800}
                className="w-[150px] h-[150px] opacity-100"
              />
            </div>
            {/* Smaller circle */}
            <div className="absolute bottom-[100px] right-[30px]">
              <Image
                src="/Ellipse2.png"
                alt="Background Circle 2"
                width={200}
                height={200}
                className="w-[100px] h-[100px] opacity-100"
              />
            </div>
          </div>

          <div className="flex gap-6 mt-auto relative z-10">
            <a href="#" className="hover:opacity-80">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/linkedinicon.svg" alt="LinkedIn" width={20} height={20} className="brightness-0 invert" />
              </div>
            </a>
            <a href="#" className="hover:opacity-80">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/instaicon.svg" alt="Instagram" width={20} height={20} className="brightness-0 invert" />
              </div>
            </a>
            <a href="#" className="hover:opacity-80">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/facebookicon.svg" alt="Facebook" width={20} height={20} className="brightness-0 invert" />
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm text-gray-600">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-4 rounded-xl border text-black border-gray-200 bg-white focus:outline-none focus:border-[#2E5F5C] focus:ring-1 focus:ring-[#2E5F5C]"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm text-gray-600">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full p-4 rounded-xl border text-black border-gray-200 bg-white focus:outline-none focus:border-[#2E5F5C] focus:ring-1 focus:ring-[#2E5F5C]"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-gray-600">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 rounded-xl border text-black border-gray-200 bg-white focus:outline-none focus:border-[#2E5F5C] focus:ring-1 focus:ring-[#2E5F5C]"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm text-gray-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-4 rounded-xl border text-black border-gray-200 bg-white focus:outline-none focus:border-[#2E5F5C] focus:ring-1 focus:ring-[#2E5F5C]"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">Select Subject?</p>
              <div className="flex gap-8">
                {["General Enquiry", "General Enquiry", "General Enquiry"].map((subject, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="subject"
                      value={subject}
                      checked={formData.subject === subject}
                      onChange={handleChange}
                      className="w-5 h-5 text-[#2E5F5C] bg-gray-100 border-gray-300 focus:ring-[#2E5F5C] focus:ring-2 rounded-full appearance-none checked:bg-[#2E5F5C] checked:border-transparent"
                    />
                    <span className="text-gray-600">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="write your message"
                className="w-full p-3 border-b border-gray-300 text-black focus:border-[#2E5F5C] focus:outline-none bg-transparent resize-none"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#2E5F5C] text-white px-8 py-3 rounded-xl hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="text-center mt-8 text-gray-500">
        Get in Touch Instantly! Reach us via <span className="text-[#2E5F5C]">WhatsApp</span>, SMS, or Live Chat for quick responses.
      </p>
    </section>
  );
};

export default FormContact;
