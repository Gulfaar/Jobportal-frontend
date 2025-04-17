'use client';

import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full text-[#2A6360] font-fightree">
      <div className="w-full text-white py-6 px-4 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Dropdown header */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer border border-white rounded-t-lg p-4 bg-[#2A6360] text-white shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Rope Access & Confined Space Services
              </h3>
              <p className="text-sm sm:text-base md:text-lg">
                Safe, cost-effective alternatives to scaffolding, perfect for
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              {isOpen ? (
                <ChevronUp className="text-white text-2xl" />
              ) : (
                <ChevronDown className="text-white text-2xl" />
              )}
            </div>
          </div>

          {/* Dropdown content */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="space-y-4 bg-white text-[#2A6360] p-6 rounded-b-lg shadow-lg">
                  <ServiceItem text="Vertical & high-rise structure maintenance" />
                  <ServiceItem text="Welding, blasting, coating, bolt torqueing" />
                  <ServiceItem text="Rope access welding, grinding & cleaning" />
                  <ServiceItem text="Confined space entry & inspection" />
                  <ServiceItem text="IRATA-certified technicians & safe anchor point setup" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ text }: { text: string }) {
  return (
    <div className="bg-[#2A6360] text-white rounded-3xl p-4 flex items-center gap-3 shadow-sm min-h-[70px] w-full">
      <ArrowRight size={20} strokeWidth={2} className="text-white" />
      <p className="text-base font-medium leading-snug">{text}</p>
    </div>
  );
}
