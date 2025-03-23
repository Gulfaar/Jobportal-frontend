import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="bg-[#2E5F5C] text-white py-10 px-20 w-full  h-[300px] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
            {/* Company Info */}
            <div className="col-span-1 flex flex-col ">
              <Image src="/logo.png" alt="Gulfaar Logo" width={120} height={50} />
              <p className="mt-4 text-sm leading-relaxed">
                Tharakkandam Building, 1st Floor, Kurishupally Rd, Ravipuram, Perumanoor, Kochi, Kerala 682015
              </p>
            </div>
    
            {/* Company Links and Job Categories */}
            <div className="col-span-1 flex justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-3">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">Contact Us</Link></li>
                  <li><Link href="#">Our Global Presence</Link></li>
                  <li><Link href="#">Email</Link></li>
                  <li><Link href="#">Regulations</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Job Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#">Telecommunications</Link></li>
                  <li><Link href="#">Hotels & Tourism</Link></li>
                  <li><Link href="#">Construction</Link></li>
                  <li><Link href="#">Education</Link></li>
                  <li><Link href="#">Financial Services</Link></li>
                </ul>
              </div>
            </div>
    
            {/* Newsletter */}
            <div className="col-span-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
              <p className="text-sm mb-4">Eu nunc pretium vitae platea. Non netus elementum vulputate</p>
              <div className="flex flex-col space-y-2">
                <input type="email" placeholder="Email Address" className="p-2 rounded-lg text-white border border-amber-50 w-full" />
                <button className="bg-white text-[#2E5F5C] p-2 rounded-lg w-full">Subscribe Now</button>
              </div>
            </div>
          </div>
        </footer>
      );
    };


  export default Footer;