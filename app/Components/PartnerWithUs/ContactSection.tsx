import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 flex justify-center w-full bg-[#2E5F5C]">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2 text-white p-8">
          <h2 className="text-2xl font-semibold mb-4">You Will Grow, You Will Succeed. We Promise That</h2>
          <p className="text-gray-300 mb-6">
            Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultricies. 
            Diam convallis morbi pellentesque adipiscing.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone size={24} className="text-white" />
              <div>
                <p className="font-semibold">Call for inquiry</p>
                <p className="text-gray-300">+257 388-6895</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail size={24} className="text-white" />
              <div>
                <p className="font-semibold">Send us email</p>
                <p className="text-gray-300">gulfaar@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock size={24} className="text-white" />
              <div>
                <p className="font-semibold">Opening hours</p>
                <p className="text-gray-300">Mon - Fri: 10AM - 10PM</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={24} className="text-white" />
              <div>
                <p className="font-semibold">Office</p>
                <p className="text-gray-300">19 North Road Piscataway, NY 08854</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-[#D67268] p-8 rounded-lg shadow-lg">
          <h3 className="text-white text-xl font-semibold mb-6 text-center">Contact Info</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-white">First Name</label>
                <input type="text" placeholder="Your name" className="w-full p-3 rounded-md bg-white text-gray-700" />
              </div>
              <div>
                <label className="text-white">Last Name</label>
                <input type="text" placeholder="Your last name" className="w-full p-3 rounded-md bg-white text-gray-700" />
              </div>
            </div>
            <div>
              <label className="text-white">Your E-mail address</label>
              <input type="email" placeholder="Your E-mail address" className="w-full p-3 rounded-md bg-white text-gray-700" />
            </div>
            <div>
              <label className="text-white">Your message</label>
              <textarea placeholder="Your message" className="w-full p-3 rounded-md bg-white text-gray-700 h-32"></textarea>
            </div>
            <button className="bg-[#2E5F5C] text-white px-6 py-3 rounded-md w-full font-medium hover:bg-[#244b48] transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
