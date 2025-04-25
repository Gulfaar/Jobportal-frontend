"use client";
import Link from "next/link";
import React from "react";

export const Fm: React.FC = () => {
  return (

    <section className="w-full bg-yellow-300  px-4 md:px-20 mx-auto py-10 md:py-30">
    <div className="flex flex-col-reverse md:flex-row items-stretch gap-10">
      
      {/* Text Section */}
      <div className="w-full md:w-[63%] flex flex-col justify-center">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-teal-800 leading-tight">
        Effective Facilitation Management
        </h2>
        
        {/* <p className="mt-3 text-[22px] sm:text-[26px] md:text-[36px] font-bold text-teal-800 leading-snug">
          Gulfaar's Skill Development Programs
        </p> */}

        <p className="mt-6 text-base sm:text-lg text-gray-700">
        Facilitation management involves guiding group discussions and processes to achieve clear and productive outcomes. 
        </p>

        <p className="mt-6 text-base sm:text-lg text-neutral-900 leading-relaxed">
        It ensures smooth communication among team members and stakeholders. A good facilitator sets the agenda, encourages participation, and keeps the group focused on goals. 
          <br className="hidden sm:block" />
          Conflict resolution and time management are key aspects of this role. Facilitation also includes evaluating meeting effectiveness and improving future sessions. It plays a vital role in decision-making and team alignment. Tools like agendas, whiteboards, and feedback forms are often used. Overall, it enhances collaboration, efficiency, and project success.</p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[37%] md:h-[55%] flex items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/c6c59f9f64f3d931e65c3207dc47edd4bcc02e16?placeholderIfAbsent=true"
          alt="Career development illustration"
          className="w-full h-[80%] object-cover rounded-3xl max-h-[400px] md:max-h-full"
        />
        
      </div>
      
    </div>
    <Link href={"/FacilitationManagement"}>
    <button
                className="flex gap-3 px-8 py-4 mt-[-90px] text-sm leading-tight text-center text-white uppercase bg-teal-800 hover:bg-teal-900 rounded-[50px] tracking-[3px] max-md:px-5 max-md:mt-10"
                aria-label="Get Started"
              >
                <span className="grow my-auto">Learn more</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/6307c969f4753633a930c857def46cbf555e5466?placeholderIfAbsent=true"
                  className="object-contain shrink-0 w-3.5 aspect-[0.87]"
                  alt="Arrow icon"
                />
              </button>
              </Link>
  </section>

  )
}