import React, { useRef, useState } from "react";

import { Helmet } from "react-helmet";
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
    <>

    <div className="max-w-screen-xl mx-auto py-12 px-2 md:px-4 mt-8">
      <h1 className="text-center text-xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Boost Your Career with IT Internships at ArrayLogic Academy – Top IT
        Courses Institute.
      </h1>
      <h2 className="text-center text-lg md:text-4xl font-bold md:mb-8 text-transparent bg-clip-text bg-black">
        Internship Opportunities
      </h2>
      <h2 className="text-center md:text-lg mb-6 text-black">
        Join our IT Internship programs in Java Full Stack, Python Full Stack,
        MERN Stack, Digital Marketing, Graphics and Video Editing, and more.
        Gain hands-on experience with the latest technologies, earn
        certification, and become job-ready with real-world skills!
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Internship Cards */}
        {[
          {
            title: "Java Full Stack",
            description:
              "Learn to develop end-to-end scalable applications with Java, Spring Boot, Hibernate, and Angular.",
            buttonColor: "bg-indigo-600",
            hoverColor: "hover:bg-indigo-700",
            certification: "Full Stack Development with Java",
          },
          {
            title: "Python Full Stack",
            description:
              "Master Python, Django, and React to create dynamic full-stack web applications.",
            buttonColor: "bg-green-600",
            hoverColor: "hover:bg-green-700",
            certification: "Full Stack Development with Python",
          },
          {
            title: "MERN Stack",
            description:
              "Gain expertise in MongoDB, Express, React, and Node.js to build modern web applications.",
            buttonColor: "bg-yellow-600",
            hoverColor: "hover:bg-yellow-700",
            certification: "MERN Stack Web Development",
          },
          {
            title: "MEAN Stack",
            description:
              "Learn Angular, Node.js, Express, and MongoDB to build powerful and dynamic web solutions.",
            buttonColor: "bg-red-600",
            hoverColor: "hover:bg-red-700",
            certification: "MEAN Stack Web Development",
          },
          {
            title: "Data Science",
            description:
              "Dive into data analysis, machine learning, and visualization using Python and R.",
            buttonColor: "bg-blue-600",
            hoverColor: "hover:bg-blue-700",
            certification: "Data Science Specialization",
          },
          {
            title: "Machine Learning",
            description:
              "Understand algorithms, build predictive models, and gain insights with hands-on projects.",
            buttonColor: "bg-orange-600",
            hoverColor: "hover:bg-orange-700",
            certification: "Machine Learning Certification",
          },
          {
            title: "Artificial Intelligence",
            description:
              "Explore AI concepts such as neural networks, NLP, and computer vision with practical applications.",
            buttonColor: "bg-purple-600",
            hoverColor: "hover:bg-purple-700",
            certification: "Artificial Intelligence Mastery",
          },
          {
            title: "Graphics Design",
            description:
              "Learn creative tools like Photoshop, Illustrator, and Figma to design stunning visuals.",
            buttonColor: "bg-pink-600",
            hoverColor: "hover:bg-pink-700",
            certification: "Graphics Design Professional",
          },
          {
            title: "Digital Marketing",
            description:
              "Become a digital marketing expert in SEO, SEM, social media, email marketing, and analytics.",
            buttonColor: "bg-teal-600",
            hoverColor: "hover:bg-teal-700",
            certification: "Digital Marketing Specialist",
          },
          {
            title: "WordPress Development",
            description:
              "Build customized websites with WordPress, including themes, plugins, and e-commerce integration.",
            buttonColor: "bg-gray-600",
            hoverColor: "hover:bg-gray-700",
            certification: "WordPress Development Certification",
          },
          {
            title: "Video Editing",
            description:
              "Learn video editing techniques using Premiere Pro, Final Cut Pro, and DaVinci Resolve.",
            buttonColor: "bg-cyan-600",
            hoverColor: "hover:bg-cyan-700",
            certification: "Professional Video Editing",
          },
          {
            title: "UI/UX Design",
            description:
              "Learn to create intuitive and visually appealing user interfaces with tools like Figma, Adobe XD, and Sketch.",
            buttonColor: "bg-violet-600",
            hoverColor: "hover:bg-violet-700",
            certification: "UI/UX Design Certification",
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
                <button
                  className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.scrollTo(0, 0)}
                >
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
      <div className="text-center mt-5 md:mt-16">
        <h3 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 md:mb-6">
          Certification Upon Completion
        </h3>
        <p className="text-lg text-black md:mb-8">
          Successful completion of the internship ensures you receive the
          following certifications:
        </p>
        <ul className="list-disc text-left max-w-lg mx-auto mb-8 text-black">
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
        <div className="p-5  bg-gray-100 rounded-lg shadow-md mt-5">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Key Benefits of Our IT Internship Programs:
          </h2>
          <h3 className="md:text-lg font-semibold text-black">
            <ul className="list-disc list-inside space-y-3 text-left">
              <li>
                <span className="font-bold">
                  Earn Industry-Recognized Nasscom Futureskills Prime
                  Certification:
                </span>{" "}
                Gain a prestigious certification that sets you apart in the IT
                industry.
              </li>
              <li>
                <span className="font-bold">
                  Work on Real-world, Hands-on Live Projects by Top Companies:
                </span>{" "}
                Get unparalleled experience through real-world scenarios crafted
                by leading IT companies.
              </li>
              <li>
                <span className="font-bold">
                  Flexible, Digital-First Learning Platform:
                </span>{" "}
                Learn at your convenience with our innovative online internship
                for IT students.
              </li>
              <li>
                <span className="font-bold">
                  Virtual Comprehensive Learning Journey:
                </span>{" "}
                Dive into an in-depth online internship experience that combines
                technical and practical skills.
              </li>
              <li>
                <span className="font-bold">
                  Personalized Mentorship from Industry Experts:
                </span>{" "}
                Receive one-on-one guidance from professionals leading the
                global IT industry.
              </li>
              <li>
                <span className="font-bold">
                  Build Your Portfolio & Boost Your Career:
                </span>{" "}
                Showcase your work to potential employers and increase your
                chances of landing your dream job.
              </li>
              <li>
                <span className="font-bold">
                  Boost Career Prospects with Cutting-Edge Skills:
                </span>{" "}
                Equip yourself with the skills demanded by top IT companies to
                stay ahead in your career.
              </li>
            </ul>
          </h3>

          <h4 className="md:text-2xl font-bold text-blue-500 mt-6">
            Additional Benefits:
          </h4>
          <ul className="list-disc list-inside space-y-3 text-black text-left mt-3">
            <li>
              <span className="font-bold">
                Skill Mapping and Career Roadmap:
              </span>{" "}
              Understand your strengths and create a personalized plan to
              achieve your career goals.
            </li>
            <li>
              <span className="font-bold">
                Peer Learning and Networking Opportunities:
              </span>{" "}
              Connect with fellow IT interns and industry professionals to
              expand your network.
            </li>
            <li>
              <span className="font-bold">Recognition and Opportunities:</span>{" "}
              Get recognized for your work and unlock opportunities for offline
              internships in IT companies or even international IT internships.
            </li>
          </ul>
        </div>
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
    </>
  );
};

export default Internships;
