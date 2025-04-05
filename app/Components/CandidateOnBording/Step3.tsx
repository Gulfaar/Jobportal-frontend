import Link from "next/link";

const WelcomeSection = () => {
    return (
      <section className="py-16 w-[80%] mx-auto flex items-center gap-12 bg-[#F5FAFA] rounded-lg p-8">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="/images/profile.svg"
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2E3A56] mb-4">Welcome, Amanda</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            You are currently an UI/UX Designer with experience gained through an internship at Zople Technologies. 
            Your skills in wireframing, prototyping, and proficiency in Figma highlight your strong foundation in UI/UX principles. 
            We will tailor your resume-building experience to emphasize your background in collaborative design practices 
            and your passion for creating intuitive user experiences.
          </p>
        </div>
        
       <div className="flex" >
       <Link href="/CandidateBoarding/Step4">
            <button className="bg-[#D67268] text-white px-6 py-3 rounded-lg shadow-md">
             Next
            </button>
          </Link>
        </div>
      </section>
    );
  };
  
  export default WelcomeSection;
  