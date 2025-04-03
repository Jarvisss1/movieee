import { motion } from "framer-motion";

export default function Button({ onClick, text }) {
  return (
    <motion.button
      className="mt-6 px-6 py-3 bg-pink-500 text-white font-bold rounded-lg shadow-md hover:bg-pink-600 transition"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
}
