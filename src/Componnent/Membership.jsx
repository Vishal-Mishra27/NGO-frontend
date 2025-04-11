import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Membership = () => {
  const navigate = useNavigate();

  const membershipOptions = [
    {
      title: "Become a Volunteer",
      image:
        "https://www.bluehorizonaid.org/wp-content/uploads/2024/01/Volunteer.webp",
      description:
        "Join our community of passionate volunteers and make a real difference in people's lives. No experience needed, just a willing heart.",
      benefits: [
        "Flexible time commitment",
        "Training provided",
        "Certificate of service",
        "Community network",
      ],
      color: "blue",
      icon: "🤝",
      link: "/volunteer",
    },
    {
      title: "Apply for a Job",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      description:
        "Build a meaningful career with us. We offer competitive benefits and a chance to create positive change every day.",
      benefits: [
        "Competitive salary",
        "Health benefits",
        "Professional development",
        "Work-life balance",
      ],
      color: "green",
      icon: "💼",
      link:"/job"
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
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
          <span className="text-purple-600 font-semibold text-lg">
            Join Our Team
          </span>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mt-4 mb-6">
            Make an Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your path to making a difference. Whether through
            volunteering or joining our team, your contribution matters.
          </p>
        </motion.div>

        {/* Membership Options */}
        <div className="grid md:grid-cols-2 gap-12">
          {membershipOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-fit transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                <span className="absolute top-4 left-4 text-4xl">
                  {option.icon}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {option.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gray-700">
                    What you'll get:
                  </h4>
                  {option.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    className={`flex-1 bg-gradient-to-r from-${option.color}-600 to-${option.color}-700 text-white px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                    onClick={() => navigate(`${option.link}`)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a call with our team to learn more about opportunities
              that match your interests.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "500+", label: "Active Volunteers" },
            { number: "50+", label: "Open Positions" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-bold text-purple-600">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
