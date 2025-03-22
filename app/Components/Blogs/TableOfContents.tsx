import React from "react";

const TableOfContents = () => {
  return (
    <aside
      className="absolute right-10 p-9  bg-white rounded-xl shadow-[0_0_9px_rgba(0,0,0,0.25)] top-0 w-[242px] max-md:static max-md:mx-0 max-md:my-5 max-md:w-full"
      aria-labelledby="toc-heading"
    >
      <h2 id="toc-heading" className="mb-11 text-2xl font-bold text-black">
        Table of Contents
      </h2>
      <nav>
        <ul>
          <li className="mb-5">
            <a href="#section1" className="text-lg text-sky-500">
              lorem ipsum
            </a>
          </li>
          <li className="mb-5">
            <a href="#section2" className="text-lg text-sky-500">
              lorem ipsum
            </a>
          </li>
          <li className="mb-5">
            <a href="#section3" className="text-lg text-sky-500">
              lorem ipsum
            </a>
          </li>
          <li className="mb-5">
            <a href="#section4" className="text-lg text-sky-500">
              lorem ipsum
            </a>
          </li>
          <li className="mb-5">
            <a href="#section5" className="text-lg text-sky-500">
              lorem ipsum
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default TableOfContents;
