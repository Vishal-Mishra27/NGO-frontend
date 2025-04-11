import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function BecomeVolunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [],
    availability: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedInterests = checked
        ? [...formData.interests, value]
        : formData.interests.filter((interest) => interest !== value);
      setFormData((prev) => ({ ...prev, interests: updatedInterests }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    console.log("Form Data:", formData);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/vollenterRoute/vollenter/post",
        formData
      );
      Swal.fire({
        title: "Data submitted successfully",
        icon: "success",
        draggable: true,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        interests: [],
        availability: "",
        experience: "",
        message: "",
      });
    } catch (error) {
      console.log("error is:", error);
    }
  };

  const volunteerAreas = ["Child Education", "Nari Shakti", "Muft Bhojan"];

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-50 animate-gradient"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float-delay-2"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float-delay-4"></div>
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border-4 border-blue-100 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border-4 border-purple-100 rounded-full opacity-20 animate-spin-slow-reverse"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center p-6 py-16 z-10">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-2xl border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Join Our Volunteer Community
            </h2>
            <p className="text-gray-600">
              Make a difference in your community by becoming a volunteer
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Enter your full name"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Enter your email"
                  />
                </div>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Volunteer Preferences
              </h3>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Areas of Interest
                </label>
                <div className="md:grid grid-cols-1 md:grid-cols-3 gap-3">
                  {volunteerAreas.map((area) => (
                    <label key={area} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="interests"
                        value={area}
                        checked={formData.interests.includes(area)}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Availability
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both Weekdays and Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Previous Volunteer Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  rows="3"
                  placeholder="Tell us about your previous volunteer experience (if any)"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Why do you want to volunteer?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  rows="4"
                  placeholder="Share your motivation for volunteering"
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
              By submitting this form, you agree to our{" "}
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

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(20px);
          }
          66% {
            transform: translateY(20px) translateX(-20px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delay-2 {
          animation: float 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-delay-4 {
          animation: float 8s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow 20s linear infinite reverse;
        }

        .bg-grid {
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .bg-dots {
          background-image: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
}

export default BecomeVolunteer;
