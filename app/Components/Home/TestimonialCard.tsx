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
    <article className="flex relative flex-col justify-between items-start p-10 bg-white rounded-3xl min-h-[400px] min-w-60 shadow-[0px_3px_8px_rgba(48,150,137,0.05)] w-[416px] max-md:px-5">
      <div className="flex z-0 flex-col self-stretch w-full">
        <div className="flex flex-col self-start">
          <div className="flex gap-2 items-start self-start">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/80abd0d8ac073ba8bca77dfc3f72513b5ed5e9eb?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
                alt="Star rating"
                className="object-contain shrink-0 w-6 aspect-square fill-yellow-400"
              />
            ))}
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-black">{title}</h3>
        </div>
        <p className="mt-10 text-base leading-6 text-black">{content}</p>
      </div>
      <div className="flex z-0 gap-4 items-center text-base">
        <img
          src={avatar}
          alt={`${author} avatar`}
          className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square rounded-[50px]"
        />
        <div className="self-stretch my-auto">
          <div className="font-semibold text-black">{author}</div>
          <div className="mt-4 text-black">{role}</div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5345bb6e67766d3f4fa184b7de3daa4027a7cfb?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
        alt="Quote mark"
        className="object-contain absolute right-10 z-0 w-10 aspect-[1.33] bottom-[104px] h-[30px]"
      />
    </article>
  );
};

export default TestimonialCard;
