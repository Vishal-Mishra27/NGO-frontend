import React from 'react'
import { useNavigate } from "react-router-dom";


export default function DonateHome() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join us in our mission to create positive change in society. Every
            contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/donate")}
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Donate Now
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
