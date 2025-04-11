import React from "react";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-30"></div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full p-8 shadow-lg rounded-lg bg-gray-800">
        {/* Contact Form */}
        <div className="p-6">
          <h2 className="text-3xl font-bold border-b-4 border-blue-500 pb-2 hover:bg-blue-600 transition duration-300">
            Contact Us
          </h2>
          <div className="h-1 bg-blue-500 my-4"></div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none hover:border-blue-500 transition duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none hover:border-blue-500 transition duration-300"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none hover:border-blue-500 transition duration-300"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-lg font-bold border-2 border-transparent hover:border-white"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="p-6 flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold border-b-4 border-purple-500 pb-2 hover:bg-purple-600 transition duration-300">
            NGO Company Name
          </h2>
          <h3 className="text-2xl font-semibold border-b-4 border-green-500 pb-2 hover:bg-green-600 transition duration-300">
            Get in Touch
          </h3>
          <div className="h-1 bg-purple-500 my-4"></div>
          <div className="grid grid-cols-1 gap-6 w-full">
            <div className="flex items-center space-x-4 border border-blue-500 p-4 rounded-lg hover:bg-blue-500 transition duration-300 w-full">
              <FaHome className="text-4xl text-blue-400" />
              <p className="text-lg">1234 Street, City, Country</p>
            </div>
            <div className="flex items-center space-x-4 border border-green-500 p-4 rounded-lg hover:bg-green-500 transition duration-300 w-full">
              <FaPhone className="text-4xl text-green-400" />
              <p className="text-lg">+123 456 7890</p>
            </div>
            <div className="flex items-center space-x-4 border border-red-500 p-4 rounded-lg hover:bg-red-500 transition duration-300 w-full">
              <FaEnvelope className="text-4xl text-red-400" />
              <p className="text-lg">contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
