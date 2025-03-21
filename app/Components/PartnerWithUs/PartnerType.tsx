import { Globe, Settings, Smartphone, Handshake } from "lucide-react";

const PartnershipTypes = () => {
  const types = [
    { icon: <Globe size={32} />, title: "Country-Based" },
    { icon: <Smartphone size={32} />, title: "Utility & APP" },
    { icon: <Settings size={32} />, title: "Service-Based" },
    { icon: <Handshake size={32} />, title: "Strategic" },
  ];

  return (
    <section className="py-16 flex justify-center w-[80%] mx-auto">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {types.map((type, index) => (
          <div
            key={index}
            className="bg-[#ECF4F3] text-black flex items-center justify-center gap-4 p-6 h-24 rounded-lg shadow-md transition duration-300 hover:bg-[#B0D9D8]"
          >
            {type.icon}
            <p className="text-lg font-medium">{type.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnershipTypes;