import Header from '../Components/Header/Header'
import Footer from "../Components/Home/Footer";

export default function CandidateOnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-20 w-full max-w-full mx-auto">
        {children}  {/* This will render step pages */}
      </main>
      <Footer />
    </div>
  );
}
