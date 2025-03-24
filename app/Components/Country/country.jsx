"use client"

import React from "react"


export const HeroSection = () => {
    return (
      <section className="relative w-full h-[361px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac8640021ab658de174eacec6ea60ca3ecb4a4db"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 px-4 w-full text-center max-w-[556px]">
          <h1 className="mb-8 text-6xl font-bold text-white max-md:text-5xl max-sm:text-4xl">
            COUNTRIES
          </h1>
          <p className="text-2xl text-white max-md:text-xl max-sm:text-lg">
            Register today to unlock exciting job opportunities
          </p>
        </div>
      </section>
    );
  };


  export const PresenceSection = () => {
    return (
      <section className="px-10 py-12 bg-[linear-gradient(180deg,#DEF9FF_0%,rgba(224,218,117,0.00)_100%)] max-md:px-5 max-sm:px-4">
        <div className="mx-auto max-w-[1200px]">
          <header className="mb-10 text-2xl font-bold text-center text-black">
            <span>USA - Gulfaar's Presence</span>
            <br />
            <span>Connecting Talent &amp; Businesses Across USA</span>
          </header>
          <div className="flex flex-wrap gap-10 justify-between items-center max-md:flex-col">
            <p className="text-2xl tracking-tight leading-9 max-w-[743px] text-neutral-900 max-md:text-xl max-md:leading-8">
              Gulfaar is proud to be a leading{" "}
              <em>workforce solutions provider</em> in
              <em>
                [Country Name], offering{" "}
                <strong>
                  recruitment, outsourcing, skill development, and contract-based
                  hiring
                </strong>
              </em>{" "}
              across multiple industries. With a{" "}
              <em>strong local team and AI-powered hiring technology</em>, we
              ensure that businesses find the right talent and job seekers access
              the best career opportunities
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/42454fd2ac0df575330fe1d9beb3f9a1ff9da8ef"
              alt="World Map"
              className="w-[569px] h-[436px] object-contain max-lg:w-full"
            />
          </div>
        </div>
      </section>
    );
  };

  export const BranchesSection = () => {
    return (
      <section className="flex flex-wrap gap-10 justify-between px-10 py-12 max-md:px-5 max-sm:px-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8316f9d5b14017c384b0a98fd8b58e94c18ad3fa"
          alt="Location"
          className="w-[588px] h-[392px] object-contain max-lg:w-full"
        />
        <div className="flex-1 p-12 rounded-xl bg-[linear-gradient(180deg,#EBF5F4_0%,#FFF_100%)] min-w-[300px] max-md:p-8 max-sm:p-5">
          <h2 className="mb-10 text-xl text-black">Our Branches in USA</h2>
          <div className="space-y-8">
            <p className="text-xl text-black">Head Office: [City, Address]</p>
            <p className="text-xl text-black">
              Regional Offices: [City, Address]
            </p>
            <p className="text-xl text-black">
              Franchise Locations: [List of locations]
            </p>
            <p className="text-xl text-black">
              Franchise Locations: [List of locations]
            </p>
            <p className="text-xl text-black">Contact US:</p>
            <p className="text-xl text-black">Email ID:</p>
          </div>
        </div>
      </section>
    );
  };

  interface TeamMemberProps {
    imagePath: string;
    name: string;
    role: string;
  }

  const TeamMember: React.FC<TeamMemberProps> = ({ imagePath, name, role }) => {
    return (
      <article className="p-5 text-center rounded-xl bg-teal-800 bg-opacity-50 w-[281px]">
        <img
          src={imagePath}
          alt={name}
          className="w-[122px] h-[122px] rounded-full mx-auto mb-[20px]"
        />
        <h3 className="mb-2.5 text-xl font-semibold text-black">{name}</h3>
        <p className="text-lg text-black">{role}</p>
      </article>
    );
  };

  export const TeamSection: React.FC = () => {
    const teamMembers = [
      {
        imagePath: "path-to-jacob-image",
        name: "JACOB",
        role: "Country Director",
      },
      {
        imagePath: "path-to-aleena-image",
        name: "ALEENA",
        role: "Recruitment Head",
      },
      {
        imagePath: "path-to-paul-image",
        name: "PAUL ALEX",
        role: "HR & Compliance Lead",
      },
      {
        imagePath: "path-to-riya-image",
        name: "RIYA",
        role: "Business Development Manager",
      },
    ];
  
    return (
      <section className="px-10 py-12 bg-[linear-gradient(180deg,#EBF5F4_0%,#FFF_100%)] max-md:px-5 max-sm:px-4">
        <div className="mx-auto max-w-[1200px]">
          <header className="mb-12 text-center">
            <h2 className="mb-5 text-2xl font-semibold text-teal-800">
              Meet Our Team in USA
            </h2>
            <p className="text-xl text-black">
              Our dedicated team of recruitment experts, HR specialists, and
              business consultants ensures seamless hiring, training, and
              workforce management. Want to connect? Reach out to our team for
              hiring solutions or job opportunities!
            </p>
          </header>
          <div className="flex flex-wrap gap-16 justify-center">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                imagePath={member.imagePath}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };


  interface IndustryItemProps {
    icon: string;
    title: string;
    description: string;
  }


  export const IndustryItem: React.FC<IndustryItemProps> = ({
    icon,
    title,
    description,
  }) => {
    return (
      <article className="flex gap-5 items-center">
        <div className="flex justify-center items-center bg-sky-100 rounded-full h-[70px] w-[70px]">
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
        <div>
          <h3 className="mb-2.5 text-xl font-semibold text-teal-800">{title}</h3>
          <p className="text-base text-black">{description}</p>
        </div>
      </article>
    );
  };
  



  export const IndustriesSection: React.FC = () => {
    const constructionIcon = `<svg id="60:397" layer-name="Icon" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[35px] h-[36px]"> <path d="M26.0648 15.8075C26.1555 15.8301 26.2405 15.8301 26.3198 15.8075C26.3991 15.7848 26.4728 15.7395 26.5407 15.6715C26.6087 15.6035 26.6427 15.5242 26.6427 15.4335C26.6881 15.2296 26.7277 15.0199 26.7617 14.8046C26.7957 14.5893 26.8184 14.3797 26.8297 14.1757C26.841 13.9718 26.8467 13.7565 26.8467 13.5298C26.8467 10.9463 25.9345 8.73664 24.1101 6.90094C22.2858 5.06525 20.0818 4.1474 17.4983 4.1474C15.7985 4.1474 14.2348 4.56667 12.807 5.40519C11.3793 6.24372 10.2461 7.38253 9.4076 8.82162C8.56907 10.2607 8.14981 11.8301 8.14981 13.5298C8.14981 16.1134 9.06199 18.323 10.8864 20.1587C12.7107 21.9944 14.9147 22.9123 17.4983 22.9123C19.266 22.9123 20.892 22.459 22.3764 21.5525C23.8609 20.646 25.011 19.4109 25.8269 17.8471C25.9628 17.5298 25.8835 17.2919 25.5889 17.1332C25.2943 16.9746 25.0677 17.0539 24.909 17.3712C24.1838 18.7536 23.1583 19.8528 21.8325 20.6686C20.5067 21.4845 19.062 21.8924 17.4983 21.8924C15.2093 21.8924 13.249 21.0766 11.6172 19.4449C9.9855 17.8131 9.16964 15.8471 9.16964 13.5468C9.16964 11.2466 9.9855 9.27488 11.6172 7.63182C13.249 5.98876 15.2093 5.16723 17.4983 5.16723C18.6314 5.16723 19.7135 5.38819 20.7447 5.83012C21.7759 6.27205 22.6597 6.86695 23.3963 7.61482C24.1328 8.3627 24.722 9.25222 25.164 10.2834C25.6059 11.3145 25.8269 12.3967 25.8269 13.5298C25.8269 14.0964 25.7702 14.663 25.6569 15.2296C25.6342 15.3655 25.6626 15.4902 25.7419 15.6035C25.8212 15.7168 25.9288 15.7848 26.0648 15.8075ZM23.1753 11.6262C23.1526 11.5355 23.1016 11.4618 23.0223 11.4052C22.943 11.3485 22.858 11.3089 22.7674 11.2862L19.4359 10.8103L17.9402 7.7848C17.8722 7.60349 17.7249 7.51284 17.4983 7.51284C17.2716 7.51284 17.1243 7.60349 17.0563 7.7848L15.5606 10.8103L12.2291 11.2862C12.0252 11.3089 11.8892 11.4279 11.8212 11.6432C11.7532 11.8585 11.7985 12.0341 11.9572 12.1701L14.3708 14.5157L13.7929 17.8131C13.7702 17.9491 13.7985 18.0737 13.8779 18.1871C13.9572 18.3004 14.0535 18.374 14.1668 18.408C14.2801 18.442 14.4048 18.425 14.5407 18.357L17.4983 16.7933L20.4558 18.357C20.6371 18.4703 20.8184 18.459 20.9997 18.323C21.181 18.1871 21.249 18.0171 21.2036 17.8131L20.6257 14.5157L23.0393 12.1701C23.198 12.0114 23.2433 11.8301 23.1753 11.6262ZM19.7419 13.9718C19.6739 14.0171 19.6286 14.0794 19.6059 14.1587C19.5832 14.2381 19.5719 14.323 19.5719 14.4137L20.0138 16.9633L17.7362 15.7735C17.5776 15.7055 17.4189 15.7055 17.2603 15.7735L14.9827 16.9633L15.4246 14.4137C15.4246 14.323 15.4133 14.2381 15.3906 14.1587C15.3679 14.0794 15.3226 14.0171 15.2546 13.9718L13.4189 12.1361L15.9685 11.7961C16.0365 11.7735 16.0932 11.7508 16.1385 11.7281C16.1838 11.7055 16.2235 11.6771 16.2575 11.6432C16.2915 11.6092 16.3198 11.5582 16.3424 11.4902L17.4983 9.17856L18.6541 11.4902C18.722 11.6488 18.8467 11.7508 19.028 11.7961L21.5776 12.1361L19.7419 13.9718ZM31.8099 31.0369L26.8127 22.4024C27.266 21.9264 27.6739 21.4279 28.0365 20.9066C28.3991 20.3854 28.722 19.8358 29.0053 19.2579C29.2886 18.68 29.5322 18.0851 29.7362 17.4732C29.9402 16.8613 30.0932 16.2211 30.1951 15.5525C30.2971 14.8839 30.3481 14.2097 30.3481 13.5298C30.3481 12.1247 30.1328 10.7706 29.7022 9.46752C29.2716 8.1644 28.6597 6.98593 27.8665 5.9321C27.0733 4.87828 26.1498 3.9491 25.096 3.14457C24.0422 2.34004 22.858 1.72247 21.5436 1.29188C20.2291 0.861282 18.8807 0.645985 17.4983 0.645985C15.2773 0.645985 13.2036 1.17856 11.2773 2.24372C10.9827 2.42502 10.9147 2.66298 11.0733 2.9576C11.232 3.25222 11.4586 3.32021 11.7532 3.16157C12.6371 2.66298 13.5662 2.28904 14.5407 2.03975C15.5152 1.79046 16.5011 1.66582 17.4983 1.66582C19.1073 1.66582 20.6427 1.97743 22.1045 2.60066C23.5662 3.22389 24.824 4.06808 25.8779 5.13324C26.9317 6.19839 27.7702 7.46185 28.3934 8.92361C29.0167 10.3854 29.3283 11.9208 29.3283 13.5298C29.3283 15.6828 28.8014 17.6715 27.7475 19.4958C26.6937 21.3202 25.2546 22.7593 23.4303 23.8131C21.6059 24.8669 19.6286 25.3939 17.4983 25.3939C15.3679 25.3939 13.3906 24.8669 11.5662 23.8131C9.74188 22.7593 8.30278 21.3202 7.24896 19.4958C6.19513 17.6715 5.66822 15.6828 5.66822 13.5298C5.66822 11.7848 6.03649 10.1191 6.77304 8.53267C7.50958 6.94627 8.54641 5.5865 9.88352 4.45335C10.1555 4.22672 10.1781 3.9831 9.95151 3.72247C9.72488 3.46185 9.48692 3.44485 9.23763 3.67148C7.7872 4.89528 6.65972 6.36836 5.85519 8.09074C5.05066 9.81312 4.64839 11.6262 4.64839 13.5298C4.64839 15.2296 4.96001 16.8386 5.58324 18.357C6.20647 19.8754 7.07332 21.2239 8.1838 22.4024L6.75604 24.85C6.66539 25.0313 6.67105 25.2069 6.77304 25.3769C6.87502 25.5468 7.01666 25.6318 7.19797 25.6318C7.37927 25.6318 7.52658 25.5412 7.63989 25.3599L8.93168 23.1502C10.5181 24.578 12.3424 25.5412 14.4048 26.0398L9.9855 33.6885L8.86369 30.1191C8.77304 29.8245 8.5804 29.7111 8.28578 29.7791L4.64839 30.595L6.45009 27.4335C6.63139 27.1389 6.57474 26.9066 6.28012 26.7366C5.9855 26.5667 5.74754 26.629 5.56624 26.9236L3.18663 31.0709C3.07332 31.2522 3.08465 31.4392 3.22063 31.6318C3.35661 31.8245 3.52658 31.8981 3.73054 31.8528L8.04782 30.9009L9.3736 35.1162C9.44159 35.3202 9.5889 35.4335 9.81553 35.4562C10.0422 35.4788 10.2008 35.3995 10.2915 35.2182L15.4586 26.2437C16.1385 26.357 16.8184 26.4137 17.4983 26.4137C18.1781 26.4137 18.8694 26.357 19.5719 26.2437L22.6654 31.6148C22.7107 31.7055 22.773 31.7735 22.8524 31.8188C22.9317 31.8641 23.0167 31.8868 23.1073 31.8868C23.198 31.8868 23.2773 31.8641 23.3453 31.8188C23.6399 31.6375 23.7079 31.3995 23.5492 31.1049L20.6257 26.0398C22.6654 25.5185 24.4784 24.544 26.0648 23.1162L30.3481 30.561L26.7107 29.7451C26.4161 29.6771 26.2235 29.8018 26.1328 30.1191L25.011 33.6545L24.739 33.1786C24.5577 32.8839 24.3198 32.8216 24.0252 32.9916C23.7305 33.1616 23.6739 33.3939 23.8552 33.6885L24.705 35.1842C24.7504 35.2975 24.841 35.3712 24.977 35.4052C25.113 35.4392 25.2433 35.4279 25.3679 35.3712C25.4926 35.3145 25.5776 35.2182 25.6229 35.0822L26.9487 30.8669L31.266 31.8188C31.3566 31.8415 31.4529 31.8301 31.5549 31.7848C31.6569 31.7395 31.7305 31.6771 31.7759 31.5978C31.8212 31.5185 31.8552 31.4279 31.8779 31.3259C31.9005 31.2239 31.8779 31.1276 31.8099 31.0369Z" fill="#3081D0"></path> </svg>`;
  
    return (
      <section className="px-10 py-12 bg-[linear-gradient(180deg,#E3EEEF_0%,#FFF_100%)] max-md:px-5 max-sm:px-4">
        <div className="mx-auto max-w-[1200px]">
          <header className="mb-12 text-center">
            <h2 className="mb-5 text-2xl font-semibold text-teal-800">
              Industries We Serve in USA
            </h2>
            <p className="text-base text-black">
              Gulfaar supports businesses across multiple sectors, providing
              skilled, semi-skilled, and professional workforce solutions
            </p>
          </header>
          <div className="flex flex-wrap gap-10">
            <IndustryItem
              icon={constructionIcon}
              title="Construction &amp; Engineering"
              description="Civil workers, electricians, welders, project managers."
            />
            <IndustryItem
              icon={`<svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.625 14.875H26.25V10.5C26.25 9.81 25.69 9.25 25 9.25H17.5V4.875H21.875C22.565 4.875 23.125 4.315 23.125 3.625C23.125 2.935 22.565 2.375 21.875 2.375H13.125C12.435 2.375 11.875 2.935 11.875 3.625C11.875 4.315 12.435 4.875 13.125 4.875H17.5V9.25H10C9.31 9.25 8.75 9.81 8.75 10.5V14.875H4.375C3.685 14.875 3.125 15.435 3.125 16.125V32.375C3.125 33.065 3.685 33.625 4.375 33.625H30.625C31.315 33.625 31.875 33.065 31.875 32.375V16.125C31.875 15.435 31.315 14.875 30.625 14.875ZM11.25 11.75H23.75V14.875H11.25V11.75ZM5.625 17.375H14.375V31.125H5.625V17.375ZM29.375 31.125H16.875V17.375H29.375V31.125Z" fill="#3081D0"/>
                <path d="M8.75 21.75H11.25V24.25H8.75V21.75Z" fill="#3081D0"/>
                <path d="M8.75 26.75H11.25V29.25H8.75V26.75Z" fill="#3081D0"/>
                <path d="M19.375 21.75H26.875V24.25H19.375V21.75Z" fill="#3081D0"/>
                <path d="M19.375 26.75H26.875V29.25H19.375V26.75Z" fill="#3081D0"/>
              </svg>`}
              title="Healthcare &amp; Medical"
              description="Nurses, doctors, medical technicians, healthcare administrators."
            />
            <IndustryItem
              icon={`<svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.25 4.25H3.75C2.37 4.25 1.25 5.37 1.25 6.75V29.25C1.25 30.63 2.37 31.75 3.75 31.75H31.25C32.63 31.75 33.75 30.63 33.75 29.25V6.75C33.75 5.37 32.63 4.25 31.25 4.25ZM31.25 29.25H3.75V6.75H31.25V29.25Z" fill="#3081D0"/>
                <path d="M7.5 12.125H27.5V14.625H7.5V12.125Z" fill="#3081D0"/>
                <path d="M7.5 17.125H17.5V24.625H7.5V17.125Z" fill="#3081D0"/>
                <path d="M20 17.125H27.5V19.625H20V17.125Z" fill="#3081D0"/>
                <path d="M20 22.125H27.5V24.625H20V22.125Z" fill="#3081D0"/>
              </svg>`}
              title="Information Technology"
              description="Software developers, IT support, system administrators, data analysts."
            />
            <IndustryItem
              icon={`<svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1667 4.25H5.83333C4.45 4.25 3.33333 5.36667 3.33333 6.75V29.25C3.33333 30.6333 4.45 31.75 5.83333 31.75H29.1667C30.55 31.75 31.6667 30.6333 31.6667 29.25V6.75C31.6667 5.36667 30.55 4.25 29.1667 4.25ZM29.1667 29.25H5.83333V6.75H29.1667V29.25Z" fill="#3081D0"/>
                <path d="M11.6667 14.25C13.0483 14.25 14.1667 13.1316 14.1667 11.75C14.1667 10.3684 13.0483 9.25 11.6667 9.25C10.285 9.25 9.16667 10.3684 9.16667 11.75C9.16667 13.1316 10.285 14.25 11.6667 14.25Z" fill="#3081D0"/>
                <path d="M11.6667 16.75C9.16667 16.75 4.16667 18 4.16667 20.5V22.1667H19.1667V20.5C19.1667 18 14.1667 16.75 11.6667 16.75Z" fill="#3081D0"/>
                <path d="M23.3333 14.25C24.715 14.25 25.8333 13.1316 25.8333 11.75C25.8333 10.3684 24.715 9.25 23.3333 9.25C21.9517 9.25 20.8333 10.3684 20.8333 11.75C20.8333 13.1316 21.9517 14.25 23.3333 14.25Z" fill="#3081D0"/>
                <path d="M23.3333 16.75C20.8333 16.75 15.8333 18 15.8333 20.5V22.1667H30.8333V20.5C30.8333 18 25.8333 16.75 23.3333 16.75Z" fill="#3081D0"/>
              </svg>`}
              title="Hospitality &amp; Tourism"
              description="Hotel staff, chefs, event managers, tour guides, customer service."
            />
            <IndustryItem
              icon={`<svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.25 11.75H24.375V6.75C24.375 5.37 23.255 4.25 21.875 4.25H13.125C11.745 4.25 10.625 5.37 10.625 6.75V11.75H3.75C2.37 11.75 1.25 12.87 1.25 14.25V29.25C1.25 30.63 2.37 31.75 3.75 31.75H31.25C32.63 31.75 33.75 30.63 33.75 29.25V14.25C33.75 12.87 32.63 11.75 31.25 11.75ZM13.125 6.75H21.875V11.75H13.125V6.75ZM31.25 29.25H3.75V14.25H31.25V29.25Z" fill="#3081D0"/>
                <path d="M17.5 17.125C15.2909 17.125 13.5 18.9159 13.5 21.125C13.5 23.3341 15.2909 25.125 17.5 25.125C19.7091 25.125 21.5 23.3341 21.5 21.125C21.5 18.9159 19.7091 17.125 17.5 17.125Z" fill="#3081D0"/>
              </svg>`}
              title="Manufacturing &amp; Production"
              description="Assembly line workers, quality control, production managers, technicians."
            />
            <IndustryItem
              icon={`<svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4375 9.25H6.5625C5.14062 9.25 4 10.3906 4 11.8125V24.1875C4 25.6094 5.14062 26.75 6.5625 26.75H28.4375C29.8594 26.75 31 25.6094 31 24.1875V11.8125C31 10.3906 29.8594 9.25 28.4375 9.25ZM28.4375 24.1875H6.5625V11.8125H28.4375V24.1875Z" fill="#3081D0"/>
                <path d="M8.75 14.25H12.5V21.75H8.75V14.25Z" fill="#3081D0"/>
                <path d="M15.3125 14.25H19.0625V21.75H15.3125V14.25Z" fill="#3081D0"/>
                <path d="M21.875 14.25H25.625V21.75H21.875V14.25Z" fill="#3081D0"/>
              </svg>`}
              title="Retail &amp; E-commerce"
              description="Sales associates, store managers, inventory specialists, online support."
            />
            <IndustryItem
              icon={`<svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.1667 4.25H5.83333C4.45 4.25 3.33333 5.36667 3.33333 6.75V29.25C3.33333 30.6333 4.45 31.75 5.83333 31.75H29.1667C30.55 31.75 31.6667 30.6333 31.6667 29.25V6.75C31.6667 5.36667 30.55 4.25 29.1667 4.25ZM29.1667 29.25H5.83333V6.75H29.1667V29.25Z" fill="#3081D0"/>
                <path d="M8.33333 14.25H26.6667V16.75H8.33333V14.25Z" fill="#3081D0"/>
                <path d="M8.33333 19.25H26.6667V21.75H8.33333V19.25Z" fill="#3081D0"/>
                <path d="M8.33333 24.25H18.3333V26.75H8.33333V24.25Z" fill="#3081D0"/>
              </svg>`}
              title="Education &amp; Training"
              description="Teachers, trainers, educational administrators, curriculum developers."
            />
          </div>
        </div>
      </section>
    );
  };