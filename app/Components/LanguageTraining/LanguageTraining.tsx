import Image from "next/image";

const LanguageTraining = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-5 md:px-20 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Regional & Work-Specific Language
            <br />
            Training For Job Placement & Relocation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hospitality Card */}
          <div className="bg-[#E57373] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Hospitality & Customer Service Language
            </h3>
            <p className="text-lg max-sm:text-base max-sm:font-medium mb-6 opacity-90 text-center">
              English, French, Arabic, German
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Handling complaints and requests</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Customer interaction vocabulary</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Service industry terminology</span>
              </li>
            </ul>
          </div>

          {/* Healthcare Card */}
          <div className="bg-[#E57373] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Healthcare & Medical Language
            </h3>
            <p className="text-lg max-sm:text-base max-sm:font-medium mb-6 opacity-90 text-center">
              German for Nurses, English for Doctors, Medical French
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Medical terminology and procedures</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Patient communication</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Healthcare documentation</span>
              </li>
            </ul>
          </div>

          {/* Corporate Card */}
          <div className="bg-[#E57373] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Corporate & Business Language Skills
            </h3>
            <p className="text-lg max-sm:text-base max-sm:font-medium mb-6 opacity-90 text-center">
              Negotiation, Email Writing, Public Speaking
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Business negotiation techniques</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Professional correspondence</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Presentation and public speaking</span>
              </li>
            </ul>
          </div>

          {/* Construction Card */}
          <div className="bg-[#E57373] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Construction & Labor Industry Language
            </h3>
            <p className="text-lg max-sm:text-base max-sm:font-medium mb-6 opacity-90 text-center">
              Basic Arabic, German, English for Foreign Workers
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Safety instructions and procedures</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Construction terminology</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/langbulleticon.svg"
                  alt="Bullet icon"
                  height={20}
                  width={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>Basic workplace communication</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageTraining;