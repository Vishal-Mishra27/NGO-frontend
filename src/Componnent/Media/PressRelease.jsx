import React from "react";

export default function PressRelease() {
 const pressReleases = [
   {
     title: "NGO Distributes 10,000 Free Meals in Rural Areas",
     date: "March 20, 2025",
     description:
       "Our organization successfully provided nutritious meals to underprivileged communities, ensuring no one sleeps hungry.",
     image:
       "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
     category: "Food Distribution",
     readTime: "3 min read",
   },
   {
     title: "Women Empowerment Initiative Helps 5,000 Women Start Businesses",
     date: "February 15, 2025",
     description:
       "Through our Nari Shakti program, thousands of women have received skill training and financial assistance to become self-sufficient.",
     image:
       "https://devpolicy.org/wp-content/uploads/2020/02/Women-in-Jamalpur-Bangladesh-where-WVA-is-supporting-a-new-project-on-women%E2%80%99s-economic-empowerment-Credit-Ellie-Wong.png",
     category: "Women Empowerment",
     readTime: "4 min read",
   },
   {
     title: "New Education Center Opens for Underprivileged Children",
     date: "January 30, 2025",
     description:
       "A new school has been inaugurated to provide free education to children who lack access to quality learning resources.",
     image:
       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
     category: "Education",
     readTime: "5 min read",
   },
 ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
            alt="Press Releases"
            className="w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-all duration-3000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 mix-blend-multiply" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in-down">
            Press Releases & Updates
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-2xl animate-fade-in-up text-gray-200">
            Stay updated with our latest announcements, news, and media coverage
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Latest News
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Featured Press Release */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
                alt="Featured Press"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Featured
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="text-blue-600 font-semibold mb-4">
                March 15, 2024
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Major Milestone: 1 Million Lives Impacted Through Our Programs
              </h2>
              <p className="text-gray-600 mb-6">
                We're proud to announce a significant milestone in our journey
                of creating positive change. Through our various initiatives...
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Read Full Story
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Press Releases Grid */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Latest Press Releases
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressReleases.map((release, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={release.image}
                  alt={release.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent h-24" />
              </div>
              <div className="p-6">
                <div className="text-blue-600 text-sm font-semibold mb-2">
                  {release.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {release.title}
                </h3>
                <p className="text-gray-600 mb-4">{release.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                  Read More
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
          ))}
        </div>
      </div>

      {/* Media Contact Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            For interviews, media requests, or more information, our media
            relations team is here to assist you.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <svg
                className="w-8 h-8 text-white mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-white/90">media@ngoexample.org</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <svg
                className="w-8 h-8 text-white mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-white/90">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <svg
                className="w-8 h-8 text-white mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-white/90">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="max-w-4xl mx-auto mt-16 px-6">
        {/* Outer Container with Gradient Border */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-[1px] rounded-2xl">
          {/* Inner Container with Glass Effect */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center">
              {/* Newsletter Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Stay Updated
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our press release newsletter to receive the latest
                updates directly in your inbox.
              </p>

              {/* Subscription Form */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-6 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  Subscribe
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Privacy Notice */}
              <p className="text-gray-500 text-sm mb-8 flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m0 0v2m0-2h2m-2 0H8m4-6V4"
                  />
                </svg>
                We respect your privacy. Unsubscribe at any time.
              </p>

              {/* Stats Section */}
              <div className="border-t border-gray-100 pt-8">
                <p className="text-gray-600 font-medium mb-6">
                  Join our growing community
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="text-center p-4 rounded-xl bg-blue-50/50">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      10K+
                    </div>
                    <div className="text-gray-500 font-medium">Subscribers</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-purple-50/50">
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      98%
                    </div>
                    <div className="text-gray-500 font-medium">
                      Satisfaction
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-indigo-50/50">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">
                      Weekly
                    </div>
                    <div className="text-gray-500 font-medium">Updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add subtle animated dots in the background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20 animate-pulse"
            style={{ top: "20%", left: "10%" }}
          ></div>
          <div
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20 animate-pulse"
            style={{ top: "60%", right: "15%" }}
          ></div>
          <div
            className="absolute w-2 h-2 bg-indigo-500 rounded-full opacity-20 animate-pulse"
            style={{ bottom: "20%", left: "20%" }}
          ></div>
        </div>
      </div>
      {/* Bottom Spacing */}
      <div className="h-16"></div>

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
  );
}

