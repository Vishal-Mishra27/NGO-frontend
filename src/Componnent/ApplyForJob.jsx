import React, { useState } from "react";
import axios from "axios"

const ApplyForJob = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const submitData = new FormData();
  submitData.append("name", formData.name);
  submitData.append("email", formData.email);
  submitData.append("phone", formData.phone);
  submitData.append("message", formData.message);
  submitData.append("profileImage", formData.resume); // 🧠 MUST match multer's field name!

  try {
    const res = await axios.post(
      "http://localhost:3000/api/jobroute/job/post", // ✅ make sure the route is correct
      submitData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("res of post: ", res);
    alert("Your application has been submitted successfully!");
    setFormData({ name: "", email: "", phone: "", resume: null, message: "" });
  } catch (error) {
    console.error("error is :", error);
  }
};


  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-gray-100 animate-gradient-slow"></div>

        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="absolute inset-0 bg-pattern opacity-20"></div>

        <div className="absolute left-1/4 top-1/4 w-32 h-32 border-8 border-blue-100 rounded-full animate-spin-slow opacity-20"></div>
        <div className="absolute right-1/4 bottom-1/4 w-32 h-32 border-8 border-indigo-100 rounded-full animate-spin-slow-reverse opacity-20"></div>

        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white rounded-full opacity-50 animate-float-particle-${i}`}
              style={{
                left: ` ${Math.random() * 100}%`,
                top: ` ${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center p-6 py-16 z-10">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Join Our Team
            </h2>
            <p className="text-gray-600">
              Take the next step in your career with us
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Personal Information
              </h3>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Application Details
              </h3>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Upload Resume
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors duration-200">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, DOCX up to 10MB
                    </p>

                    {/* 👇 This line shows the selected file name */}
                    {formData.resume && (
                      <p className="text-sm text-gray-600 mt-2">
                        Selected file:{" "}
                        <span className="font-medium">
                          {formData.resume.name}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Why do you want this job?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us why you're interested in this position and what you can bring to the team"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 font-semibold text-lg"
            >
              Submit Application
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              By submitting this application, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-100px) translateX(50px); }
        }

        .animate-gradient-slow {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow 15s linear infinite reverse;
        }

        .bg-pattern {
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .particle-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        ${[...Array(20)]
          .map(
            (_, i) => `
          .animate-float-particle-${i} {
            animation: float-particle ${
              5 + Math.random() * 5
            }s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
          }
        `
          )
          .join("")}
      `}</style>
    </>
  );
}
export default ApplyForJob;