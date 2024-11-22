import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Internships = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const form = useRef(); // Form reference

  // Function to handle email sending
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5r25imp", // Replace with your EmailJS service ID
        "template_xuov1bu", // Replace with your EmailJS template ID
        form.current,
        "jU-1FIjK-BxDlu-KT" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-4 mt-12">
      <h2 className="text-center text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Internship Opportunities
      </h2>
      <p className="text-center text-lg mb-12 text-gray-600">
        Join our hands-on internship programs and kickstart your career with
        real-world experience in the latest technologies. We offer certification
        and job-ready skills.
      </p>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Internship Cards */}
        {[
          {
            title: "Java Full Stack",
            description:
              "Gain practical experience by building scalable full-stack applications with Java technologies.",
            buttonColor: "bg-indigo-600",
            hoverColor: "hover:bg-indigo-700",
            certification: "Full Stack Development with Java",
          },
          {
            title: "Python Full Stack",
            description:
              "Master Python full-stack development with real-world projects and industry-relevant skills.",
            buttonColor: "bg-green-600",
            hoverColor: "hover:bg-green-700",
            certification: "Full Stack Development with Python",
          },
          {
            title: "MERN Stack",
            description:
              "Become a MERN Stack expert by building cutting-edge, real-time web applications.",
            buttonColor: "bg-yellow-600",
            hoverColor: "hover:bg-yellow-700",
            certification: "MERN Stack Web Development",
          },
        ].map((internship, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-xl shadow-xl max-w-sm w-full text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            <h3 className="text-3xl font-semibold text-white mb-6">
              {internship.title}
            </h3>
            <p className="text-white mb-6 text-lg">{internship.description}</p>
            <div className="flex justify-center gap-6 mb-6">
              <button
                className={`${internship.buttonColor} text-white py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${internship.hoverColor}`}
                onClick={() => setIsModalOpen(true)}
              >
                Apply Now
              </button>
              <Link to="/course">
             
                <button className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                 onClick={() => window.scrollTo(0, 0)} >

                  Learn More
                </button>
              </Link>
            </div>
            <p className="text-sm text-white">
              Certification: {internship.certification}
            </p>
          </div>
        ))}
      </div>

      {/* Certification Section */}
      <div className="text-center mt-16">
        <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-6">
          Certification Upon Completion
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Successful completion of the internship ensures you receive the
          following certifications:
        </p>
        <ul className="list-disc text-left max-w-lg mx-auto mb-8 text-gray-700">
          <li className="text-lg ml-6">1. Internship Completion Certificate</li>
          <li className="text-lg ml-6">
            2. Field-Specific Certificate (Java Full Stack, Python Full Stack,
            MERN Stack)
          </li>
          <li className="text-lg ml-6">
            3. Real-World Project Completion Certificate
          </li>
        </ul>
        <button
          className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          onClick={() => setIsModalOpen(true)}
        >
          Apply Now for Internships
        </button>
      </div>

      {/* Modal for Applying */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Internship Application
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-lg">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="resumeLink" className="block text-lg">
                  Resume Link (Google Drive, Dropbox, etc.)
                </label>
                <input
                  type="url"
                  id="resumeLink"
                  name="resume"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="e.g., https://drive.google.com/..."
                  required
                />
                <small className="text-gray-500">
                  Please upload your resume to Google Drive or Dropbox and paste
                  the shareable link here.
                </small>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-all duration-300"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internships;
