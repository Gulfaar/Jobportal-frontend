import React from "react";
import JobCategoryCard from "./JobCategoryCard";

const JobCategoriesSection: React.FC = () => {
  const categories = [
    {
      icon: "worker-svg",
      title: "Skilled & Semi-Skilled Workers",
      description: "Engineers, electricians, mechanics, construction workers",
      svg: `<svg id="134:608" width="682" height="240" viewBox="0 0 682 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[32px] h-[32px]"> <rect width="60" height="60" rx="12" fill="#2E5F5C"></rect> <g clip-path="url(#clip0_134_608)"> <path d="M44.4155 40.56C41.216 38.8762 38.7685 37.9413 36.5947 37.5722L36.8315 37.2469C36.9243 37.1189 36.9558 36.9573 36.9179 36.8042L36.4224 34.8239C37.7494 32.953 38.5334 30.6159 38.5334 28.3999V26.2666H39.0667H40.1333C40.4283 26.2666 40.6666 26.0277 40.6666 25.7333C40.6666 25.4383 40.4282 25.2 40.1333 25.2H39.6V24.6667C39.6 23.1808 39.2502 21.7813 38.6229 20.5365L33.8341 21.4571C33.8005 21.4635 33.7669 21.4666 33.7334 21.4666C33.5936 21.4666 33.4576 21.4112 33.3568 21.3109C33.232 21.1856 33.1765 21.0069 33.2096 20.833L34.0842 16.241C33.6325 16.0378 33.1605 15.8618 32.6666 15.7215V15.6085C32.6666 14.7216 31.945 14 31.0581 14H28.9424C28.0549 14 27.3333 14.7216 27.3333 15.6086V15.7216C26.84 15.8619 26.368 16.0378 25.9163 16.241L26.7909 20.8331C26.824 21.0069 26.7685 21.1856 26.6437 21.311C26.5429 21.4112 26.4069 21.4667 26.2666 21.4667C26.233 21.4667 26.1994 21.4635 26.1659 21.4571L21.3776 20.5366C20.7504 21.7814 20.4 23.1809 20.4 24.6667V25.2H19.8667C19.5723 25.2 19.3334 25.4384 19.3334 25.7333C19.3334 26.0277 19.5723 26.2666 19.8667 26.2666H20.9334H21.4667V28.4C21.4667 30.616 22.2513 32.9531 23.5776 34.824L23.0827 36.8043C23.0443 36.9573 23.0763 37.1189 23.1691 37.247L23.4059 37.5723C21.2321 37.9413 18.7846 38.8763 15.5852 40.56C14.6075 41.0741 14 42.0805 14 43.1861V45.4666C14 45.761 14.2389 45.9999 14.5333 45.9999H27.3333H27.3338H27.5333C27.5338 45.9999 27.5338 45.9994 27.5344 45.9994L32.4431 45.9952C32.4517 45.9957 32.4586 46 32.4672 46H45.4666C45.7616 46 45.9999 45.7611 45.9999 45.4667V43.1862C46 42.0805 45.3931 41.0741 44.4155 40.56ZM22.5333 28.4V26.2666H37.4666V28.4C37.4666 30.8016 36.617 32.9152 35.3605 34.5002C35.3418 34.5184 35.3173 34.5296 35.3012 34.5504C35.1178 34.785 34.9279 35.0063 34.7327 35.2144C34.7317 35.2155 34.7306 35.2165 34.7296 35.2176C34.5999 35.3546 34.465 35.4767 34.3306 35.6021C33.0272 36.7776 31.4789 37.4667 30 37.4667C28.5215 37.4667 26.9733 36.7776 25.6693 35.6021C25.5354 35.4768 25.4005 35.3546 25.2709 35.2176C25.2698 35.2165 25.2687 35.2154 25.2677 35.2144C25.0725 35.0064 24.8821 34.785 24.6986 34.5504C24.6826 34.5296 24.6586 34.5184 24.64 34.5002C23.3834 32.9152 22.5333 30.8016 22.5333 28.4ZM24.1781 36.8208L24.4176 35.864C24.4187 35.8656 24.4203 35.8666 24.4213 35.8677C25.7104 37.2698 27.3504 38.2576 29.1989 38.4821C29.2 38.4821 29.2011 38.4826 29.2021 38.4826L27.7546 41.7386L24.1781 36.8208ZM27.9845 44.9328L28.304 43.3333H31.6965L31.832 44.0091L32.016 44.9291L27.9845 44.9328ZM32.2458 41.7386L30.7984 38.4826C30.7995 38.4826 30.8005 38.4821 30.8015 38.4821C32.6501 38.2576 34.2901 37.2699 35.5791 35.8677C35.5802 35.8666 35.5818 35.8656 35.5829 35.864L35.8223 36.8208L32.2458 41.7386Z" fill="white"></path> <path d="M35.0695 16.7578L34.4023 20.2597L38.0519 19.5578C37.2941 18.4319 36.2808 17.4778 35.0695 16.7578Z" fill="white"></path> <path d="M24.9277 16.7578C23.7165 17.4778 22.7032 18.4319 21.9453 19.5578L25.5949 20.2597L24.9277 16.7578Z" fill="white"></path> </g> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Figtree" font-size="24" font-weight="600" letter-spacing="0em"><tspan x="80" y="20.8">Skilled &amp; Semi-Skilled Workers</tspan></text> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Figtree" font-size="20" letter-spacing="0em"><tspan x="80" y="55">Engineers, electricians, mechanics, construction workers</tspan></text> <rect y="90" width="60" height="60" rx="12" fill="#2E5F5C"></rect> <path d="M46 104H14C12.8954 104 12 104.895 12 106V126C12 127.105 12.8954 128 14 128H46C47.1046 128 48 127.105 48 126V106C48 104.895 47.1046 104 46 104Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 136H40" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M24 128V136" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M36 128V136" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 120L28 114L32 118L38 112" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Figtree" font-size="24" font-weight="600" letter-spacing="0em"><tspan x="80" y="110.8">Corporate Professionals</tspan></text> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Figtree" font-size="20" letter-spacing="0em"><tspan x="80" y="145">IT experts, financial analysts, HR managers, marketing professionals</tspan></text> <rect y="180" width="60" height="60" rx="12" fill="#2E5F5C"></rect> <path d="M24.5214 208.769C21.1598 208.769 18.4347 206.014 18.4347 202.615V197.692C18.4347 197.013 18.9798 196.462 19.652 196.462H20.8694C21.5416 196.462 22.0867 195.91 22.0867 195.231C22.0867 194.551 21.5416 194 20.8694 194H19.652C17.6351 194 16 195.653 16 197.692V202.615C16.0032 205.438 17.3775 208.079 19.6764 209.68C21.8751 211.64 23.1857 214.423 23.304 217.385C23.304 222.143 27.1192 226 31.8254 226C36.5317 226 40.3468 222.143 40.3468 217.385V215.982C42.9507 215.302 44.5164 212.617 43.8442 209.984C43.1718 207.351 40.516 205.768 37.9121 206.448C35.3082 207.128 33.7425 209.813 34.4147 212.446C34.8576 214.18 36.1969 215.534 37.9121 215.982V217.385C37.9121 220.783 35.187 223.538 31.8254 223.538C28.4639 223.538 25.7387 220.783 25.7387 217.385C25.8631 214.42 27.183 211.635 29.3907 209.68C31.6803 208.073 33.0452 205.433 33.0428 202.615V197.692C33.0428 195.653 31.4076 194 29.3907 194H28.1734C27.5012 194 26.9561 194.551 26.9561 195.231C26.9561 195.91 27.5012 196.462 28.1734 196.462H29.3907C30.063 196.462 30.6081 197.013 30.6081 197.692V202.615C30.6081 206.014 27.8829 208.769 24.5214 208.769ZM39.1295 213.692C37.7848 213.692 36.6948 212.59 36.6948 211.231C36.6948 209.871 37.7848 208.769 39.1295 208.769C40.4741 208.769 41.5642 209.871 41.5642 211.231C41.5642 212.59 40.4741 213.692 39.1295 213.692Z" fill="white"></path> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Figtree" font-size="24" font-weight="600" letter-spacing="0em"><tspan x="80" y="200.8">Healthcare Specialists</tspan></text> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Figtree" font-size="20" letter-spacing="0em"><tspan x="80" y="235">Nurses, doctors, caregivers, medical assistants.</tspan></text> <defs> <clipPath id="clip0_134_608"> <rect width="32" height="32" fill="white" transform="translate(14 14)"></rect> </clipPath> </defs> </svg>`,
    },
    {
      icon: "ti ti-building-hospital",
      title: "Healthcare Specialists",
      description: "Nurses, doctors, caregivers, medical assistants.",
    },
    {
      icon: "ti ti-briefcase",
      title: "Corporate Professionals",
      description:
        "IT experts, financial analysts, HR managers, marketing professionals",
    },
    {
      icon: "ti ti-truck",
      title: "Logistics & Transportation",
      description: "Drivers, warehouse workers, supply chain managers.",
    },
  ];

  return (
    <section
      className="px-16 py-16 max-md:px-10 max-sm:px-5"
      aria-labelledby="job-categories-title"
    >
      <h2
        id="job-categories-title"
        className="mb-10 text-5xl font-semibold text-center text-teal-800 max-md:text-4xl max-sm:text-3xl"
      >
        Who We Help You Hire?
      </h2>
      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        {categories.map((category, index) => (
          <JobCategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            description={category.description}
            svg={category.svg}
          />
        ))}
      </div>
    </section>
  );
};

export default JobCategoriesSection;
