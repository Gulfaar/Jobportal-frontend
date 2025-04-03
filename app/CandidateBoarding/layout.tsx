import Header from '../Components/Header/Header'
import Footer from "../Components/Home/Footer";

export default function CandidateOnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title={'PROFILE'} subtitle={''} />
      <main className="flex-1 flex flex-col items-center justify-center ">
        {children}  {/* This will render step pages */}
      </main>
      <Footer />
    </div>
  );
}
