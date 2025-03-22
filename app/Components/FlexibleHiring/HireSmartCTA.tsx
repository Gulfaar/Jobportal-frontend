import { ArrowRight } from "lucide-react";

export default function HireSmarterCTA() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Hire Smarter, Work Better!
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          With Gulfaar&apos;s AI-powered flexible hiring solutions, you get the right talent, at the right time, with zero hassle. Whether you need temporary staff, project-based specialists, or long-term contract employees, we provide scalable, efficient, and cost-effective workforce solutions.
        </p>
        <button className="bg-[#2e615c] text-white flex items-center justify-center gap-2 px-6 py-3 rounded-md mx-auto">
          Let touch with us
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
