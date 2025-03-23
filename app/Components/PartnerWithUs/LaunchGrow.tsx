const LaunchAndGrow = () => {
    return (
      <section className="py-16 flex justify-center w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          {/* Image */}
          <div className="w-1/2 flex justify-center">
            <img src="/rocket.png" alt="Rocket Launch" className="w-64 h-auto" />
          </div>
          
          {/* Text Content */}
          <div className="w-1/2 text-[#D67268] text-center md:text-left">
            <h2 className="text-xl font-semibold mb-4">Launch & Grow</h2>
            <p className="text-lg">
              Start operating under the Gulfaar brand and grow your business with our resources!
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default LaunchAndGrow;
  