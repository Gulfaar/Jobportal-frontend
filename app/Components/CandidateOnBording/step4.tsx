"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OnboardingCard from "./OnboardingCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { setPincode } from "@/app/redux/slices/resumeSlice";
import { useRouter } from "next/navigation";

interface Country {
  cca2: string;
  name: {
    common: string;
  };
}

const countriesList: Country[] = [
  { cca2: "AE", name: { common: "United Arab Emirates" } },
  { cca2: "US", name: { common: "United States" } },
  { cca2: "GB", name: { common: "United Kingdom" } },
  { cca2: "CA", name: { common: "Canada" } },
  { cca2: "AU", name: { common: "Australia" } },
  { cca2: "IN", name: { common: "India" } },
  { cca2: "FR", name: { common: "France" } },
  { cca2: "DE", name: { common: "Germany" } },
  { cca2: "IT", name: { common: "Italy" } },
  { cca2: "JP", name: { common: "Japan" } },
  { cca2: "CN", name: { common: "China" } },
  { cca2: "BR", name: { common: "Brazil" } },
  { cca2: "ZA", name: { common: "South Africa" } },
  { cca2: "MX", name: { common: "Mexico" } },
  { cca2: "RU", name: { common: "Russia" } },
  { cca2: "ES", name: { common: "Spain" } },
  { cca2: "NL", name: { common: "Netherlands" } },
  { cca2: "SE", name: { common: "Sweden" } },
  { cca2: "CH", name: { common: "Switzerland" } },
  { cca2: "SG", name: { common: "Singapore" } },
];

export default function ProfileForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [hydrated, setHydrated] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    city: "",
    country: "",
    nativeCountry: "",
    pincode: "",
    phone: "",
    email: "",
  });

  const [countries] = useState<Country[]>(countriesList);
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  const resumeData = useSelector((state: RootState) => state.resume.parsedData);
  const userNameRaw = resumeData?.structured_resume?.name || "Candidate";
  const userName = userNameRaw.replace(/\s+/g, " ").trim();
  const PhoneNumber = resumeData?.structured_resume?.phone || "No Phone Number";
  const userEmail = resumeData?.structured_resume?.email || "No Email";

  const parsedAt = useSelector((state: RootState) => state.resume.parsedAt);
  const country = useSelector((state: RootState) => state.resume.selectedCountry);

  useEffect(() => {
    setHydrated(true);
    if (parsedAt) {
      const date = new Date(parsedAt).toLocaleDateString("en-US", {
        weekday: "short",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      setFormattedDate(date);
    }
  }, [parsedAt]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    if (formData.pincode) {
      dispatch(setPincode(formData.pincode));
    }
    router.push("/CandidateBoarding/Step5");
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-3">
      <OnboardingCard>
        <div className="mb-6">
          <div className="bg-[#f6fafa] rounded-xl shadow-sm px-4 py-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4">
              <p className="text-sm text-gray-500 font-medium">
                Welcome, <span className="text-gray-800">{userName.split(" ")[0]}</span>
              </p>
              <p className="text-sm text-gray-400">
                {hydrated && formattedDate ? formattedDate : "No resume uploaded"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/profile.svg"
                    alt="User Profile"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-base font-medium text-gray-800">{userName.split(" ")[0]}</h2>
                  <p className="text-sm text-gray-500">{userEmail}</p>
                </div>
              </div>
              <button className="text-sm text-emerald-600 hover:text-emerald-700 border border-emerald-600 px-4 py-1.5 rounded-md">
                Change photo
              </button>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder={userName.split(" ")[0]}
                className="w-full px-3 py-2 placeholder-gray-500 text-black border rounded-md"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder={userName.split(" ")[1]}
                className="w-full px-3 py-2 placeholder-gray-500 text-black border rounded-md"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full px-3 py-2 placeholder-gray-500 text-black border rounded-md"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Current Country</label>
              <input
                type="text"
                name="country"
                placeholder={formData.country || country || ""}
                className="w-full px-3 py-2 placeholder-gray-500 text-black border rounded-md"
                value={formData.country || country || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Native Country</label>
              <select
                name="nativeCountry"
                className="w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md"
                value={formData.nativeCountry}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select country
                </option>
                {countries.map((country) => (
                  <option key={country.cca2} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Pincode</label>
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                className="w-full px-3 py-2 placeholder-gray-500 text-black border rounded-md"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder={PhoneNumber}
                className="w-full px-3 py-2 placeholder-gray-500 text-black border rounded-md"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder={userEmail}
                className="w-full px-3 py-2 placeholder-gray-500 text-black border rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 w-full p-5">
            <Link href="/CandidateBoarding/Step3" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border border-[#FF6F61] text-[#DA6B64] px-5 py-2 rounded-lg text-sm sm:text-base hover:bg-[#FFEBE8] transition">
                Back
              </button>
            </Link>
            <button
              type="button"
              onClick={handleContinue}
              className="w-full sm:w-auto bg-[#DA6B64] text-white px-5 py-2 rounded-lg text-sm sm:text-base hover:bg-[#c65751] transition"
            >
              Continue
            </button>
          </div>
        </form>
      </OnboardingCard>
    </div>
  );
}
