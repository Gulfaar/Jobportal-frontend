'use client';

import { Ear as Gear, Building, Users } from 'lucide-react';
import React from 'react';

export default function HighlightsSection() {
  return (
    <section className="w-full text-[#2E5F5C] font-fightree py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Recent Highlights</h2>

        {/* Highlights List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <Gear className="text-[#2A6360] mt-1" size={24} />
            <div>
              <p className="text-base md:text-lg">
                Supported oil tank degassing and sludge removal in major Middle Eastern refineries
              </p>
              <img
                src="https://via.placeholder.com/150x100"
                alt="Placeholder for oil tank degassing"
                className="mt-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Gear className="text-[#2A6360] mt-1" size={24} />
            <div>
              <p className="text-base md:text-lg">
                Delivered structural modifications to offshore platforms for brownfield upgrades
              </p>
              <img
                src="https://via.placeholder.com/150x100"
                alt="Placeholder for offshore platforms"
                className="mt-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Building className="text-[#2A6360] mt-1" size={24} />
            <div>
              <p className="text-base md:text-lg">
                Executed rope-access façade repair for commercial towers in Dubai
              </p>
              <img
                src="https://via.placeholder.com/150x100"
                alt="Placeholder for façade repair"
                className="mt-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Building className="text-[#2A6360] mt-1" size={24} />
            <div>
              <p className="text-base md:text-lg">
                Managed end-to-end soft services for a 200,000 sq ft government facility
              </p>
              <img
                src="https://via.placeholder.com/150x100"
                alt="Placeholder for government facility"
                className="mt-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="text-[#2A6360] mt-1" size={24} />
            <div>
              <p className="text-base md:text-lg">
                Trained over 3,000 technicians in AI-integrated safety, QA/QC, and rope access operations
              </p>
              <img
                src="https://via.placeholder.com/150x100"
                alt="Placeholder for training"
                className="mt-2 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}