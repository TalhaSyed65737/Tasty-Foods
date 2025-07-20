import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#36d7b7] to-[#1e3a8a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -100, }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Delicious Food, <br className="hidden md:block" /> Delivered To You
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Order your favorite meals from top-rated restaurants. Fast delivery, fresh food, and great taste every time.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1e3a8a] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              <Link to="/">Explore Menu</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[#1e3a8a] transition"
            >
              <Link to="/contact">Contact Us</Link>
            </motion.button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Delicious Food"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
