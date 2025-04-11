import React from 'react'
import { useNavigate } from "react-router-dom";

export default function ChildEducation() {
    const navigate = useNavigate();
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section with Video Background */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <img
            src="https://satyarthi.org.in/wp-content/uploads/2021/09/girl-student_6139ecd847750.jpg"
            alt="Child Education"
            className="w-full h-full object-cover object-center brightness-50 transform scale-105 hover:scale-100 transition-transform duration-3000"
            style={{
              objectPosition: "50% 30%", // Adjust these values to position the image
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
            <div className="flex flex-col justify-center items-center text-white text-center px-6 h-full space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in-down">
                Empowering Future Generations
              </h1>
              <p className="mt-4 text-xl max-w-2xl animate-fade-in-up">
                Join us in our mission to provide quality education and create
                lasting change in the lives of underprivileged children.
              </p>
              <div className="flex space-x-4 mt-8">
                <button
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                  nav
                  onClick={() => navigate("/donate")}
                >
                  Donate Now
                </button>
                <button className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-full font-semibold backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-7xl mx-auto mt-16 p-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-4xl font-bold text-gray-800 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text ">
              Our Mission for Child Education
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                Every child deserves access to quality education regardless of
                their background. We believe education is the most powerful tool
                to break the cycle of poverty and create lasting positive change
                in communities worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our programs, we not only provide academic education but
                also focus on holistic development including nutrition, health
                care, and life skills training.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="max-w-7xl mx-auto mt-16 p-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-4">
                10,000+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Children Educated
              </h3>
              <p className="text-gray-600">
                Providing quality education across rural areas
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-4">
                500+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Schools Supported
              </h3>
              <p className="text-gray-600">
                Partnering with schools to improve facilities
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-4">1M+</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Meals Served
              </h3>
              <p className="text-gray-600">
                Ensuring proper nutrition for every child
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-4">
                100+
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Communities Reached
              </h3>
              <p className="text-gray-600">
                Creating lasting impact across regions
              </p>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="max-w-7xl mx-auto mt-16 p-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                  alt="Education Program"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Primary Education
                </h3>
                <p className="text-gray-600">
                  Providing fundamental education and learning materials to
                  young children.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
                  alt="Health Program"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Health & Nutrition
                </h3>
                <p className="text-gray-600">
                  Regular health check-ups and nutritious meal programs for
                  students.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  alt="Skills Program"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Life Skills Training
                </h3>
                <p className="text-gray-600">
                  Teaching practical skills and personal development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* sucess story */}
        <div className="max-w-7xl mx-auto mt-16 p-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img
                    src="https://satyarthi.org.in/wp-content/uploads/2021/09/girl-student_6139ecd847750.jpg"
                    alt="Student Success"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Priya's Journey
                  </h3>
                  <p className="text-gray-600 mb-4">
                    From a small village to becoming a software engineer,
                    Priya's story inspires many. Our education program helped
                    her achieve her dreams.
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img
                    src="https://satyarthi.org.in/wp-content/uploads/2021/09/girl-student_6139ecd847750.jpg"
                    alt="Student Success"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Rahul's Achievement
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Despite facing numerous challenges, Rahul persevered and is
                    now pursuing his medical degree to serve his community.
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 mt-16 py-16 px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Make a Difference Today</h3>
            <p className="text-xl mb-8">
              Your support can help us provide education and create
              opportunities for underprivileged children.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate("/donate")}
              >
                Donate Now
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>

        {/* Add animations */}
        <style jsx>{`
          @keyframes fade-in-down {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 1s ease-out;
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out;
          }
        `}</style>
      </div>
    </>
  );
}
