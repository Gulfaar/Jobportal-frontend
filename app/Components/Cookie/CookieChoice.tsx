import { ArrowRight } from "lucide-react";

const CookieChoices = () => {
  const choices = [
    {
      icon: "🍪",
      title: "Adjust Cookie Settings",
      description: "Modify your browser settings to control how cookies are stored and used.",
    },
    {
      icon: "✅",
      title: "Opt-Out of Targeted Ads",
      description: "Disable personalized ads through <strong>Google Ads, Facebook Ads,</strong> and <strong>other platforms</strong>.",
    },
    {
      icon: "🔒",
      title: "Enable Private Browsing",
      description: "Use incognito mode or privacy-focused browsers to reduce tracking.",
    },
  ];

  return (
    <section className="bg-[#2E5F5C] text-white py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-12 w-full rounded-none">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">Your Cookie Choices</h2>
          <p className="text-gray-200 mb-8">
            You have the right to control or disable cookies. You can:
          </p>
          
          {/* Options */}
          <div className="space-y-6" >
            {choices.map((choice, index) => (
              <div key={index} style={{ width: "150%" }} className="flex items-center justify-between bg-[#2A4D4A] p-6 rounded-xl border border-gray-300 cursor-pointer hover:bg-[#365F5C] transition w-full shadow-md">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{choice.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{choice.title}</h3>
                    <p className="text-sm text-gray-200" dangerouslySetInnerHTML={{ __html: choice.description }}></p>
                  </div>
                </div>
                <ArrowRight className="text-white" size={24} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Illustration */}
        <div className="flex justify-center h-[350px] w-full md:w-auto mt-20" >
          <img src="/Bg3.png" alt="Cookie Choices Illustration" className="max-w-md"style={{marginLeft: "40%"}} />
        </div>
      </div>
    </section>
  );
};

export default CookieChoices;
