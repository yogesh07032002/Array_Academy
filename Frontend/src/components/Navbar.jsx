import React, { useEffect, useState } from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const element = document.documentElement;
    const body = document.body;

    if (theme === "dark") {
      element.classList.add("dark");
      body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0); // Change sticky state on scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Courses</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/why">Why Us</a>
      </li>
      <li>
        <a href="/internship">Internships</a>
      </li>
    </>
  );

  // const notesItems = [
  //   { href: "/notes/java", label: "Java" },
  //   { href: "/notes/python", label: "Python" },
  //   { href: "/notes/mern", label: "MERN" },
  //   { href: "/notes/cloud", label: "Cloud Computing" },
  //   { href: "/notes/datascience", label: "Data Science" },
  // ];

  const socialLinks = [
    {
      href: "https://www.facebook.com",
      icon: faFacebook,
      style: "text-blue-600 hover:text-blue-800",
    },
    {
      href: "https://www.twitter.com",
      icon: faTwitter,
      style: "text-blue-400 hover:text-blue-600",
    },
    {
      href: "https://www.linkedin.com",
      icon: faLinkedin,
      style: "text-blue-500 hover:text-blue-700",
    },
    {
      href: "https://www.instagram.com",
      icon: faInstagram,
      style: "text-pink-500 hover:text-pink-700",
    },
  ];

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "bg-black text-white shadow-md duration-300 transition-all ease-in-out"
          : "bg-white dark:bg-slate-900 text-black dark:text-white"
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              className={`menu menu-sm dropdown-content text-black bg-white mt-0 w-52 p-3 shadow ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
              style={{
                width: "50%", // 50% width for mobile view
                height: "100vh", // Full height for mobile view
                position: "fixed",
                top: 0,
                left: 0,
                backgroundColor: "black", // Change background to black for mobile
                color: "white", // Change text color to white for mobile
                paddingTop: "30%", // Adjust to move items down
                display: "flex", // Use flex to align items
                flexDirection: "column", // Stack items vertically
                justifyContent: "flex-start", // Align items to the top
                gap: "20px", 
               fontWeight: "bold"
              }}
            >
              {navItems}
              {/* Notes Button for Mobile */}
              <li>
                <button
                  onClick={() => setIsNotesOpen((prev) => !prev)}
                  className="text-orange-500 pr-2 md:pr-5 font-bold text-xl md:text-xl md:px-4 md:py-2 rounded-md duration-300"
                >
                  Notes
                </button>
                {isNotesOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg w-48 rounded-lg z-[9999]">
                    {notesItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="px-4 py-2 block hover:bg-gray-100"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              
              {/* Social Media Icons for Mobile */}
              <div className="flex space-x-3 mt-24 pt-60 ">
                
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.style} text-2xl ml-5    `}
        
                  >
                    <FontAwesomeIcon icon={link.icon} />
                  </a>
                ))}
              </div>
            </ul>
          </div>
          <a className="hidden sm:block md:text-xl font-bold cursor-pointer">
            ArrayLogic Academy
          </a>
        </div>

        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
          </div>

          {/* Notes Dropdown for Desktop */}
          <div className="relative">
            <button
              onClick={() => setIsNotesOpen((prev) => !prev)}
              className="text-orange-500 hidden sm:block pr-2 md:pr-5 font-bold text-xl md:text-xl md:px-4 md:py-2 rounded-md duration-300"
            >
              Notes
            </button>
            {isNotesOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg w-48 rounded-lg z-[9999]">
                {notesItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="px-4 py-2 block hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Social Media Icons for Desktop */}
          <div className="flex space-x-3 pr-24 md:pr-5 ">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.style} duration-300 text-sm md:text-xl`}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>

          {/* Connect Button */}
          <a
            className="bg-orange-500 text-white text-sm px-2 py-1 rounded-md hover:bg-slate-800 duration-300 cursor-pointer absolute right-5 top-5"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=8669747823"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
