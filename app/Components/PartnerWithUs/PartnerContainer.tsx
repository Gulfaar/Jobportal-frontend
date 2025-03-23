const PartnerWithGulfaar = () => {
    return (
      <section className="py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="max-w-lg text-left">
          <h2 className="text-2xl font-bold text-black">
            Partner with <span className="text-[#DA6B64]">Gulfaar</span>
          </h2>
          <p className="text-gray-700 mt-4">
            At <span className="text-[#DA6B64]">Gulfaar</span>, we believe in building strong partnerships that create mutual growth and long-term success.
          </p>
          
          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-[#DA6B64] text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-200 transition">Apply now</button>
            <button className="text-gray-700 px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition">Learn More</button>
          </div>
        </div>
        
        {/* Image Placeholder */}
        <div className="w-40 h-40 md:w-56 md:h-56 bg-black rounded-lg"></div>
      </section>
    );
  };
  
  export default PartnerWithGulfaar;
  