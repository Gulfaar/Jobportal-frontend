"use client";
import * as React from "react";

const Header = () => {
  return (
    <header className="flex relative flex-wrap gap-5 justify-between w-full max-md:mr-1.5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/ba29a153e3c9b6933fa575fe6b348e94a5e5f190?placeholderIfAbsent=true"
        alt="Gulfaar Logo"
        className="object-contain shrink-0 max-w-full aspect-[2.13] w-[213px]"
      />
      <div className="flex gap-5 my-auto">
        <span className="grow my-auto font-medium">Jobseeker</span>
        <div className="flex gap-5 items-center capitalize whitespace-nowrap">
          <button
            className="overflow-hidden self-stretch px-6 py-4 my-auto bg-teal-800 rounded-lg w-[117px] max-md:pr-5"
            aria-label="Employer login"
          >
            Employer
          </button>
        </div>
        <button
          className="overflow-hidden gap-2.5 self-stretch px-5 py-4 text-white bg-teal-800 rounded-lg min-h-10"
          aria-label="Post a job"
        >
          Post Job
        </button>
      </div>
    </header>
  );
};

export const Navigation = () => {
  return (
    <nav className="flex relative gap-5 self-end text-white">
      <a href="#jobs">Jobs</a>
      <a href="#blog">Blog</a>
      <a href="#training">Training</a>
      <a href="#workforce-solutions" className="basis-auto">
        Work-Force Solutions
      </a>
      <a href="#partner" className="basis-auto">
        Partner with us
      </a>
    </nav>
  );
};

export const HeroSection = () => {
  return (
    <section className="flex relative flex-col px-10 pb-20 w-full text-base font-semibold text-white min-h-[361px] max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/deb3fb8c4e5aad07b61818e974d8b8f0748c58f0?placeholderIfAbsent=true"
        alt="Hero background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative z-10">
        <Header />
        <Navigation />
        <h1 className="relative self-center mt-16 text-6xl max-md:mt-10 max-md:text-4xl">
          COUNTRIES
        </h1>
        <p className="relative self-center mt-8 text-2xl text-center text-white max-md:max-w-full">
          Register today to unlock exciting job opportunities
        </p>
      </div>
    </section>
  );
};

export const PresenceSection = () => {
  return (
    <section className="flex relative flex-col w-full  text-black min-h-[549px] max-md:max-w-full">
      <img
        src="/countrybk.png"
        alt="USA map background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex overflow-hidden relative flex-col justify-center items-center  md:px-20 py-40 w-full  bg-[rgba(255,242,0,0.5)] max-md:px-10 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-md:mb-2.5 max-md:max-w-full">
          <h2 className="self-center text-5xl font-semibold text-center leading-[50px] max-md:max-w-full max-md:text-3xl max-md:leading-10">
            USA - Gulfaar's Presence 
            <span className="block">Connecting Talent & Businesses Across USA</span>
          </h2>
          <p className="mt-12 text-2xl tracking-tight leading-9 max-md:mt-10 max-md:max-w-full">
            Gulfaar is proud to be a leading *workforce solutions provider* in
            *[Country Name], offering **recruitment, outsourcing, skill
            development, and contract-based hiring* across multiple industries.
            With a *strong local team and AI-powered hiring technology*, we
            ensure that businesses find the right talent and job seekers access
            the best career opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export const BranchesSection = () => {
  return (
    <section className="flex flex-col justify-center items-center px-16 py-12 w-full bg-teal-800 max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1205px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-2xl text-white max-md:mt-10 max-md:max-w-full">
              <h2 className="self-stretch text-4xl font-semibold max-md:max-w-full max-md:text-3xl">
                Our Branches in USA
              </h2>
              <p className="mt-12 max-md:mt-10">Head Office: [City, Address]</p>
              <p className="mt-8">Regional Offices: [City, Address]</p>
              <p className="self-stretch mt-8 mr-6 max-md:mr-2.5 max-md:max-w-full">
                Franchise Locations: [List of locations]
              </p>
              <p className="self-stretch mt-8 mr-6 max-md:mr-2.5 max-md:max-w-full">
                Franchise Locations: [List of locations]
              </p>
              <p className="mt-8">contact US:</p>
              <p className="mt-8">Email ID:</p>
            </div>
          </div>
          <div className="ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow items-end px-20 pt-24 pb-52 rounded-xl min-h-[336px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/ad1f07a80a140ebfc8b24d269863b03f6bbddf23?placeholderIfAbsent=true"
                alt="USA map"
                className="object-cover absolute inset-0 size-full"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/a447b2f1098832e365f5a2105227c6de3cd255d6?placeholderIfAbsent=true"
                alt="Location pin"
                className="object-contain w-10 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TeamMember = ({
  image,
  name,
  position,
}: {
  image: string;
  name: string;
  position: string;
}) => {
  return (
    <div className="flex flex-col grow items-center px-13 py-10 w-full h-full text-center text-white bg-[#DA6B64] rounded-xl max-md:px-5 max-md:mt-10">
      <img
        src={image}
        alt={`${name} - ${position}`}
        className="object-contain max-w-full rounded-full aspect-square w-[122px]"
      />
      <h3 className="mt-8 text-xl font-semibold leading-none">{name}</h3>
      <p className="mt-8 text-sm leading-none">{position}</p>
    </div>
  );
};

export const TeamSection = () => {
  const teamMembers = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/3a8c6330db1816bc907baba20e4a32543e68ee62?placeholderIfAbsent=true",
      name: "JACOB",
      position: "Country Director",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/28fab374025b7977043957b5f670499fbb0b6dc6?placeholderIfAbsent=true",
      name: "ALEENA",
      position: "Recruitment Head",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/ae5d9cde2169621bb8cd7afad0240b880cbc5eba?placeholderIfAbsent=true",
      name: "PAUL ALEX",
      position: "HR & Compliance Lead",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/1c02b2eb4699763a531346efbf72ca0f26339f6f?placeholderIfAbsent=true",
      name: "RIYA",
      position: "Business Development Manager",
    },
  ];

  return (
    <section className="flex flex-col items-center px-10 py-12 w-full max-md:px-5 max-md:max-w-full">
      <h2 className="text-5xl font-semibold tracking-tight leading-snug text-black max-md:max-w-full max-md:text-4xl">
        Meet Our Team in USA
      </h2>
      <p className="mt-8 text-xl leading-9 text-center text-black w-[1069px] max-md:max-w-full">
        Our dedicated team of recruitment experts, HR specialists, and business
        consultants ensures seamless hiring, training, and workforce management.
        Want to connect ? Reach out to our team for hiring solutions or job
        opportunities!
      </p>
      <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${index > 0 ? "ml-5" : ""} w-3/12 max-md:ml-0 max-md:w-full`}
            >
              <TeamMember
                image={member.image}
                name={member.name}
                position={member.position}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const IndustryItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-wrap flex-1 flex-auto gap-5">
      <img
        src={icon}
        alt={`${title} icon`}
        className="object-contain shrink-0 aspect-square rounded-[100px] w-[70px]"
      />
      <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
        <h3 className="self-start text-xl font-semibold leading-none">
          {title}
        </h3>
        <p className="mt-8 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const IndustriesSection = () => {
  const industries = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/ff0969c82c8baf53d1e18177052e2b59a0661bb3?placeholderIfAbsent=true",
      title: "Construction & Engineering",
      description: "Civil workers, electricians, welders, project managers.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/5982c86feab5aae63f43e95d89a95203e9f81be2?placeholderIfAbsent=true",
      title: "Healthcare & Medical",
      description: "Doctors, nurses, caregivers, and medical assistants",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/42fc095a2f7879c66ad47bc0c58953edbc26b4c4?placeholderIfAbsent=true",
      title: "IT & Software Development",
      description: "Developers, cybersecurity experts, and cloud specialists",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/6eff0698680980bfed58f0289020adc335fe16df?placeholderIfAbsent=true",
      title: "Hospitality & Customer Service",
      description: "Hotel staff, retail workers, and concierge teams.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/b492df3d08ae085e8d024e9d149d5008915a4a5c?placeholderIfAbsent=true",
      title: "Logistics & Transportation",
      description: "Drivers, warehouse staff, and supply chain managers.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/37e0748be79ef1edb3e20504bae1571ae8065616?placeholderIfAbsent=true",
      title: "BPO & Call Centers",
      description:
        "Customer support, telemarketing, and back-office operations",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center px-20 py-12 w-full  text-white bg-teal-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
        <h2 className="self-center text-5xl font-semibold tracking-tight leading-snug max-md:max-w-full max-md:text-4xl">
          Industries We Serve in USA
        </h2>
        <div className="flex flex-wrap gap-10 mt-12 w-full max-w-[1045px] max-md:mt-10 max-md:max-w-full">
          <IndustryItem {...industries[0]} />
          <IndustryItem {...industries[1]} />
        </div>
        <div className="flex flex-wrap gap-10 mt-12 w-full max-w-[1019px] max-md:mt-10 max-md:max-w-full">
          <IndustryItem {...industries[2]} />
          <IndustryItem {...industries[3]} />
        </div>
        <div className="flex flex-wrap gap-10 mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <IndustryItem {...industries[4]} />
          <IndustryItem {...industries[5]} />
        </div>
      </div>
    </section>
  );
};

export const BenefitCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="grow px-6 py-16 w-full h-full text-center text-white bg-red-400 rounded-xl max-md:px-5 max-md:mt-10">
      <h3 className="text-2xl font-semibold leading-7">{title}</h3>
      <p className="mt-12 text-xl leading-7 max-md:mt-10">{description}</p>
    </div>
  );
};

export const BenefitsSection = () => {
  const benefits = [
    {
      title: "Local Expertise & Global Network",
      description:
        "We understand [Country Name]'s market trends and hiring needs",
    },
    {
      title: "AI-Powered Recruitment & Workforce Management",
      description:
        "Faster hiring, better talent matching, and automated payroll solutions",
    },
    {
      title: "Compliant & Ethical Hiring",
      description: "We follow all local labor laws and industry regulations.",
    },
    {
      title: "Custom Workforce Solutions",
      description:
        "Temporary, contract-based, and full-time placements available",
    },
  ];

  return (
    <section className="flex flex-col items-center px-10 pt-8 pb-12 w-full h-full max-md:px-5 max-md:max-w-full">
      <h2 className="text-4xl font-semibold tracking-tight leading-snug text-teal-800 max-md:max-w-full max-md:text-3xl">
        Why Gulfaar in USA ?
      </h2>
      <p className="mt-5 text-xl font-medium leading-loose text-black max-md:max-w-full">
        Looking for workforce solutions in USA ? Contact us today!
      </p>
      <div className="self-stretch mt-12  max-md:mt-10 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${index > 0 ? "ml-5" : ""} w-3/12  max-md:ml-0 max-md:w-full `}
            >
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-5 justify-between items-start px-10 py-16 w-full bg-teal-800 max-md:px-5 max-md:max-w-full">
      <div className="text-lg font-semibold leading-8 text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/b657254a20ca5373606a8f0ed2b8b23271324290?placeholderIfAbsent=true"
          alt="Gulfaar Logo"
          className="object-contain max-w-full aspect-[2.13] w-[177px]"
        />
        <address className="mt-2 not-italic">
          Tharakkandam Building, 1st Floor, Kurishupally Rd, Ravipuram,
          Perumanoor, Kochi, Kerala 682015
        </address>
      </div>

      <div className="flex flex-col">
        <h3 className="self-start text-xl font-semibold text-white">Company</h3>
        <nav className="mt-6 text-base leading-loose text-white">
          <ul>
            <li className="text-white">
              <a href="#about">About Us</a>
            </li>
            <li className="mt-4 text-ellipsis">
              <a href="#contact">Contact Us</a>
            </li>
            <li className="mt-4 text-ellipsis">
              <a href="#global">Our Global Presence</a>
            </li>
            <li className="mt-4 text-ellipsis">
              <a href="#email">Email</a>
            </li>
            <li className="mt-4 text-ellipsis">
              <a href="#regulations">Regulations</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-white">
        <h3 className="text-xl font-semibold max-md:mr-2.5">Job Categories</h3>
        <nav className="mt-6 text-base">
          <ul>
            <li>
              <a href="#telecom">Telecomunications</a>
            </li>
            <li className="mt-4">
              <a href="#tourism">Hotels & Tourism</a>
            </li>
            <li className="mt-4">
              <a href="#construction">Construction</a>
            </li>
            <li className="mt-4">
              <a href="#education">Education</a>
            </li>
            <li className="mt-4">
              <a href="#finance">Financial Services</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col self-stretch text-sm font-semibold text-white">
        <h3 className="self-start text-xl">Newsletter</h3>
        <p className="self-start mt-4 leading-4">
          Eu nunc pretium vitae platea. Non netus elementum vulputate
        </p>
        <input
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
          className="overflow-hidden px-5 py-5 mt-8 leading-none rounded-xl border border-white border-solid max-md:px-5"
        />
        <button
          className="overflow-hidden gap-2.5 self-stretch px-10 py-5 mt-5 text-base text-teal-800 bg-white rounded-xl min-h-[50px] max-md:px-5"
          aria-label="Subscribe to newsletter"
        >
          Subscribe now
        </button>
      </div>
    </footer>
  );
};







