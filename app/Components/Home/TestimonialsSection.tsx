import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      title: "Amazing services",
      content:
        "Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis",
      author: "Marco Kihn",
      role: "Happy Client",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0a9a43fdb5b4860b7018ed7f925b068c1e81705c?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
    },
    {
      title: "Everything simple",
      content:
        "Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus",
      author: "Kristin Hester",
      role: "Happy Client",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b7717d3a2816443393b4493a51056817b4e954e2?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
    },
    {
      title: "Awesome, thank you!",
      content:
        "Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes",
      author: "Zion Cisneros",
      role: "Happy Client",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/008ce2dc3309397e4f8ad6e09efd5a09edb2bc93?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
    },
  ];

  return (
    <section className="flex overflow-hidden relative flex-col px-20 py-28 mt-16 w-full min-h-[759px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/36e56516adda1a4ce96829a61cee06f2ee2b9df9?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
        alt="Testimonials background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center self-center text-black max-md:max-w-full">
        <h2 className="text-5xl font-semibold text-center max-md:max-w-full max-md:text-4xl">
          Testimonials from Our Customers
        </h2>
        <p className="mt-10 text-2xl text-ellipsis max-md:max-w-full">
          Exceptional service and professionalism! The team understood our needs
          perfectly and delivered beyond our expectations.
        </p>
      </div>
      <div className="flex relative flex-wrap gap-6 items-end mt-16 mb-0 max-md:mt-10 max-md:mb-2.5 justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            title={testimonial.title}
            content={testimonial.content}
            author={testimonial.author}
            role={testimonial.role}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
