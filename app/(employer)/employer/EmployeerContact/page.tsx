"use client";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import Link from "next/link";

const EmployeerContact = () => {
    return (
        <div className=" ">
       
        <Header title="Contact us" subtitle="For hiring, jobs, or partnerships, contact Gulfaar!"/>

          
          <div className="flex items-center justify-center px-6 md:px-20 w-full max-w-full mx-auto">
            <section className="max-w-[1200px] mx-auto p-8">
                  {/* Heading */}
                  <div className="flex w-full justify-center items-center ">
                    <div className="flex w-full  justify-center items-center">
                  <h2 className="text-[40px] text-center font-normal mt-12  mb-12">
                    <span className="text-[#2E5F5C]">Let's Connect</span>
                    <span className="text-black "> We will <br/> contact you shortly</span>
                  </h2>
                  </div>
                  </div>
                  <Link href ='/'>
                  <button
            type="submit"
            className="w-full bg-teal-700 text-white py-2.5 sm:py-3 rounded-md font-medium hover:bg-teal-800 transition-colors text-sm sm:text-base"
          >
            Back to home
          </button>
          </Link>
                  
                  
                  
            
                  {/* <p className="text-center mt-8 text-gray-500">
                    Get in Touch Instantly! Reach us via <span className="text-[#2E5F5C]">WhatsApp</span>, SMS, or Live Chat for quick responses.
                  </p> */}
                </section>
          </div>
          <Footer />
        </div>
      );
    };

export default EmployeerContact;
