"use client"

import React from "react";
import { motion } from "framer-motion";

interface AnimateSlideInProps {
  children: React.ReactNode;
}

const AnimateSlideIn: React.FC<AnimateSlideInProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="z-30"
    >
      {children}
    </motion.div>
  );
};

export default AnimateSlideIn;
