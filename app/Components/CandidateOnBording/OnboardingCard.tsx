const OnboardingCard = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-full max-w-3xl bg-[#f6fafa] shadow rounded-xl p-8">
        {children}
      </div>
    );
  };
  
  export default OnboardingCard;
  