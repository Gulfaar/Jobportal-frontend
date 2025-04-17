'use client';

import { MessageCircle, Bot, Settings, Monitor, Users, Activity } from 'lucide-react';
import React from 'react';

export default function TechBPOSection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat relative text-white"
      style={{ backgroundImage: "url('/images/bpu-tool.png')" }} // replace with your image
    >
      {/* Yellow overlay */}
      <div className="absolute inset-0 bg-[#FFF200] opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4 md:px-12 lg:px-24 font-fightree">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left: Heading */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#003D3B]">
                Tech-Integrated BPO & Communication Tools
              </h2>
              <p className="text-base md:text-lg text-[#003D3B]">
                We bring next-gen automation to facility operations
              </p>
            </div>

            {/* Right: One card */}
            <div className="w-full lg:w-1/2">
              <ServiceCard
                icon={<Bot size={22} />}
                title="AI Voice & Chat Bots"
                desc="24/7 multilingual support for residents, staff & clients"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              icon={<MessageCircle size={22} />}
              title="WhatsApp API Tools"
              desc="Automate customer support, appointment reminders & lead conversion"
            />
            <ServiceCard
              icon={<Monitor size={22} />}
              title="AI-based Screening"
              desc="Use psychometric testing, voice interviews & resume scoring for facility hiring"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              icon={<Settings size={22} />}
              title="CRM Integration"
              desc="Ticket generation, issue tracking, and agent reporting"
            />
            <ServiceCard
              icon={<Activity size={22} />}
              title="Real-Time Dashboards"
              desc="Track productivity, maintenance requests & incident resolution"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-[#084C4A] text-white rounded-lg p-6 flex items-start gap-4 shadow-md h-full min-h-[100px]">
      <div className="pt-1">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}
