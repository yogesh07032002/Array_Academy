import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { to: "/about", label: "About Us" },
        { to: "/contact", label: "Contact" },
        { to: "/internship", label: "Internships" },
        { to: "/career", label: "Careers" },
        { to: "/project", label: "Project Development" },
        { to: "/hiring", label: "Hire Developers" },
      ],
    },
    {
      title: "Courses",
      links: [
        { to: "/course#java", label: "Java Full Stack" },
        { to: "/course#python", label: "Python Full Stack" },
        { to: "/course#data-science", label: "Data Science" },
        { to: "/course#mern-mean", label: "MERN/MEAN" },
        { to: "/course#ai", label: "Artificial Intelligence" },
        { to: "/course#ml", label: "Machine Learning" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { to: "/privacy", label: "Privacy Policy" },
        { to: "/terms&conditons", label: "Terms of Service" },
        { to: "#blog", label: "Blog" },
        { to: "#support", label: "Support" },
      ],
    },
  ];

  const address = [
    {
      branch: "BRANCH 1",
      details: "Nirmal Plaza, Office No. 101, Dr. Babasaheb Ambedkar Rd, Near Bhumika Medical, Pune, Maharashtra 411058",
    },
    {
      branch: "BRANCH 2",
      details: "Office No:402, Highway Heights, Near RMD College, Warje-Pune 411058.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white pt-12 pb-6">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Top Section: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-yellow-500">{section.title}</h3>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.to}
                        className="text-gray-400 hover:text-white transition duration-300"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span className="mr-2">→</span> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Address Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-500">Address</h3>
              {address.map((branch, index) => (
                <div key={index}>
                  <p>
                    <b className="text-orange-500">{branch.branch}</b>
                    <br />
                    {branch.details}
                  </p>
                  <br />
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-4">
  <div className="w-full h-64 sm:h-72 md:h-96 lg:h-80">
    <iframe
      title="Pune Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.063053992115!2d73.81025111527484!3d18.52043028743938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c63fb55c09d9%3A0x61cd1fa004f5b80!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1633924573208!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</div>


          {/* Bottom Section: Copyright */}
          <div className="border-t border-gray-700 pt-6 mt-12 text-center">
            <p className="text-sm text-red-500">
              Copyright © {new Date().getFullYear()} - All rights reserved by ArrayLogic Softwares Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
