import React from "react";

const Breadcrumb = () => {
  return (
    <nav className="mx-10 my-5 text-lg" aria-label="Breadcrumb">
      <ol className="flex">
        <li>
          <a href="#" className="text-sky-500 text-opacity-50">
            Home
          </a>
        </li>
        <li className="text-black text-opacity-30 mx-1">/</li>
        <li aria-current="page">
          <span className="text-black text-opacity-50">Post Title</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
