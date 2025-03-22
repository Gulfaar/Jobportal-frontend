const WorkforceSolutions = () => {
    return (
      <section className="py-16 flex justify-center w-[80%] mx-auto">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left text-[#2E5F5C]">
            <p className="text-lg leading-relaxed">
              At Gulfaar, we provide <span className="bg-yellow-300 px-1">task</span>-specific experts across various industries, ensuring businesses and individuals have access to pre-screened, highly skilled professionals whenever needed. Whether you require drivers, construction workers, maintenance technicians, or cleaning specialists, our AI-powered workforce platform connects you with qualified experts instantly.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              With real-time hiring, automated workforce tracking, and seamless communication tools, managing your workforce has never been easier. We take care of recruitment, background verification, payroll, and compliance, allowing you to focus on productivity while we handle the workforce.
            </p>
          </div>
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/workforce.svg" alt="Workforce Solutions" className="w-96 h-auto" />
          </div>
        </div>
      </section>
    );
  };
  
  export default WorkforceSolutions;
  