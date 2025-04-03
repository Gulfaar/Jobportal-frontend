"use client";
import React from "react";

const NavLinks: React.FC = () => {
  return (
    <nav
      className="flex absolute right-10 gap-5 top-[117px] max-md:hidden"
      aria-label="Main navigation"
    >
      <button className="text-xl font-semibold text-white cursor-pointer">
        Jobs
      </button>
      <button className="text-xl font-semibold text-white cursor-pointer">
        Blog
      </button>
      <button className="text-xl font-semibold text-white cursor-pointer">
        Training
      </button>
      <button className="text-xl font-semibold text-white cursor-pointer">
        Work-Force Solutions
      </button>
      <button className="text-xl font-semibold text-white cursor-pointer">
        Partner with us
      </button>
    </nav>
  );
};

export default NavLinks;
