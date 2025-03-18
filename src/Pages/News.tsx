// import React from "react";
import { motion } from "framer-motion";

const News = () => {
  return (
    <div className="min-h-screen bg-cyan-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tech News
      </motion.h1>
      <motion.p
        className="text-gray-300 mt-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        Coming soon...
      </motion.p>
    </div>
  );
};

export default News;
