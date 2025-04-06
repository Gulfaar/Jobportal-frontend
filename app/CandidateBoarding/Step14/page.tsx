import ProfileSummary from "@/app/Components/CandidateOnBording/Step14"
import Header from "@/app/Components/Header/Header"

const ProfileSummaryPage = () => {
    return (
        <div className="flex flex-col min-h-screen ">
              <div className="flex-1 flex flex-col items-center justify-center  w-full max-w-full mx-auto ">
              
                <ProfileSummary />
              </div>
        </div>
    )
}

export default ProfileSummaryPage


