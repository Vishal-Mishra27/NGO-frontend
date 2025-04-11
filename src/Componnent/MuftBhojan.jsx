import React from "react";
import { useNavigate } from "react-router-dom";

export default function MuftBhojan() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <img
          src="https://www.bhojanbanksevasamiti.com/bhojanbank/327264992_553255756826676_581646690817826425_n.jpg"
          alt="Muft Bhojan - Free Meal Program"
          className="w-full h-full object-fit brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl font-bold">No One Should Sleep Hungry</h1>
          <p className="mt-2 text-lg max-w-lg">
            Join us in our mission to provide free, nutritious meals to the
            needy.
          </p>
          <button
            className="mt-4 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg font-semibold"
            onClick={() => navigate("/donate")}
          >
            Donate a Meal
          </button>
        </div>
      </div>

      {/* Why Free Meals Matter */}
      <div className="max-w-5xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Why Free Meals Matter
        </h2>
        <p className="mt-4 text-gray-600 text-center">
          Hunger is a major challenge for many underprivileged individuals and
          families. Our Muft Bhojan initiative ensures that no one goes to bed
          on an empty stomach. We provide free, nutritious meals daily to the
          homeless, elderly, and children in need.
        </p>
      </div>

      {/* Impact Section */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6 p-6">
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-800">
            50,000+ Meals Served
          </h3>
          <p className="text-gray-700 mt-2">
            Providing daily meals to those in need.
          </p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-yellow-800">
            100+ Feeding Centers
          </h3>
          <p className="text-gray-700 mt-2">
            Our centers serve food in various cities and villages.
          </p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-red-800">
            Thousands of Volunteers
          </h3>
          <p className="text-gray-700 mt-2">
            People like you help us make a difference every day.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-700">
          Be a Helping Hand
        </h3>
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
          onClick={() => navigate("/volunteer")}
        >
          Volunteer with Us
        </button>
      </div>

      {/* How We Work Section */}
      <div className="max-w-6xl mx-auto mt-16 p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How We Make It Happen
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20h2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Collection</h3>
            <p className="text-gray-600">
              We collect food donations and resources from generous donors and
              partners
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Preparation
            </h3>
            <p className="text-gray-600">
              Our team prepares fresh, nutritious meals in hygienic conditions
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Distribution
            </h3>
            <p className="text-gray-600">
              We distribute meals through our network of feeding centers
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Impact</h3>
            <p className="text-gray-600">
              Creating positive change in communities through food security
            </p>
          </div>
        </div>
      </div>

      {/* Featured Programs */}
      <div className="bg-gray-100 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Food Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
                  alt="Daily Meals"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  Daily Meals
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Providing nutritious meals twice a day to those in need
                  through our feeding centers.
                </p>
                <button className="mt-4 text-green-600 font-semibold hover:text-green-700 flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
                  alt="School Meals"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  School Meals
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Supporting education by providing meals to underprivileged
                  students in schools.
                </p>
                <button className="mt-4 text-green-600 font-semibold hover:text-green-700 flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                  alt="Emergency Relief"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                  Emergency Relief
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Providing immediate food assistance during natural disasters
                  and emergencies.
                </p>
                <button className="mt-4 text-green-600 font-semibold hover:text-green-700 flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto mt-16 p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Voices from the Community
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 italic text-lg">
                "The daily meals provided by Muft Bhojan have been a blessing
                for our family. During tough times, knowing that we'll have at
                least one nutritious meal a day gives us hope and strength to
                keep moving forward."
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                alt="Testimonial"
                className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Meera Devi</h4>
                <p className="text-gray-600 text-sm">Local Resident</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 italic text-lg">
                "As a volunteer, seeing the smiles on people's faces when they
                receive a warm meal is priceless. This program is not just about
                food; it's about dignity and compassion."
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="Testimonial"
                className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Rajesh Kumar</h4>
                <p className="text-gray-600 text-sm">Regular Volunteer</p>
              </div>
            </div>
          </div>

          {/* <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 italic text-lg">
                "The school meal program has significantly improved attendance in our school. 
                Children are more focused and energetic, which has positively impacted their 
                academic performance."
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                alt="Testimonial"
                className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                <p className="text-gray-600 text-sm">School Principal</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
            </div>
            <div className="mb-6">
              <p className="text-gray-600 italic text-lg">
                "As a local business owner, supporting Muft Bhojan has been one of our best 
                decisions. Seeing our community thrive and knowing we're part of this change 
                is incredibly fulfilling."
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Testimonial"
                className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Amit Patel</h4>
                <p className="text-gray-600 text-sm">Local Donor</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-300">
            View More Stories
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Ways to Get Involved
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Your financial contribution helps us serve more meals to those
                in need. Every donation makes a difference.
              </p>
              <button
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
                onClick={() => navigate("/donate")}
              >
                Donate Now
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Volunteer
              </h3>
              <p className="text-gray-600 mb-6">
                Join our team of dedicated volunteers. Help us prepare and serve
                meals to those in need.
              </p>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                onClick={() => navigate("/volunteer")}
              >
                Join Us
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Spread the Word
              </h3>
              <p className="text-gray-600 mb-6">
                Help us reach more people by sharing our mission with your
                network and community.
              </p>
              <button
                className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300"
                onClick={()=>navigate("/contact")}
              >
                Share Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="max-w-6xl mx-auto mt-16 p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Upcoming Event */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433"
                alt="Food Distribution"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                Upcoming
              </div>
            </div>
            <div className="p-6">
              <div className="text-green-600 text-sm font-semibold mb-2">
                March 25, 2024
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Mass Food Distribution Drive
              </h3>
              <p className="text-gray-600 mb-4">
                Join us for our monthly food distribution drive at multiple
                locations across the city. We aim to serve 1000+ people.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Location: City Center
                </span>
                <button className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                  Register Now
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Completed Event */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
                alt="Completed Event"
                className="w-full h-48 object-cover brightness-90"
              />
              <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
                Completed
              </div>
            </div>
            <div className="p-6">
              <div className="text-gray-600 text-sm font-semibold mb-2">
                February 15, 2024
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Winter Food Distribution
              </h3>
              <p className="text-gray-600 mb-4">
                Successfully served warm meals to 2000+ people during our winter
                campaign. Distributed blankets and warm clothes as well.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Impact: 2000+ people
                </span>
                <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                  View Gallery
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Ongoing School Program */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
                alt="School Program"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                Ongoing
              </div>
            </div>
            <div className="p-6">
              <div className="text-yellow-600 text-sm font-semibold mb-2">
                Current Program
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                School Nutrition Program
              </h3>
              <p className="text-gray-600 mb-4">
                Providing daily nutritious meals to 500+ students at Government
                School, ensuring better education through proper nutrition.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Location: Govt. School, Sector 12
                </span>
                <button className="text-yellow-600 font-semibold hover:text-yellow-700 flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Events Summary */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-gray-600">Upcoming Event</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-600">15+</div>
            <div className="text-gray-600">Completed Events</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <div className="text-gray-600">Ongoing Programs</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center mx-auto">
            View All Events
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 mt-16 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Mission
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter to receive updates about our
            initiatives, events, and success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
            />
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
    </div>
  );
}
