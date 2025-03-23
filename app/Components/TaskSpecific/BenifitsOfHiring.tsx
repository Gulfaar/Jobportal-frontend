import { HardHat, Wrench, Brush, Truck, ShoppingBag, Stethoscope } from "lucide-react";

const BenefitsOfHiring = () => {
    const benefits = [
      {
        title: "Construction & Infrastructure Companies",
        description: "Access skilled site workers and certified technicians.",
        icon: <HardHat size={24} className="text-blue-500" />
      },
      {
        title: "Facility Management Services",
        description: "Hire electricians, HVAC specialists, and maintenance experts.",
        icon: <Wrench size={24} className="text-blue-500" />
      },
      {
        title: "Hospitality & Residential Cleaning",
        description: "Get professional cleaners for homes, hotels, and corporate spaces.",
        icon: <Brush size={24} className="text-blue-500" />
      },
      {
        title: "Logistics & Transportation Firms",
        description: "Hire on-demand drivers for deliveries and passenger transport.",
        icon: <Truck size={24} className="text-blue-500" />
      },
      {
        title: "Retail & E-Commerce Businesses",
        description: "Get trained warehouse and delivery personnel instantly.",
        icon: <ShoppingBag size={24} className="text-blue-500" />
      },
      {
        title: "Healthcare & Industrial Facilities",
        description: "Access sanitization and deep-cleaning professionals.",
        icon: <Stethoscope size={24} className="text-blue-500" />
      }
    ];
  
    return (
      <section className="py-16 px-6 flex justify-center w-full bg-gradient-to-b from-[#ECF4F3] to-white relative">
        <div className="max-w-6xl w-full relative">
          <h2 className="text-center text-2xl font-bold text-[#1E3A56] mb-12">Who Benefits From Our On-Demand Skilled Professionals?</h2>
          
          <div className="grid grid-cols-1 gap-8 relative">
            <div className="absolute right-10 top-16 w-40 h-auto">
              <img src="/images/chart1.svg" alt="Analytics Chart" className="w-full h-auto" />
            </div>
            <div className="absolute right-10 bottom-12 w-40 h-auto">
              <img src="/images/chart2.svg" alt="Performance Chart" className="w-full h-auto" />
            </div>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border-b-2 border-gray-300 max-w-3xl">
                <div className="bg-blue-100 p-3 rounded-full shadow-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E3A56]">{benefit.title}</h3>
                  <p className="text-gray-700 mt-1">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BenefitsOfHiring;