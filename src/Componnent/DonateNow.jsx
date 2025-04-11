import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './contact.css'

const DonateNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    cause: '',
    amount: 0,
  });
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const popupRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'amount' && value < 0) return;
    setFormData({ ...formData, [name]: name === 'amount' ? Number(value) : value });
  };

  const handlePayNow = () => {
    setIsPaymentOpen(true);
  };

  const closePaymentPopup = () => {
    setIsPaymentOpen(false);
  };

  // GSAP Animations for page load and payment popup transition
  useEffect(() => {
    gsap.fromTo(".animate-heading", 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    
    gsap.fromTo(".animate-description", 
      { opacity: 0 }, 
      { opacity: 1, delay: 0.3, duration: 0.5 }
    );

    if (popupRef.current) {
      gsap.fromTo(popupRef.current, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, delay: 0.3 }
      );
    }
  }, []);

  return (
    <>
      <div className="gradient-background relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        {/* Blur effect when payment popup is open */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isPaymentOpen ? "backdrop-blur-md opacity-50" : "opacity-100"
          }`}
        ></div>

        <motion.h1 className="text-3xl font-bold text-center mb-6 text-gray-800 animate-heading">
          Make a Difference Today
        </motion.h1>

        <motion.p className="text-lg text-gray-600 text-center mb-6 max-w-md animate-description">
          Your donation can change lives. Choose a cause and contribute towards
          a brighter future.
        </motion.p>

        <motion.div
          className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative z-10 transition-transform duration-300 ${
            isPaymentOpen ? "scale-95 blur-sm" : "scale-100 blur-0"
          }`}
          ref={popupRef}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Donate Now</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Campaign</label>
              <select
                name="cause"
                value={formData.cause}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded mt-1"
              >
                <option value="">-- Campaign --</option>
                <option value="Child Education"> Child Education</option>
                <option value="Nari Shakti"> Nari Shakti</option>
                <option value="Muft Bhojan"> Muft Bhojan</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Amount (₹)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                min="0"
                required
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div className="text-center">
              <motion.button
                type="button"
                onClick={handlePayNow}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pay Now
              </motion.button>
            </div>
          </form>
        </motion.div>

        {isPaymentOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                Complete Your Payment
              </h2>
              <p className="text-gray-700 mb-6">
                You are donating ₹{formData.amount} for {formData.cause}.
              </p>
              <div className="flex flex-col space-y-4">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold">
                  Pay via UPI
                </button>
                <button className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg text-lg font-semibold">
                  Pay via Scanner
                </button>
              </div>
              <button
                onClick={closePaymentPopup}
                className="absolute top-4 right-4 bg-red hover:bg-red-600 text-black px-3 py-1 rounded-full text-lg"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default DonateNow;