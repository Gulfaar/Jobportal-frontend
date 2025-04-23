// Inside EditSection.tsx
const OnboardingCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full sm:max-w-2xl sm:mx-auto bg-white rounded-none sm:rounded-xl shadow-none sm:shadow-md">
      <div className="px-4 py-6 sm:p-10">{children}</div>
    </div>
  );
};

export default OnboardingCard;
