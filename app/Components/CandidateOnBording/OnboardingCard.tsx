const OnboardingCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-5xl mx-4 sm:mx-auto shadow-lg p-4 sm:p-10 bg-white rounded-xl">
      {children}
    </div>
  );
};

export default OnboardingCard;
