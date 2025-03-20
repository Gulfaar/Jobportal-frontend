"use client";
import React from "react";

const CountrySelector = () => {
  return (
    <div
      className="gap-4 self-start px-4 py-5 rounded-2xl border border-white border-solid min-h-12"
      role="combobox"
      aria-expanded="false"
      aria-haspopup="listbox"
      aria-label="Select country"
    >
      Country
    </div>
  );
};

export default CountrySelector;
