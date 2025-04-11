import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import WhoHome from "./WhoHome";
import Membership from "./Membership";
import MediaHome from "./MediaHome"
import DonateHome from "./DonateHome";

export default function Campaign() {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <div className="relative w-full h-[600px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://smileindiatrust.org/wp-content/uploads/2019/08/ngo-working-for-children-rights-2.jpg"
              alt="Hero"
              className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-3000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 mix-blend-multiply" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-bold leading-tight"
            >
              Together, We Can <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Make a Change
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl md:text-2xl max-w-2xl text-gray-200"
            >
              Join us in our mission to uplift communities and create a better
              future.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => navigate("/donate")}
              className="mt-8 bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
            >
              Donate Now
            </motion.button>
          </div>
        </div>
        {/*who we are home */}
        <WhoHome></WhoHome>
        {/* membership */}
        <Membership />
        {/* Campaigns Section */}
        <div className="max-w-7xl mx-auto text-center py-15 px-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Our Campaigns
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto mb-16">
            Explore our key initiatives that are making a difference in people's
            lives through education, empowerment, and nourishment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Campaign Cards with enhanced styling */}
            {[
              {
                title: "Child Education",
                image:
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
                color: "blue",
                route: "/child",
                description: "Empowering young minds through quality education",
              },
              {
                title: "Nari Shakti",
                image:
                  "https://asiapacific.unwomen.org/sites/default/files/2024-05/in-c869-p01-1280px.jpg",
                color: "pink",
                route: "/nari",
                description: "Empowering women for a stronger society",
              },
              {
                title: "Muft Bhojan",
                image:
                  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
                color: "green",
                route: "/bhojan",
                description: "Ensuring no one goes to bed hungry",
              },
            ].map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{campaign.description}</p>
                    <button
                      onClick={() => navigate(campaign.route)}
                      className={`bg-white text-${campaign.color}-600 px-6 py-3 rounded-full font-bold transform group-hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Impact Numbers with enhanced styling */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-24 relative overflow-hidden">
          {/* Background Design Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Together, we've made a significant difference in thousands of
                lives
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Children Educated */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                    50K+
                  </div>
                  <div className="text-lg text-blue-100">Children Educated</div>
                  <div className="mt-4 text-sm text-blue-200/80">
                    Providing quality education
                  </div>
                </div>
              </div>

              {/* Women Empowered */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-pink-300 to-pink-100 bg-clip-text text-transparent">
                    10K+
                  </div>
                  <div className="text-lg text-pink-100">Women Empowered</div>
                  <div className="mt-4 text-sm text-pink-200/80">
                    Supporting women entrepreneurs
                  </div>
                </div>
              </div>

              {/* Meals Served */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                    100K+
                  </div>
                  <div className="text-lg text-green-100">Meals Served</div>
                  <div className="mt-4 text-sm text-green-200/80">
                    Nourishing communities daily
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-lg text-purple-100">Success Stories</div>
                  <div className="mt-4 text-sm text-purple-200/80">
                    Lives transformed forever
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { label: "Cities", value: "25+" },
                { label: "Volunteers", value: "1000+" },
                { label: "Projects", value: "50+" },
                { label: "Partners", value: "30+" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center py-4 px-6 rounded-xl bg-white/5 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                View All Impact Stories
              </button>
            </div>
          </div>

          {/* Animated Particles (Optional) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{ top: "20%", left: "10%" }}
            ></div>
            <div
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float-delayed"
              style={{ top: "60%", right: "15%" }}
            ></div>
            <div
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{ bottom: "20%", left: "20%" }}
            ></div>
          </div>
        </div>
        {/* Enhanced Call to Action */}
        <MediaHome />
        <DonateHome/>
      </div>
    </>
  );
}
