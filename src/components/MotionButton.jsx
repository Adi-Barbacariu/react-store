import React from "react";
import { motion } from "framer-motion";

function MotionButton({ children, ...otherProps }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...otherProps}
    >
      {children}
    </motion.button>
  );
}

export default MotionButton;
