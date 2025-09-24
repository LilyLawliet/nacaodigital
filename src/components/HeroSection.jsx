import React from "react";
import { motion } from "framer-motion";
import { FaAmazon, FaShopify, FaGoogle, FaFacebook, FaMicrosoft } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
      {/* Glow Orbs with slow animation */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 py-24 flex flex-col items-center gap-12 relative z-10">
        {/* Text Content */}
        <div className="text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Scale Faster. Spend Smarter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 text-gray-400"
          >
            Stop wasting ad spend. We build <b>ROI-driven campaigns</b> and{" "}
            <b>conversion funnels</b> that turn clicks into predictable revenue. <br />
            Transparent. Measurable. Proven.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
          >
            {[
              { value: "+$5M", label: "Revenue Generated" },
              { value: "+180%", label: "Average ROI Growth" },
              { value: "200+", label: "Brands Scaled" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center"
              >
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-6 mb-12"
          >
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-purple-900/50 transition duration-300">
              Build My Growth Plan
            </button>
            <button className="border border-white/20 text-gray-300 hover:text-white hover:border-white px-8 py-3 rounded-lg transition duration-300">
              See Proof in Case Studies
            </button>
          </motion.div>

          {/* Trusted Logos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center items-center gap-8 text-gray-500 text-3xl"
          >
            {[FaAmazon, FaShopify, FaGoogle, FaFacebook, FaMicrosoft].map((Icon, i) => (
              <Icon
                key={i}
                className="hover:text-white hover:scale-110 transition transform duration-300"
              />
            ))}
          </motion.div>
          <p className="text-gray-500 text-sm mt-4">
            Trusted by global leaders in commerce & innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
