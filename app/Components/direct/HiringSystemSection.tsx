import React from "react";

const HiringSystemSection: React.FC = () => {
  return (
    <section
      className="px-11 py-12 bg-teal-800 max-md:px-8 max-sm:px-5"
      aria-labelledby="hiring-system-title"
    >
      <h2
        id="hiring-system-title"
        className="mb-10 text-5xl font-semibold text-center text-white max-md:text-4xl max-sm:text-3xl"
      >
        How Our Modern System Simplifies Hiring
      </h2>
      <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-semibold text-white">
            Easier Candidate Communication with Modern Tools
          </h3>
          <ul className="flex flex-col gap-4 text-xl text-white">
            <li className="flex gap-3 items-center">
              <i className="ti ti-brand-whatsapp" aria-hidden="true" />
              <span>
                WhatsApp API Integration – Connect instantly with candidates via
                automated messages and quick responses.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <i className="ti ti-device-mobile" aria-hidden="true" />
              <span>
                Mobile App Notifications – Candidates receive instant updates on
                interview schedules and hiring progress.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <i className="ti ti-mail" aria-hidden="true" />
              <span>
                Automated SMS &amp; Email Alerts – No delays—our system sends
                real-time updates, interview reminders, and status
                notifications.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <i className="ti ti-messages" aria-hidden="true" />
              <span>
                In-App Messaging – Secure chat between employers and candidates
                for quick follow-ups and clarifications.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <i className="ti ti-video" aria-hidden="true" />
              <span>
                Voice &amp; Video Call Integration – Schedule and conduct live
                interviews seamlessly.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-semibold text-white">
            AI-Powered Candidate Screening
          </h3>
          <ul className="flex flex-col gap-4 text-xl text-white">
            <li className="flex gap-3 items-center">
              <i className="ti ti-search" aria-hidden="true" />
              <span>
                Our smart algorithm scans thousands of profiles in seconds,
                matching skills, experience, and job fit.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <i className="ti ti-adjustments" aria-hidden="true" />
              <span>
                AI dynamically adjusts candidate rankings based on job
                descriptions and requirements.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HiringSystemSection;
