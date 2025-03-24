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
    <section
  className="flex flex-col items-center mt-6 px-6 py-16 w-full text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/Testimonial.png')" }}
>
  <h2 className="text-3xl font-bold">Testimonials from Our Customers</h2>
  <p className="mt-4 text-lg text-gray-700 max-w-2xl">
    Exceptional service and professionalism! The team understood our needs
    perfectly and delivered beyond our expectations.
  </p>
  <div className="flex flex-wrap gap-6 justify-center mt-10">
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} {...testimonial} />
    ))}
  </div>
</section>

  );
};

export default TestimonialsSection;
