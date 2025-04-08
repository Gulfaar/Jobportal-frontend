import PersonalSummary from "@/app/Components/CandidateOnBording/Step10"

const PersonalSummaryPage = () => {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-[#E6F2F2] w-[70%]">
              <div className="flex-1 flex flex-col items-center justify-center  w-full max-w-full mx-auto bg-gradient-to-b from-white to-[#E6F2F2]">
                <PersonalSummary />
              </div>
        </div>
    )
}

export default PersonalSummaryPage