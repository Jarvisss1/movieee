import { motion } from "framer-motion";
import Button from "./Button";

export default function LandingPage({ onNext }) {
  return (
    <motion.div
      className="text-center bg-white p-10 rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-pink-600">Hey Beautiful 💖</h1>
      <p className="mt-4 text-lg">I have a small proposal for you...</p>
      <Button onClick={onNext} text="Start the Analysis ➡️" />
    </motion.div>
  );
}
