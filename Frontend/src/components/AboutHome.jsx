import React, { useCallback, useRef, useState } from "react";

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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
      <h1 className="text-center font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mt-0 mb-4 animate__animated animate__fadeIn">
        About Us
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed tracking-wide space-y-4 animate__animated animate__fadeIn animate__delay-2s">
        Welcome to ArrayLogic Academy, your trusted partner in IT education and
        career development. We are committed to equipping students with the
        skills and confidence to excel in today’s competitive environment.
        <br />
        <br />
        Our diverse range of courses includes Java Full Stack, MERN, MEAN,
        Python Full Stack, Cloud Computing, Data Science, Machine Learning,
        Artificial Intelligence, AWS, Aptitude, CRT (Campus Recruitment
        Training), and English Speaking. With these programs, we ensure our
        learners are not only technically proficient but also equipped with
        essential soft skills to thrive in professional settings.
        <br />
        <br />
        Guided by expert trainers with years of real-world experience, we
        provide hands-on learning, live projects, and one-on-one mentorship to
        help you stand out. Whether you’re starting your career or seeking to
        upskill, ArrayLogic Academy is your gateway to a successful future.
        <br />
        <br />
        Join us and transform your potential into expertise while gaining the
        confidence to conquer challenges in the IT industry and beyond!
      </p>

      <div className="mt-8 text-center">
        <button
          onClick={handleFormToggle}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 transform"
        >
          Join Us Now
        </button>
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
              {["Name", "Email", "Phone Number", "Message"].map((field, idx) => (
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
              ))}
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
