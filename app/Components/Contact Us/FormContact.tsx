const FormContact = () => {
    return (
        <section className="flex flex-col md:flex-row items-stretch justify-center p-10 bg-white gap-8">
          {/* Contact Info Section */}
          <div className="w-full md:w-1/3 bg-[#2E5F5C] text-white p-8 shadow-lg flex flex-col justify-between relative rounded-lg">
            <h2 className="text-xl font-bold mb-4">Say something to start a live chat!</h2>
            <p className="flex items-center gap-2 mb-2">📞 +1012 3456 789</p>
            <p className="flex items-center gap-2 mb-2">📧 gulfaar@gmail.com</p>
            <p className="flex items-center gap-2">📍 Kurishupally Road, Ravipuram, Perumanoor, Kochi, Kerala</p>
            <div className="flex space-x-4 mt-6 text-2xl">
              <span className="cursor-pointer">🐦</span>
              <span className="cursor-pointer">📸</span>
              <span className="cursor-pointer">🔗</span>
            </div>
          </div>
    
          {/* Contact Form */}
          <div className="w-full md:w-2/3 bg-gray-100 p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center md:text-left mb-6">Let's Connect – <span className="text-[#2E5F5C]">We're Here to Help!</span></h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First name" className="border p-3 w-full rounded-md" />
                <input type="text" placeholder="Last name" className="border p-3 w-full rounded-md" />
                <input type="email" placeholder="E-mail" className="border p-3 w-full rounded-md" />
                <input type="text" placeholder="Phone Number" className="border p-3 w-full rounded-md" />
              </div>
              <div>
                <p className="mb-2 font-semibold">Select Subject?</p>
                <div className="flex space-x-6">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="subject" className="form-radio text-[#2E5F5C]" /> <span>General Enquiry</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="subject" className="form-radio text-[#2E5F5C]" /> <span>General Enquiry</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="subject" className="form-radio text-[#2E5F5C]" /> <span>General Enquiry</span>
                  </label>
                </div>
              </div>
              <textarea placeholder="Write a message" className="border p-3 w-full h-32 rounded-md"></textarea>
              <button className="bg-[#2E5F5C] text-white px-6 py-3 hover:bg-opacity-80 transition rounded-md">Send Message</button>
            </form>
          </div>
        </section>
    );
  };

  export default FormContact;