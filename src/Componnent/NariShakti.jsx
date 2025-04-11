import React from 'react'

export default function NariShakti() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <img
          src="https://sabrangindia.in//sites/default/files/empower_620.jpg"
          alt="Women's Empowerment"
          className="w-full h-full object-cover object-center brightness-50 transform scale-105 hover:scale-100 transition-transform duration-3000"
          style={{
            objectPosition: "50% 30%", // Adjust these values to position the image
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl font-bold">Empower Women, Empower Society</h1>
          <p className="mt-2 text-lg max-w-lg">
            Join us in creating opportunities for women through education, skill
            development, and support.
          </p>
          <button className="mt-4 bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg font-semibold">
            Support the Cause
          </button>
        </div>
      </div>

      {/* Why Women's Empowerment Matters */}
      <div className="max-w-5xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Why Women's Empowerment Matters
        </h2>
        <p className="mt-4 text-gray-600 text-center">
          Women’s empowerment is key to a prosperous society. When women are
          educated, skilled, and financially independent, entire communities
          thrive. Our NGO focuses on education, skill training, and
          entrepreneurship programs to uplift women from all backgrounds.
        </p>
      </div>

      {/* Impact Section */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-6 p-6">
        <div className="bg-pink-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-pink-800">
            5,000+ Women Educated
          </h3>
          <p className="text-gray-700 mt-2">
            Providing literacy and vocational training to women in need.
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-purple-800">
            1,200+ Businesses Started
          </h3>
          <p className="text-gray-700 mt-2">
            Helping women become financially independent through
            entrepreneurship.
          </p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-yellow-800">
            15,000+ Lives Impacted
          </h3>
          <p className="text-gray-700 mt-2">
            Our initiatives have positively changed thousands of families.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-700">
          Be Part of the Change
        </h3>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
          Donate to Empower Women
        </button>
      </div>

      {/* Success Stories Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-16 p-6">
        {/* Success Story 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col md:flex-row min-h-[300px]">
            <div className="md:w-2/5 relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
                alt="Success Story"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col justify-center">
              <span className="text-pink-600 font-semibold">
                Entrepreneurship Success
              </span>
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Meera's Journey
              </h3>
              <p className="text-gray-600 mt-2">
                From a homemaker to a successful business owner, Meera's story
                exemplifies the power of determination and proper support...
              </p>
              <button className="mt-4 text-pink-600 font-semibold hover:text-pink-700 flex items-center group">
                Read Full Story
                <svg
                  className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
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

        {/* Success Story 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col md:flex-row min-h-[300px]">
            <div className="md:w-2/5 relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1594708767771-a7502209ff51"
                alt="Success Story"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col justify-center">
              <span className="text-pink-600 font-semibold">
                Education Achievement
              </span>
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                Zara's Story
              </h3>
              <p className="text-gray-600 mt-2">
                Breaking barriers in education, Zara became the first graduate
                in her village and now inspires other girls...
              </p>
              <button className="mt-4 text-pink-600 font-semibold hover:text-pink-700 flex items-center group">
                Read Full Story
                <svg
                  className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
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

      {/* Our Programs Section */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Empowerment Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Skill Development
              </h3>
              <p className="text-gray-600">
                Comprehensive training programs in various skills including
                digital literacy, crafts, and professional development.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Computer Training
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Handicraft Skills
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Business Management
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Financial Literacy
              </h3>
              <p className="text-gray-600">
                Empowering women with knowledge about financial management,
                savings, and investment.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Basic Banking
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Investment Planning
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Microfinance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Health and Wellness
              </h3>
              <p className="text-gray-600">
                Promoting women's health and well-being through regular
                check-ups, nutrition education, and mental health support.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Regular Check-ups
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Nutrition Education
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Mental Health Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="max-w-6xl mx-auto mt-16 p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Upcoming Events & Workshops
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2"
                alt="Workshop"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                Coming Soon
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-pink-600 mb-2">March 15, 2024</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Digital Marketing Workshop
              </h3>
              <p className="text-gray-600 mb-4">
                Learn essential digital marketing skills to grow your business
                online.
              </p>
              <button className="text-pink-600 font-semibold hover:text-pink-700 flex items-center">
                Register Now
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc"
                alt="Workshop"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                Featured
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-purple-600 mb-2">March 20, 2024</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Financial Planning Seminar
              </h3>
              <p className="text-gray-600 mb-4">
                Expert guidance on personal finance management and investment
                strategies.
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center">
                Register Now
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Workshop"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                Limited Seats
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-yellow-600 mb-2">March 25, 2024</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Leadership Development
              </h3>
              <p className="text-gray-600 mb-4">
                Develop essential leadership skills for professional growth.
              </p>
              <button className="text-yellow-600 font-semibold hover:text-yellow-700 flex items-center">
                Register Now
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Voices of Empowerment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM4 9.5a5 5 0 117.876 4.087l3.917 3.917a1 1 0 11-1.414 1.414l-3.917-3.917A5 5 0 014 9.5z" />
                </svg>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 italic">
                  "The financial literacy program changed my life. I now run my
                  own successful business and can provide for my family."
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                  <p className="text-gray-600 text-sm">Small Business Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM4 9.5a5 5 0 117.876 4.087l3.917 3.917a1 1 0 11-1.414 1.414l-3.917-3.917A5 5 0 014 9.5z" />
                </svg>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 italic">
                  "The digital skills training opened new opportunities for me.
                  I now work remotely and earn a steady income."
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Anjali Patel</h4>
                  <p className="text-gray-600 text-sm">Digital Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto mt-16 p-6">
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Connected with Our Community
            </h3>
            <p className="text-white/90 mb-8">
              Subscribe to our newsletter for updates on programs, events, and
              success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 flex-1 max-w-md"
              />
              <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-6xl mx-auto mt-16 p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Partners & Supporters
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Partner 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                alt="Google"
                className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-semibold text-gray-700">
                Technology Partner
              </h3>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/UNDP_logo.svg/1200px-UNDP_logo.svg.png"
                alt="UNDP"
                className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-semibold text-gray-700">
                Development Partner
              </h3>
            </div>
          </div>

          {/* Partner 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/UNESCO_logo.svg/2560px-UNESCO_logo.svg.png"
                alt="UNESCO"
                className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-semibold text-gray-700">Education Partner</h3>
            </div>
          </div>

          {/* Partner 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/UNICEF_logo.svg/2560px-UNICEF_logo.svg.png"
                alt="UNICEF"
                className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-semibold text-gray-700">
                Child Welfare Partner
              </h3>
            </div>
          </div>
        </div>

        {/* Featured Corporate Partners */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Corporate Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Corporate Partner 1 */}
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png"
                  alt="IBM"
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-sm text-gray-600 mt-2">
                Skills Development
              </span>
            </div>

            {/* Corporate Partner 2 */}
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
                  alt="Amazon"
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-sm text-gray-600 mt-2">
                Employment Partner
              </span>
            </div>

            {/* Corporate Partner 3 */}
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png"
                  alt="Microsoft"
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-sm text-gray-600 mt-2">
                Digital Literacy
              </span>
            </div>

            {/* Corporate Partner 4 */}
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Goldman_Sachs.svg/2560px-Goldman_Sachs.svg.png"
                  alt="Goldman Sachs"
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-sm text-gray-600 mt-2">
                Financial Support
              </span>
            </div>
          </div>
        </div>

        {/* Partnership Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Become a Partner
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our mission to empower women and create positive change in
            society. Partner with us to make a lasting impact.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
}
