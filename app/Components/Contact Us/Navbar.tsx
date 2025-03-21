import Image from "next/image";
import Link from "next/link";

    const Navbar = () => {
        return (
          <nav className="flex justify-between items-center p-4 bg bg-[#2E5F5C]  fixed w-full z-10 ">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/logo.png" alt="Gulfaar Logo" width={120} height={50} priority />
            </div>
      
            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-6 text-white">
              <li><Link href="/jobs" className="text-yellow-400">Jobs</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/training">Training</Link></li>
              <li><Link href="/workforce-solutions">Work-Force Solutions</Link></li>
              <li><Link href="/partner">Partner with us</Link></li>
            </ul>
      
            {/* Buttons */}
            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 border border-white text-white rounded-lg">Jobseeker</button>
              <button className="px-4 py-2 bg-green-700 text-white rounded-lg">Employer</button>
              <button className="px-4 py-2 bg-green-700 text-white rounded-lg">Post Job</button>
            </div>
          </nav>
        );
      };

export default Navbar;