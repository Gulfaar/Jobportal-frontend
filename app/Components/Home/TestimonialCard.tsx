import React from "react";

interface TestimonialCardProps {
  title: string;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  title,
  content,
  author,
  role,
  avatar,
}) => {
  return (
    <article className="flex flex-col items-start p-8  bg-white rounded-2xl shadow-md w-65 h-[270px] md:w-70 md:min-h-[300px] text-left relative">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
    <h3 className="mt-3 text-lg text-black font-semibold">{title}</h3>
    <p className="mt-4 text-sm text-gray-600">{content}</p>
    <div className="flex items-center mt-6">
      <img src={avatar} alt={author} className="w-12 h-12 rounded-full mr-3" />
      <div>
        <div className="text-sm font-semibold text-black">{author}</div>
        <div className="text-xs text-gray-500">{role}</div>
      </div>
    </div>
  </article>
  );
};

export default TestimonialCard;
