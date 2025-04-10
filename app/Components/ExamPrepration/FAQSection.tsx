'use client';

import { FC, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
        onClick={onToggle}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-600" />
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-600">{answer}</p>
          {isOpen && (
            <div className="mt-2 text-gray-500 text-sm">
              <p>Dummy content: This section expands with additional information when clicked. It collapses when the up arrow is clicked.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: { question: string; answer: string }[] = [
    {
      question: "How does AI enhance the learning experience?",
      answer: "AI provides personalized learning plans, real-time feedback, and adaptive study modules tailored to your progress.",
    },
    {
      question: "How long are the exam preparation programs?",
      answer: "Programs range from 4 to 12 weeks, with flexible schedules based on your needs.",
    },
    {
      question: "Are the programs online or in-person?",
      answer: "We offer both online and in-person programs to suit your preferences and location.",
    },
    {
      question: "What is the success rate of students?",
      answer: "Over 90% of our students achieve their target scores on their first attempt.",
    },
    {
      question: "How do I get started?",
      answer: "Sign up on our website, select your exam, and choose a suitable program. We'll guide you from there!",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 w-full">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">Find answers to common questions about our exam preparation programs.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
