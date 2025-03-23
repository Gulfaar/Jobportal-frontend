import { Briefcase, Home, Search, GraduationCap, Coins, Handshake } from "lucide-react";

const PartnershipOptions = () => {
  const options = [
    { icon: <Briefcase size={32} />, title: "Entrepreneur" },
    { icon: <Home size={32} />, title: "Business owner" },
    { icon: <Search size={32} />, title: "Recruitment agency" },
    { icon: <GraduationCap size={32} />, title: "Training institute" },
    { icon: <Coins size={32} />, title: "Investor" },
    { icon: <Handshake size={32} />, title: "Partnership" },
  ];

  return (
    <section className="bg-[#94A8A7] py-16 px-6 flex justify-center rounded-3xl"style={{width: "80%"}}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-[#2E5F5C] text-white flex flex-col items-center justify-center p-6 rounded-lg shadow-md space-y-2 transition duration-300 hover:bg-[#EBF5F4] hover:text-black"
          >
            <span className="transition duration-300 hover:text-black">{option.icon}</span>
            <p className="text-lg font-medium transition duration-300 hover:text-black">{option.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnershipOptions;
