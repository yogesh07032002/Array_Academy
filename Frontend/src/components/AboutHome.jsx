import React, { useCallback, useRef, useState } from "react";

import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const AboutHome = () => {
  const [showForm, setShowForm] = useState(false);
  const form = useRef();

  // Toggles the visibility of the form
  const handleFormToggle = useCallback(() => {
    setShowForm((prevState) => !prevState);
  }, []);

  // Handles email sending via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailjs || !form.current) {
      console.error("EmailJS configuration or form reference is missing.");
      return;
    }

    emailjs
      .sendForm("service_5r25imp", "template_kd8ybev", form.current, {
        publicKey: "jU-1FIjK-BxDlu-KT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowForm(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="max-w-screen-2xl container md:px-16 px-4 py-4">
      <h1 className="text-center font-extrabold text-xl md:text-3xl text-black mt-1 mb-1 md:mb-4">
        ArrayLogic Academy - Best IT Courses Institute
      </h1>
      <p className=" text-black">
        Welcome to ArrayLogic Academy, Pune's premier IT Training Institute and
        a pinnacle of excellence in software education. At ArrayLogic Academy,
        we go beyond traditional learning by offering a curriculum designed to
        empower individuals in today’s dynamic technological world. As a leading
        software training institute in Pune, India, we specialize in a variety
        of in-demand courses, including software testing (manual and automation
        testing), Python development, Java development, data science, cloud
        computing, UI/UX, Graphics Designing, Video Editing, Digital Marketing,
        SEO and more.
      </p>

      <div className="mt-5 text-center flex flex-row lg:flex-row lg:justify-center gap-2">
  {/* Join Us Now Button */}
  <Link>
    <button
      onClick={handleFormToggle}
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-1 md:px-8 md:py-3 lg:px-6 lg:py-3 rounded-full md:text-lg font-semibold transition-transform duration-300 hover:scale-105 transform shadow-lg ml-8"
    >
      Join Us Now
    </button>
  </Link>

  {/* Read More Button */}
  <Link to="/about">
    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-1 md:px-8 md:py-3 lg:px-6 lg:py-3 rounded-full md:text-lg font-semibold transition-transform duration-300 hover:scale-105 transform shadow-lg ">
      Read More
    </button>
  </Link>
</div>



      {showForm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          aria-hidden={!showForm}
        >
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            <button
              onClick={handleFormToggle}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
              aria-label="Close form"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Join Us
            </h2>
            <form ref={form} onSubmit={sendEmail}>
              {["Name", "Email", "Phone Number", "Message"].map(
                (field, idx) => (
                  <div className="mb-4" key={idx}>
                    <label
                      htmlFor={field.toLowerCase().replace(" ", "_")}
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      {field}
                    </label>
                    {field === "Message" ? (
                      <textarea
                        name="message"
                        id="message"
                        placeholder={`Your ${field}`}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    ) : (
                      <input
                        name={`from_${field.toLowerCase().replace(" ", "_")}`}
                        type={field === "Email" ? "email" : "text"}
                        id={field.toLowerCase().replace(" ", "_")}
                        placeholder={`Your ${field}`}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                )
              )}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutHome;
