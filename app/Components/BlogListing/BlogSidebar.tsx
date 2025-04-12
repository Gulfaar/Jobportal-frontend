"use client";
import React from "react";
import { SearchIcon, MapPinIcon, ChevronDownIcon } from "./Icons";

const BlogSidebar: React.FC = () => {
  return (
    <aside className="hidden md:block p-6 rounded-3xl shadow-sm bg-slate-100 w-[342px] max-md:w-full">
      <section className="mb-10" aria-labelledby="search-title">
        <h2 id="search-title" className="mb-5 text-xl font-semibold text-black">
          Search by Job Title
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Job title or company"
            className="px-11 py-2.5 w-full h-10 text-base bg-white rounded-xl text-black"
            aria-label="Search for job title or company"
          />
          <SearchIcon />
        </div>
      </section>

      <section className="mb-10" aria-labelledby="country-title">
        <h2 id="country-title" className="mb-5 text-xl font-semibold text-black">
          Country
        </h2>
        <div className="relative">
          <button
            className="flex items-center px-3 py-2.5 w-full h-10 text-base bg-white rounded-xl cursor-pointer"
            aria-haspopup="listbox"
            aria-expanded="false"
          >
            <MapPinIcon />
            <span className="text-black">Choose country</span>
            <ChevronDownIcon />
          </button>
        </div>
      </section>

      <section className="mb-10" aria-labelledby="location-title">
        <h2 id="location-title" className="mb-5 text-xl font-semibold text-black">
          Location
        </h2>
        <div className="relative">
          <button
            className="flex items-center px-3 py-2.5 w-full h-10 text-base bg-white rounded-xl cursor-pointer"
            aria-haspopup="listbox"
            aria-expanded="false"
          >
            <MapPinIcon />
            <span className="text-black">Choose city</span>
            <ChevronDownIcon />
          </button>
        </div>
      </section>

      <section className="mb-10" aria-labelledby="category-title">
        <h2 id="category-title" className="mb-5 text-xl font-semibold text-black">
          Category
        </h2>
        <fieldset className="flex flex-col gap-3">
          <legend className="sr-only text-black">Select job categories</legend>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border border-gray-500 text-black"
              aria-label="Education category"
            />
            <span className="text-base text-black">Education</span>
          </label>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border border-gray-500"
              aria-label="Financial Services category"
            />
            <span className="text-base text-black">Financial Services</span>
          </label>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border border-gray-500"
              aria-label="Telecommunications category"
            />
            <span className="text-base text-black">Telecommunications</span>
          </label>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border border-gray-500"
              aria-label="Commerce category"
            />
            <span className="text-base text-black">Commerce</span>
          </label>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border border-gray-500"
              aria-label="Hotels & Tourism category"
            />
            <span className="text-base text-black">Hotels &amp; Tourism</span>
          </label>
        </fieldset>

        <button
          className="mt-5 w-full h-10 font-semibold text-white rounded-lg bg-slate-800"
          aria-expanded="false"
        >
          Show More
        </button>
      </section>

      <section className="mb-10" aria-labelledby="date-title">
        <h2 id="date-title" className="mb-5 text-xl font-semibold text-black">
          Date Posted
        </h2>
        <fieldset className="flex flex-col gap-3">
          <legend className="sr-only text-black">Filter by date posted</legend>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border border-gray-500"
              aria-label="All dates"
            />
            <span className="text-base text-black">All</span>
          </label>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border border-gray-500"
              aria-label="Last Hour"
            />
            <span className="text-base text-black">Last Hour</span>
          </label>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border border-gray-500"
              aria-label="Last 24 Hours"
            />
            <span className="text-base text-black">Last 24 Hours</span>
          </label>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border border-gray-500"
              aria-label="Last 7 Days"
            />
            <span className="text-base text-black">Last 7 Days</span>
          </label>

          <label className="flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border border-gray-500"
              aria-label="Last 30 Days"
            />
            <span className="text-base text-black">Last 30 Days</span>
          </label>
        </fieldset>
      </section>

      <section aria-labelledby="tags-title">
        <h2 id="tags-title" className="mb-5 text-xl font-semibold text-black">
          Tags
        </h2>
        <div
          className="flex flex-wrap gap-3"
          role="list"
          aria-label="Available tags"
        >
          <div
            className="px-3 py-1 text-white rounded-xl bg-teal-600 bg-opacity-10"
            role="listitem"
          >
            engineering
          </div>
          <div
            className="px-3 py-1 text-white rounded-xl bg-teal-600 bg-opacity-10"
            role="listitem"
          >
            marketing
          </div>
          <div
            className="px-3 py-1 text-white rounded-xl bg-teal-600 bg-opacity-10"
            role="listitem"
          >
            soft
          </div>
          <div
            className="px-3 py-1 text-white rounded-xl bg-teal-600 bg-opacity-10"
            role="listitem"
          >
            design
          </div>
          <div
            className="px-3 py-1 text-white rounded-xl bg-teal-600 bg-opacity-10"
            role="listitem"
          >
            ui/ux
          </div>
          <div
            className="px-3 py-1 text-white rounded-xl bg-teal-600 bg-opacity-10"
            role="listitem"
          >
            construction
          </div>
          <div
            className="px-3 py-1 text-white rounded-xl bg-teal-600 bg-opacity-10"
            role="listitem"
          >
            management
          </div>
        </div>
      </section>
    </aside>
  );
};

export default BlogSidebar;
