import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BasicButton from "./BasicButton";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src="/static/rea_logo.png"
                alt="REA"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="lg:hidden text-2xl text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
          <nav className="hidden lg:flex items-center gap-6 relative">
            {/* Dropdown Trigger */}
            <div className="relative group">
              <button className="border border-[#3352cc] py-2 px-4 rounded-md flex items-center gap-2 text-[#3352cc] font-semibold text-base hover:bg-[#eef2ff] transition">
                Courses Offered
                <svg
                  className="w-4 h-4 text-[#3352cc]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 w-[280px] bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-20">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-[#f3f6ff] text-gray-800 cursor-pointer">
                    Primary Education (Class 1–5)
                  </li>
                  <li className="px-4 py-2 hover:bg-[#f3f6ff] text-gray-800 cursor-pointer">
                    Secondary Education (Class 6–10)
                    <div className="text-sm text-gray-500">
                      CBSE / ICSE / SSC
                    </div>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#f3f6ff] text-gray-800 cursor-pointer">
                    TS Intermediate & Class 11–12 CBSE/ICSE
                    <div className="text-sm text-gray-500">
                      MPC / MEC / BiPC
                    </div>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#f3f6ff] text-gray-800 cursor-pointer">
                    Competitive Exams
                    <div className="text-sm text-gray-500">
                      POLYCET / EAPCET (formerly EAMCET)
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Other Links */}
            {["about", "gallery", "career", "contact"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className="text-sm sm:text-base font-medium text-gray-700 hover:text-[#3352cc] hover:bg-[#f3f6ff] px-3 py-2 rounded transition-all duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <BasicButton text="Login / Register" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="lg:hidden bg-white border-t shadow-inner animate-slide-down transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col px-4 py-3 space-y-2">
            {/* Courses Dropdown */}
            <div>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-[#3352cc] px-3 py-2 rounded-md hover:bg-[#e8edff] transition-all"
              >
                <span>Courses Offered</span>
                <svg
                  className={`w-4 h-4 transform transition-transform text-[#3352cc] ${
                    isCoursesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isCoursesOpen && (
                <ul className="mt-2 ml-4 pl-3 border-l-[2px] border-[#3352cc] space-y-1 text-sm text-gray-800">
                  <li className="hover:bg-[#f0f4ff] rounded px-2 py-1">
                    Primary Education (Class 1–5)
                  </li>
                  <li className="hover:bg-[#f0f4ff] rounded px-2 py-1">
                    Secondary Education (Class 6–10)
                  </li>
                  <li className="hover:bg-[#f0f4ff] rounded px-2 py-1">
                    CBSE / ICSE / SSC Curriculums
                  </li>
                  <li className="hover:bg-[#f0f4ff] rounded px-2 py-1">
                    TS Intermediate / Class 11–12 MPC, MEC
                  </li>
                  <li className="hover:bg-[#f0f4ff] rounded px-2 py-1">
                    Competitive Exams – EAMCET, POLYCET
                  </li>
                </ul>
              )}
            </div>

            {/* Other Nav Links */}
            {["about", "gallery", "career", "contact"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-gray-700 hover:bg-[#f0f4ff] hover:text-[#3352cc] px-3 py-2 rounded transition-all"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

            {/* CTA Button */}
            <div className="pt-3 border-t">
              <BasicButton text="Login / Register" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
