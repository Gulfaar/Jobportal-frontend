"use client";
import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribing email:", email);
    // Reset form after submission
    setEmail("");
  };

  return (
    <div>
      <h3 className="mb-5 text-xl font-semibold text-white">Newsletter</h3>
      <p className="mb-5 text-sm text-white">
        Eu nunc pretium vitae platea. Non netus elementum vulputate
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="email-input" className="sr-only">
            Email Address
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-4 text-sm text-white bg-transparent rounded-xl border border-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          className="py-4 text-base font-semibold text-teal-800 bg-white rounded-xl hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Subscribe now
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
