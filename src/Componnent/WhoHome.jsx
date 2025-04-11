import React from "react";
import { motion } from "framer-motion";

export default function WhoHome() {
  return (
  <>
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-4 relative overflow-hidden">
  {/* Background Decorative Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
  </div>

  {/* Section Header */}
  <div className="text-center mb-20 relative">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
    >
      Who We Are
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
    >
      Learn about our mission, vision, and the passionate team driving our
      initiatives forward to create lasting positive change.
    </motion.p>
  </div>

  {/* Mission, Vision & Goal Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
    {[
      {
        title: "Our Mission",
        description: "To empower underprivileged communities through education, food security, and social welfare programs.",
        color: "blue",
        icon: "🎯"
      },
      {
        title: "Our Vision",
        description: "A world where every individual has the opportunity to lead a dignified and prosperous life.",
        color: "purple",
        icon: "👁️"
      },
      {
        title: "Our Goal",
        description: "To positively impact a million lives by 2030 through sustainable initiatives and partnerships.",
        color: "green",
        icon: "🎯"
      }
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className={`p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}
      >
        <div className={`absolute top-0 left-0 w-2 h-full bg-${item.color}-500 transition-all duration-300 group-hover:w-full group-hover:opacity-10`}></div>
        <div className="relative z-10">
          <span className="text-4xl mb-6 block">{item.icon}</span>
          <h3 className={`text-2xl font-bold text-${item.color}-600 mb-4`}>
            {item.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {item.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Our Team Section */}
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8"
    >
      Meet Our Team
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl text-gray-600 max-w-2xl mx-auto mb-16"
    >
      Our dedicated team works tirelessly to bring hope and create positive change
      in communities across the nation.
    </motion.p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        {
          name: "Anita Sharma",
          role: "Founder & CEO",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          quote: "Dedicated to creating lasting change"
        },
        {
          name: "Ravi Verma",
          role: "Director of Operations",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          quote: "Building sustainable solutions"
        },
        {
          name: "Priya Kapoor",
          role: "Head of Community Outreach",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          quote: "Connecting hearts and hands"
        }
      ].map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <div className="relative">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {member.name}
            </h3>
            <p className="text-purple-600 font-medium mb-4">{member.role}</p>
            <p className="text-gray-600 italic">"{member.quote}"</p>
            
            {/* Social Links */}
            {/* <div className="flex justify-center space-x-4 mt-6">
              {['linkedin', 'twitter', 'email'].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div> */}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Join the Team CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
    >
      <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        We're always looking for passionate individuals who want to make a difference.
      </p>
      <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        View Open Positions
      </button>
    </motion.div>
  </div>
  </div>
  </>
  );
}
