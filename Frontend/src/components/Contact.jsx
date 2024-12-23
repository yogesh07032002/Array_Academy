import React, { useRef } from "react";

import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5r25imp", // Your EmailJS service ID
        "template_kd8ybev", // Your EmailJS template ID
        form.current,
        "jU-1FIjK-BxDlu-KT" // Your EmailJS public key
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
    <Helmet>
  <title>Contact Us | ArrayLogic Academy - Leading IT Training Institute in Pune</title>
  <meta name="description" content="Get in touch with ArrayLogic Academy, the top IT training institute in Pune. For inquiries about our IT courses, internships, placement support, or to learn more about our offerings in Java, MERN, Python, Data Science, and more, contact us today. Our team is here to assist you with all your questions and career development needs." />
  <meta name="keywords" content="Contact ArrayLogic Academy, IT training institute Pune, contact IT training, Java courses Pune, MERN Stack courses, Data Science courses, Python Full Stack, AI training Pune, Cloud Computing courses, career support, software development courses, placement support Pune, internship programs Pune, best IT institute Pune, contact for training inquiries" />
</Helmet>

      <Navbar />
      <div className="flex min-h-screen items-center justify-center w-full px-4 bg-black text-gray-200 mt-16">
        <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 p-8 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white ">Get in Touch</h2>
            <p className="mt-4 text-gray-400">
              Reach out to us through the contact form or connect with us on
              social media. We'd love to hear from you!
            </p>
            <div className="mt-6">
              <p className="font-semibold text-gray-200">Contact Number:</p>
              <p className="text-lg text-gray-400">+91 8669747823</p>
            </div>
            <div className="mt-6">
              <p className="font-semibold text-gray-200">Follow Us:</p>
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61569193050354"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600"
                  title="Twitter"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/arraylogic_academy/?igsh=cXNqcWp5b25mcXpr"
                  target="_blank"
                  className="text-pink-500 hover:text-pink-700"
                  title="Instagram"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/arraylogic-academy/about/?viewAsMember=true"
                  target="_blank"
                  className="text-blue-700 hover:text-blue-900"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 p-8 bg-gray-800 rounded-lg shadow-lg">
            <Link
              to="/"
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110"
              title="Close"
            >
              ✕
            </Link>
            <h2 className="text-2xl font-bold text-center text-white">
              Contact Us
            </h2>
            <p className="text-sm text-center text-gray-400 mb-6">
              We’d love to hear from you! Fill out the form below and we’ll get
              back to you soon.
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="from_phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;
