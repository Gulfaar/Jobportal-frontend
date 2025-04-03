import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="relative h-[346px] max-sm:h-auto">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08a56c37b3eef189876cf77c8a2bb614703b81b6"
        className="object-cover size-full"
        alt="Footer background"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/13d199f17e1813c7762b2f48d68ab3452d8b549d"
        className="object-contain absolute h-[290px] left-[29px] top-[29px] w-[calc(100%_-_58px)] max-sm:relative max-sm:top-0 max-sm:left-0 max-sm:p-5 max-sm:w-full max-sm:h-auto"
        alt="Footer content"
      />
    </footer>
  );
};

export default FooterSection;
