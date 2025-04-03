import React from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {

  
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24 bg-white text-center">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p className="text-gray-600 mt-2 mb-6">
        If you have any questions about our Cookie Policy, please reach out to us:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <Phone size={24} />
          <h3 className="font-semibold mt-2">Call for inquiry</h3>
          <p className="text-gray-500">+257 388-6895</p>
        </div>
        <div className="flex flex-col items-center">
          <Clock size={24} />
          <h3 className="font-semibold mt-2">Opening hours</h3>
          <p className="text-gray-500">Mon - Fri: 10AM - 10PM</p>
        </div>
        <div className="flex flex-col items-center">
          <Mail size={24} />
          <h3 className="font-semibold mt-2">Send us email</h3>
          <p className="text-gray-500">gulfaar@gmail.com</p>
        </div>
        <div className="flex flex-col items-center">
          <MapPin size={24} />
          <h3 className="font-semibold mt-2">Office</h3>
          <p className="text-gray-500">19 North Road Piscataway, NY 08854</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
