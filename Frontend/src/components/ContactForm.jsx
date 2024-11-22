import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5r25imp", "template_kd8ybev", form.current, {
        publicKey: "jU-1FIjK-BxDlu-KT",
      })
      .then(
        () => {
          setStatus("success");
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          setStatus("error");
          console.error("Error sending message:", error.text);
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-16 px-5">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        <div className="flex-1 bg-white shadow-2xl rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We’d love to hear from you! Drop us a message and we’ll get back to you.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            {/* Full Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Enter your full name"
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            {/* Email Address */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Enter your email address"
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="from_phone"
                placeholder="Enter your phone number"
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="4"
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
              >
                Send Message
              </button>
            </div>

            {/* Status Message */}
            {status === "success" && (
              <p className="mt-4 text-green-600 text-center">Your message was sent successfully!</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
