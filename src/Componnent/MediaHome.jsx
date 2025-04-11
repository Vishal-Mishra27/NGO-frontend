import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MediaCenter = () => {
  const pressReleases = [
    {
      title: "Nari Shakti",
      date: "March 25, 2025",
      description:
        "Empowering women through skill development, financial independence, and leadership opportunities.",
      image:
        "https://devpolicy.org/wp-content/uploads/2020/02/Women-in-Jamalpur-Bangladesh-where-WVA-is-supporting-a-new-project-on-women%E2%80%99s-economic-empowerment-Credit-Ellie-Wong.png",
    },
    {
      title: "Child Education",
      date: "February 10, 2025",
      description:
        "Building brighter futures through quality  education and comprehensive learning programs.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  const navigate=useNavigate()

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold text-lg uppercase tracking-wider">
              Latest Updates
            </span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-4 mb-6">
              Media Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news and press releases about our
              initiatives, focusing on Nari Shakti and Child Education.
            </p>
          </motion.div>

          {/* Featured Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Nari Shakti News */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className="relative h-[400px]">
                <img
                  // hbjkhh
                  src={pressReleases[0].image}
                  alt="Nari Shakti Initiative"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-pink-400 font-semibold mb-2">
                    Featured Story
                  </span>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {pressReleases[0].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 line-clamp-2">
                    {/* nbjbe */}
                    {pressReleases[0].description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-300">
                        <svg
                          className="w-5 h-5 inline mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                          />
                        </svg>
                        Live Updates
                      </span>
                      <span className="text-gray-300">
                        <svg
                          className="w-5 h-5 inline mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        1.2K Shares
                      </span>
                    </div>
                    <button
                      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold transform group-hover:scale-105 transition-all duration-300 hover:shadow-xl flex items-center"
                      onClick={() => navigate("/media")}
                    >
                      Read More
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
              </div>
            </motion.div>

            {/* Child Education News */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className="relative h-[400px]">
                <img
                  src={pressReleases[1].image}
                  alt="Child Education Initiative"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-blue-400 font-semibold mb-2">
                    Latest Update
                  </span>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {pressReleases[1].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 line-clamp-2">
                    {pressReleases[1].description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-300">
                        <svg
                          className="w-5 h-5 inline mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                          />
                        </svg>
                        Recent News
                      </span>
                      <span className="text-gray-300">
                        <svg
                          className="w-5 h-5 inline mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                        856 Shares
                      </span>
                    </div>
                    <button
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-bold transform group-hover:scale-105 transition-all duration-300 hover:shadow-xl flex items-center"
                      onClick={() => navigate("/media")}
                    >
                      Read More
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
              </div>
            </motion.div>
          </div>

          {/* Latest Updates Section */}
          {/* <div className="text-center mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-12"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-8">
                Stay Updated
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest updates and
                stories directly in your inbox.
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-r-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MediaCenter;
