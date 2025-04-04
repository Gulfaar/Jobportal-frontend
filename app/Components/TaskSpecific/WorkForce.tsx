const WorkforceSolutions = () => {
  return (
    <section className="py-16 px-8 flex justify-center w-full bg-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="w-full md:w-[60%] text-left text-[#174A47] leading-[1.8]">
          <p className="text-[18px]">
            At Gulfaar, we provide task-specific experts across various industries, ensuring 
            businesses and individuals have access to pre-screened, highly skilled professionals 
            whenever needed. Whether you require drivers, construction workers, maintenance 
            technicians, or cleaning specialists, our AI-powered workforce platform connects 
            you with qualified experts instantly.
          </p>
          <p className="text-[18px] mt-4">
            With real-time hiring, automated workforce tracking, and seamless communication tools, 
            managing your workforce has never been easier. We take care of recruitment, background 
            verification, payroll, and compliance, allowing you to focus on productivity while we 
            handle the workforce.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[40%] flex justify-end">
          <img
            src="/images/Task-side.svg"
            alt="Workforce Solutions"
            className="w-[350px] h-auto rounded-lg shadow-md"
          />
        </div>
        
      </div>
    </section>
  );
};

export default WorkforceSolutions;
