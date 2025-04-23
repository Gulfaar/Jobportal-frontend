// Inside EditSection.tsx
const OnboardingCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full sm:max-w-5xl sm:mx-auto bg-white rounded-none sm:rounded-xl shadow-none sm:shadow-md p-5">
      <div className="p-2">{children}</div>
    </div>
  );
};

export default OnboardingCard;
