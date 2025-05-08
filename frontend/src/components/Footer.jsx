import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[#3D3D3D] text-sm">
          {/* About */}
          <div>
            <h3 className="text-[#1B2124] font-bold text-lg mb-4">
              Raju's Educational Academy
            </h3>
            <p className="leading-6">
              Empowering students across India with quality education and
              guidance to achieve their dreams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#1B2124] font-semibold text-base mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Important */}
          <div>
            <h4 className="text-[#1B2124] font-semibold text-base mb-3">
              Important
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[#1B2124] font-semibold text-base mb-3">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-75">
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="hover:opacity-75">
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="hover:opacity-75">
                <img
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" className="hover:opacity-75">
                <img
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Raju's Educational Academy. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
