"use client";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import AIFeature from "@/app/Components/SkillDevelopement/AIFeature";
import FeatureCard from "@/app/Components/SkillDevelopement/FeatureCard";
import ProcessStep from "@/app/Components/SkillDevelopement/ProcessStep";
import StepsSection from "@/app/Components/SkillDevelopement/StepsSection";
import TargetAudience from "@/app/Components/SkillDevelopement/TargetAudience";
import React from "react";


const SkillDevelopment: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header title="SKILL DEVELOPMENT"
        subtitle="Explore a wide range of job opportunities available" />

      {/* Unlock Your Career Potential Section */}
      <section className="w-full max-w-[1294px] px-4 md:px-6 mx-auto py-10 md:py-16">
  <div className="flex flex-col-reverse md:flex-row items-center gap-10">
    
    {/* Text Section */}
    <div className="w-full md:w-[63%]">
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-teal-800 leading-tight">
      Unlock Your Career Potential with
      </h2>
      
      <p className="mt-3 text-[22px] sm:text-[26px] md:text-[36px] font-bold text-teal-800 leading-snug">
      Gulfaar's Skill Development Programs
      </p>

      <p className="mt-6 text-base sm:text-lg text-gray-700">
      Transform Your Career with Industry-Leading Skill Development
      </p>

      <p className="mt-6 text-base sm:text-lg text-neutral-900 leading-relaxed">
      At Gulfaar, we believe that skills are the foundation of success. Whether you're a fresh graduate<br className="hidden sm:block" />
        a professional looking to upskill, or someone seeking to switch careers, our Skill Development Programs are designed to equip you with industry-relevant expertise using the latest AI-powered learning techniques
      </p>

      <button
        className="flex items-center gap-2 px-6 py-3 mt-8 text-sm sm:text-base font-medium text-white uppercase bg-teal-800 rounded-full tracking-wide hover:bg-teal-700 transition"
        aria-label="Get Started"
      >
        Get Started
        <img
          src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/6307c969f4753633a930c857def46cbf555e5466?placeholderIfAbsent=true"
          className="w-4 h-4 object-contain"
          alt="Arrow icon"
        />
      </button>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-[37%]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/c6c59f9f64f3d931e65c3207dc47edd4bcc02e16?placeholderIfAbsent=true"
        alt="Career development illustration"
        className="w-full object-cover rounded-3xl"
      />
    </div>
  </div>
</section>




      <section className="self-center px-5 md:px-15 md:mt-9 py-10 w-full max-w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full text-2xl font-semibold tracking-tight text-teal-800 max-md:mt-5 max-md:max-w-full">
              <h2 className="self-stretch text-2xl md:text-3xl tracking-tight leading-[50px] max-md:max-w-full">
                Unlock Your Career Potential  with
                <br className="hidden md:block" />  
                <span className="text-2xl md:text-[48px] ml-2 md:ml-0 mb-2">
                     Gulfaar's Skill Development Programs
                </span>
              </h2>
              <p className="mt-1 max-md:max-w-full">
                Transform Your Career with Industry-Leading Skill Development
              </p>
              <p className="mt-9 max-w-full leading-9 text-black font-normal text-[24px] w-[672px] max-md:max-w-full">
                At Gulfaar, we believe that skills are the foundation of
                success. Whether you're a fresh graduate, a professional looking
                to upskill, or someone seeking to switch careers, our Skill
                Development Programs are designed to equip you with
                industry-relevant expertise using the latest AI-powered learning
                techniques
              </p>
              <button
                className="flex gap-3 px-8 py-4 mt-12 text-sm leading-tight text-center text-white uppercase bg-teal-800 rounded-[50px] tracking-[3px] max-md:px-5 max-md:mt-10"
                aria-label="Get Started"
              >
                <span className="grow my-auto">Get Started</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/6307c969f4753633a930c857def46cbf555e5466?placeholderIfAbsent=true"
                  className="object-contain shrink-0 w-3.5 aspect-[0.87]"
                  alt="Arrow icon"
                />
              </button>
            </div>
          </div>
          <div className="ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/c6c59f9f64f3d931e65c3207dc47edd4bcc02e16?placeholderIfAbsent=true"
              className="object-contain grow w-full rounded-3xl aspect-[0.77] max-md:mt-10 max-md:max-w-full"
              alt="Career development illustration"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Gulfaar Section */}
      <section className="px-20 py-12 mt-7 w-full bg-teal-800 max-md:px-5 max-md:max-w-full">
        <div className="max-md:max-w-full ">
          <div className="flex gap-5 max-md:flex-col justify-center items-center">
            <div className="w-[76%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                <h2 className="text-5xl font-semibold tracking-tight leading-snug max-md:max-w-full max-md:text-4xl">
                  Why Choose Gulfaar for skill Development ?
                </h2>
                <p className="self-start mt-2 text-xl leading-9 max-md:max-w-full">
                  Courses tailored to meet current market demands. Personalized
                  learning experiences, real-time feedback, and adaptive
                  testing. Training that prepares you for opportunities
                  worldwide. Hands-on training with real-world applications.
                  Gain credentials that enhance employability.
                </p>
              </div>
            </div>
            <div className="ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <FeatureCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/fc48bab7fbb0c93d3f1a1d6e780a0624b1a3d13e?placeholderIfAbsent=true"
                title="Software Development"
                description="Full-Stack, AI/ML, Cloud Computing"
                className="bg-white"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/fc48bab7fbb0c93d3f1a1d6e780a0624b1a3d13e?placeholderIfAbsent=true"
              title="Data Science & Analytics"
              description="Data science transforms raw data"
              className="w-3/12 max-md:ml-0 max-md:w-full bg-white"
            />
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/ae63f5a699ec1a995751ce03050c388f8304d13a?placeholderIfAbsent=true"
              title="Engineering & Construction"
              description="Engineering and construction shape the world"
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white"
            />
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/f680f5a2fdddf127db9111afb923ba1e2690ea5c?placeholderIfAbsent=true"
              title="Electrical & Mechanical Skills"
              description="Electrical and mechanical skills drive innovation"
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white"
            />
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/239135da3b958d6323604b6c57a4cba35487fbdd?placeholderIfAbsent=true"
              title="Oil & Gas Industry Training"
              description="Expert Oil & Gas Industry Training Solutions"
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white"
            />
          </div>
        </div>
      </section>

      {/* AI Enhances Skill Development Section */}
      <section className="flex flex-col px-4 md:px-15 items-center mt-24 max-md:mt-10 max-w-full">
  <h2 className="text-3xl md:text-[48px] font-semibold tracking-tight leading-snug text-indigo-950 text-center max-md:text-left">
    HOW AI ENHANCES SKILL DEVELOPMENT AT GULFAAR?
  </h2>

  <div className="mt-10 w-full max-w-[1279px] flex flex-col md:flex-row gap-8 pl-2">
    {/* Left: Feature Cards */}
    <div className="flex flex-col space-y-8 w-full">
      <hr className="border border-zinc-300 border-opacity-10 w-full" />
      <AIFeature
        imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/c6c87f0f37aede8c3f8035b33b88f887e0d02864?placeholderIfAbsent=true"
        title="AI-Powered Teaching"
        description="Our AI-driven learning platform personalizes your training based on your strengths and weaknesses, making education more effective."
      />
      <hr className="border border-zinc-300 border-opacity-10 w-full" />
      <AIFeature
        imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/33895386f87287c190405dcf00bb3e3df7cb7435?placeholderIfAbsent=true"
        title="AI-Based Practice & Mock Tests"
        description="Smart assessments analyze your performance, suggest improvements, and help you master skills faster."
      />
      <hr className="border border-zinc-300 border-opacity-10 w-full" />
      <AIFeature
        imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/a56432f84971eac6f85943ddb5f4b69580a50aca?placeholderIfAbsent=true"
        title="Adaptive Learning Paths"
        description="AI recommends courses, modules, and practice exercises tailored to your progress."
      />
      <hr className="border border-zinc-300 border-opacity-10 w-full" />
      <AIFeature
        imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/5397be73cf2c626ab3f4b98909da9bc959c30928?placeholderIfAbsent=true"
        title="Real-Time Feedback & Analysis"
        description="AI evaluates your responses and provides instant insights to improve your performance."
      />
      <hr className="border border-zinc-300 border-opacity-10 w-full" />
      <AIFeature
        imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/5397be73cf2c626ab3f4b98909da9bc959c30928?placeholderIfAbsent=true"
        title="Global Standard Training"
        description="AI-driven simulations prepare you for real-world scenarios in different industries and countries."
      />
    </div>

    {/* Right: Image */}
    <div className="ml-8 md:mt-60 w-full max-md:ml-0 max-md:w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/756486e9bbca25b3eb005760ba6e6802399beaf4?placeholderIfAbsent=true"
        className="object-contain object-bottom w-full h-full aspect-[0.75] max-md:mt-10 max-md:max-w-full"
        alt="AI-enhanced learning illustration"
      />
    </div>
  </div>
</section>




      {/* Technical Skills Section */}
      <section className=" w-full bg-yellow-400 bg-opacity-50 max-md:mt-0 max-md:max-w-full">
        <div className="flex relative flex-col px-20 py-12 w-full min-h-[759px] max-md:px-5 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/06f503cd746c831444541c86d7c0cf5d11fc1d19?placeholderIfAbsent=true"
            className="object-cover absolute inset-0 size-full"
            alt="Background pattern"
            aria-hidden="true"
          />
          <div className="relative max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col justify-center items-center">
              <div className="w-9/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col mt-10  font-semibold tracking-tight text-indigo-950 max-md:max-w-full">
                  <p className="self-start text-2xl  max-md:max-w-full">
                    OUR SKILL DEVELOPEMENT PROGRAMS
                  </p>
                  <h2 className="mt-5 text-5xl leading-snug max-md:mt-10 gap-3 max-md:max-w-full max-md:text-4xl">
                    Technical Skills For High-Demand Industries
                  </h2>
                </div>
              </div>
              <div className="ml-15 w-3/12 max-md:ml-0 max-md:w-full">
                <FeatureCard
                  imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/376ffb27121a6dfef86e7560afa5e352ac65f7f4?placeholderIfAbsent=true"
                  title="Software Development"
                  description="Full-Stack, AI/ML, Cloud Computing"
                  className="bg-white relative"
                />
              </div>
            </div>
          </div>
          <div className="relative mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <FeatureCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/376ffb27121a6dfef86e7560afa5e352ac65f7f4?placeholderIfAbsent=true"
                title="Data Science & Analytics"
                description="Data science transforms raw data"
                className="w-3/12 max-md:ml-0 max-md:w-full bg-white relative"
              />
              <FeatureCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/696c03cb12e6ffd4bd9f3a7f64a594336263e0b0?placeholderIfAbsent=true"
                title="Engineering & Construction"
                description="Engineering and construction shape the world"
                className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white relative"
              />
              <FeatureCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/0b57265eb399fe5b7ffe26f3b5ebf256394ec7d0?placeholderIfAbsent=true"
                title="Electrical & Mechanical Skills"
                description="Electrical and mechanical skills drive innovation"
                className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white relative"
              />
              <FeatureCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/f900d5ad8207e75a10d35b182a4d2ef008487272?placeholderIfAbsent=true"
                title="Oil & Gas Industry Training"
                description="Expert Oil & Gas Industry Training Solutions"
                className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Non-Technical Skills Section */}
      <section className="px-20 py-11 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col justify-center items-center">
            <div className="w-[71%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-semibold text-black max-md:mt-10 max-md:max-w-full">
                <p className="self-start text-2xl tracking-tight  max-md:max-w-full">
                  OUR SKILL DEVELOPEMENT PROGRAMS
                </p>
                <h2 className="mt-5 text-center text-5xl md:text-6xl sm:text-4xl max-md:text-3xl max-sm:text-2xl font-semibold leading-tight tracking-tight text-teal-900 max-w-2xl mx-auto">
  Non-Technical Skills For General & Specialized Roles
</h2>

              </div>
            </div>
            <div className="ml-60 w-[29%] max-md:ml-0 max-md:w-full">
              <FeatureCard
                imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/1bda79071e07023dedfce0b919355413ba5d90fc?placeholderIfAbsent=true"
                title="Sales & Marketing"
                description="Electrical and mechanical skills drive innovation"
                className="bg-white border border-solid border-neutral-950 border-opacity-10 shadow-[0px_0px_2px_rgba(223,223,248,1)]"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/fc48bab7fbb0c93d3f1a1d6e780a0624b1a3d13e?placeholderIfAbsent=true"
              title="Business Development & Client Management"
              description="Data science transforms raw data"
              className="w-3/12 max-md:ml-0 max-md:w-full bg-white border border-solid border-black border-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            />
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/ddba3c8bc7cdd898ef18c4c209cff947f09256f3?placeholderIfAbsent=true"
              title="Hospitality & Tourism Training"
              description="Engineering and construction shape the world"
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white border border-solid border-black border-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            />
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/4d462bbf1ca9f11fc0d5db6a6df9b842ed340c56?placeholderIfAbsent=true"
              title="Retail & Customer Service"
              description="Electrical and mechanical skills drive innovation"
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white border border-solid border-black border-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            />
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/d6bb7218e7ef939b25cfd8be96c74425f8ab6319?placeholderIfAbsent=true"
              title="Supply Chain & Logistics"
              description="Expert Oil & Gas Industry Training Solutions"
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white border border-solid border-black border-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* Language and Communication Training Section */}
      <section className="flex flex-col items-center px-20 py-12 w-full bg-teal-800 max-md:px-5 max-md:max-w-full">
        <p className="text-2xl font-semibold tracking-tight  text-white max-md:max-w-full">
          OUR SKILL DEVELOPEMENT PROGRAMS
        </p>
        <h2 className="mt-12 text-5xl font-semibold text-center text-white leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
          Language and Communication Training For Global Employability
        </h2>
        <div className="self-stretch mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="ml-5 w-[33%]  max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow px-8 py-15 w-full text-xl leading-8 text-center text-black bg-white rounded-3xl shadow-[0px_0px_2px_rgba(255,255,255,1)] max-md:px-5 max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/fc48bab7fbb0c93d3f1a1d6e780a0624b1a3d13e?placeholderIfAbsent=true"
                  className="object-contain self-center w-20 aspect-square rounded-[100px]"
                  alt="Workplace communication icon"
                />
                <p className="mt-14 max-md:mt-10">
                  Workplace Communication & Negotiation Skills
                </p>
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow px-8 py-16 w-full text-xl leading-8 text-center text-black bg-white rounded-3xl shadow-[0px_0px_2px_rgba(255,255,255,1)] max-md:px-5 max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/5a215fb3147087dcb7c80d4dea61e5ce60363cc7?placeholderIfAbsent=true"
                  className="object-contain self-center w-20 aspect-square rounded-[100px]"
                  alt="English proficiency icon"
                />
                <p className="mt-12 max-md:mt-10">
                  English Proficiency (Business & Conversational)
                </p>
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow px-11 py-16 w-full text-xl leading-8 text-center text-black bg-white rounded-3xl shadow-[0px_0px_2px_rgba(255,255,255,1)] max-md:px-5 max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/fc48bab7fbb0c93d3f1a1d6e780a0624b1a3d13e?placeholderIfAbsent=true"
                  className="object-contain self-center w-20 aspect-square rounded-[100px]"
                  alt="Languages icon"
                />
                <p className="mt-12 max-md:mt-10">
                  German, French, Spanish, Arabic, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personality Development Section */}
      <section className="flex flex-col items-start px-20 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <p className="text-2xl font-semibold tracking-tight  text-black max-md:max-w-full">
          OUR SKILL DEVELOPEMENT PROGRAMS
        </p>
        <h2 className="mt-7 text-4xl max-md:text-3xl font-semibold leading-snug text-black text-center w-fit mx-auto">
  Personality Development For <br />
  <span className="block text-center">Professional Growth</span>
</h2>
        <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow px-11 pt-10 pb-24 w-full text-2xl font-semibold leading-7 text-center text-black bg-white rounded-3xl border border-solid border-black border-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/81946963342d5afd85badcddd239b9216b62f315?placeholderIfAbsent=true"
                  className="object-contain self-center w-20 aspect-square rounded-[100px]"
                  alt="Leadership icon"
                />
                <p className="mt-15 max-md:mt-10">
                  Leadership & Team Management
                </p>
              </div>
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow px-16 pt-10 pb-24 w-full text-2xl font-semibold leading-7 text-center text-black bg-white rounded-3xl border border-solid border-black border-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/2df8caf6af8dbc95d8bbb4ed145154824f3d4fc3?placeholderIfAbsent=true"
                  className="object-contain self-center w-20 aspect-square rounded-[100px]"
                  alt="Confidence icon"
                />
                <p className="mt-15 max-md:mt-10">
                  Confidence & Public Speaking
                </p>
              </div>
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow  px-14 py-5 pb-21 w-full text-2xl font-semibold leading-7 text-center text-black bg-white rounded-3xl border border-solid border-black border-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/5a2fd982d7466141a240d44f0e80c9c3bd7bc96b?placeholderIfAbsent=true"
                  className="object-contain self-center mt-4 w-20 aspect-square rounded-[100px]"
                  alt="Emotional intelligence icon"
                />
                <p className="mt-13 max-md:mt-10 max-w-xs">
                  Emotional Intelligence  & Conflict Resolution
                </p>
              </div>
            </div>
            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow px-14 pt-10 pb-24 w-full text-2xl font-semibold leading-7 text-center text-black bg-white rounded-3xl border border-solid border-black border-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/6e772083e3e1316c5328627bf7057826c0a0e6b2?placeholderIfAbsent=true"
                  className="object-contain self-center w-20 aspect-square rounded-[100px]"
                  alt="Workplace ethics icon"
                />
                <p className="mt-14 max-md:mt-10">
                  Workplace Ethics & Etiquette
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Certifications Section */}
      <section className="flex flex-col items-start px-20 py-12 mt-12 w-full bg-teal-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <p className="text-2xl font-semibold tracking-tight  text-white max-md:max-w-full">
          OUR SKILL DEVELOPEMENT PROGRAMS
        </p>
        <h2 className="mt-7 text-5xl font-medium leading-none text-white max-md:max-w-full max-md:text-4xl">
          Industry-Specific Certifications For Career Advancement
        </h2>
        <div className="self-stretch mt-10 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/ddba3c8bc7cdd898ef18c4c209cff947f09256f3?placeholderIfAbsent=true"
              title="Healthcare & Nursing Certification"
              description="Data science transforms raw data"
              className="w-3/12 max-md:ml-0 max-md:w-full bg-white"
            />
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/fc48bab7fbb0c93d3f1a1d6e780a0624b1a3d13e?placeholderIfAbsent=true"
              title="Financial & Banking Courses"
              description="Engineering and construction shape the world"
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white"
            />
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/9b016f69193783a100fe80160ab8af1dca62700a?placeholderIfAbsent=true"
              title="IT & Cybersecurity Certifications"
              description="Electrical and mechanical skills drive innovation"
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white"
            />
            <FeatureCard
              imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/f7eef0d74d474c04b3422015f180a1be59fdd8b0?placeholderIfAbsent=true"
              title="Construction Safety &Compliance"
              description="Expert Oil & Gas Industry Training Solutions"
              className="ml-5 w-3/12 max-md:ml-0 max-md:w-full bg-white"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="px-10 py-12">
          <StepsSection />
        </div>
      </section>
      {/* Process Steps Section */}
      {/* <section className="flex flex-wrap gap-5 justify-between items-start self-center mt-12 w-full px-5 text-1xl font-semibold leading-tight text-teal-800 max-w-[1325px] max-md:mt-10 max-md:max-w-full">
        <ProcessStep
          step="01"
          title="Register for a Course"
          description="Choose from our extensive list of training programs."
        />
        <ProcessStep
          step="02"
          title="Learn with AI & Experts"
          description="Industry professionals and AI-powered modules guide you through interactive sessions"
        />
        <ProcessStep
          step="03"
          title="Practice with AI Tools"
          description="AI-based assessments and mock tests refine your skills"
        />
        <ProcessStep
          step="04"
          title="Get Certified"
          description="Receive a recognized certification upon successful completion"
        />
        <ProcessStep
          step="05."
          title="Job Assistance"
          description="Connect with top recruiters and unlock career opportunities"
        />
      </section> */}

      {/* Target Audience Section */}
      <section className="flex relative flex-col items-start px-20 py-14 mt-12 w-full text-black min-h-[639px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/73ddb0c49138328c5b71f69dfadc4c84eea0fa98?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
          alt="Background pattern"
          aria-hidden="true"
        />
        <TargetAudience
          imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/5309d9f39396e329d7de259c4987e7adb667bd36?placeholderIfAbsent=true"
          title="Fresh graduates looking for career-ready skills"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="relative py-6"
        />
        <TargetAudience
          imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/301c3263b08253529ed4ac8f72766deb36073f4d?placeholderIfAbsent=true"
          title="Working professionals seeking career advancement."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="relative py-6 mt-6"
        />
        <TargetAudience
          imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/e399d6b3021cb0acbd79a8d43b3d714e45fd5677?placeholderIfAbsent=true"
          title="Job seekers looking for specialized industry training"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="relative py-6 mt-6"
        />
        <TargetAudience
          imageSrc="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/40929c126ce06f7957f7059c0f3bc3081c268443?placeholderIfAbsent=true"
          title="Entrepreneurs and business owners upgrading their skill set"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="relative py-6 mt-6"
        />
      </section>

      <Footer />
    </div>
  );
};

export default SkillDevelopment;
