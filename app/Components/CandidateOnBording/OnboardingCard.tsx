const OnboardingCard = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-full max-w-3xl shadow-lg p-6 sm:p-10  flex-1 sm:flex-none  bg-white  rounded-xl">
        {children}
      </div>
    );
  };
  
  export default OnboardingCard;
  