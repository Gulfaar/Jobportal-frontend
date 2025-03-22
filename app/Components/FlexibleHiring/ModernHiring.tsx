import { Briefcase, Video, LayoutDashboard, MessageSquare } from "lucide-react";

export default function ModernHiringSystem() {
  return (
    <section className="w-full bg-[#f9fbfd] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How Our Modern System Simplifies Hiring?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
            <div className="bg-[#eef4ff] p-3 rounded-full w-fit mx-auto">
              <Briefcase className="text-[#3f75ff]" />
            </div>
            <h3 className="font-semibold text-lg text-center">
              AI-Powered Talent Matching
            </h3>
            <p className="text-sm text-gray-600 text-center">
              Our intelligent system scans thousands of profiles to find the perfect match for your contract needs. AI analyzes skills, experience, and job fit to present the best candidates.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
            <div className="bg-[#eef4ff] p-3 rounded-full w-fit mx-auto">
              <Video className="text-[#3f75ff]" />
            </div>
            <h3 className="font-semibold text-lg text-center">
              AI-Driven Pre-Video Interviews
            </h3>
            <p className="text-sm text-gray-600 text-center">
              AI automatically interviews and assesses candidates, ensuring quality hires. Evaluates technical skills, soft skills, and job-specific knowledge.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
            <div className="bg-[#eef4ff] p-3 rounded-full w-fit mx-auto">
              <LayoutDashboard className="text-[#3f75ff]" />
            </div>
            <h3 className="font-semibold text-lg text-center">
              Real-Time Hiring Dashboard
            </h3>
            <p className="text-sm text-gray-600 text-center">
              Employers can track recruitment progress, review candidate profiles, and approve hires in real time. AI-generated candidate scoring provides insights into job compatibility.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
            <div className="bg-[#eef4ff] p-3 rounded-full w-fit mx-auto">
              <MessageSquare className="text-[#3f75ff]" />
            </div>
            <h3 className="font-semibold text-lg text-center">
              Instant Candidate Communication
            </h3>
            <p className="text-sm text-gray-600 text-center">
              WhatsApp API & SMS Notifications – Communicate directly with candidates instantly. Mobile App & In-App Messaging – Send job offers, interview schedules, and hiring updates.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 bg-white p-6 rounded-xl flex flex-col md:flex-row justify-center gap-4 items-center text-center md:text-left shadow-sm">
          <div className="flex items-center gap-2">
            <Briefcase className="text-[#3f75ff]" size={16} />
            <p className="text-sm text-gray-700">
              Hire as needed—scale your team up or down without long-term commitments.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-[#3f75ff]" size={16} />
            <p className="text-sm text-gray-700">
              Payroll, benefits & compliance handled by Gulfaar for contract-based employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
