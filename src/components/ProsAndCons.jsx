import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaFire, FaMusic, FaSmile } from "react-icons/fa";

const pros = [
  {
    text: "We’ll cook for hours and eat in 5 mins",
    icon: <FaHeart size={60} className="text-red-500" />,
  },
  {
    text: "Dancing to SRK songs we missed",
    icon: <FaMusic size={60} className="text-blue-500" />,
  },
  {
    text: "Spending quality time",
    icon: <FaSmile size={60} className="text-yellow-500" />,
  },
  {
    text: "Best company ever (Me 😉)",
    icon: <FaHeart size={60} className="text-pink-500" />,
  },
  {
    text: "Complimentary dessert (Me)",
    icon: <FaHeart size={60} className="text-pink-500" />,
  },
  {
    text: "Massages and cuddles? Yes please!",
    icon: <FaHeart size={60} className="text-pink-500" />,
  },
];

const cons = [
  {
    text: "Food might get burnt",
    icon: <FaFire size={60} className="text-orange-500" />,
  },
  {
    text: "You might get punished😏",
    icon: <FaHeart size={60} className="text-gray-500" />,
  },
  {
    text: "You might fall for me more 😜",
    icon: <FaSmile size={60} className="text-purple-500" />,
  },
  {
    text: "Bolo ab 🤨",
    icon: <FaSmile size={60} className="text-purple-500" />,
  },
];

export default function ProsAndCons({ onNext }) {
  const [step, setStep] = useState(0);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });
  const items = [
    { text: "Pros 😉", icon: null },
    ...pros,
    { text: "Cons ☹️", icon: null },
    ...cons,
  ];

  const moveNoButton = () => {
    const maxOffsetX = window.innerWidth * 0.3; // 30% of window width
    const maxOffsetY = window.innerHeight * 0.3; // 30% of window height

    const randomX = Math.random() * maxOffsetX - maxOffsetX / 2; // Slight left/right shift
    const randomY = Math.random() * maxOffsetY - maxOffsetY / 2; // Slight up/down shift

    setNoPosition((prev) => ({
      top: `calc(${prev.top} + ${randomY}px)`,
      left: `calc(${prev.left} + ${randomX}px)`,
    }));
  };


  return (
    <motion.div
      className="bg-white p-12 rounded-xl shadow-lg text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-extrabold text-pink-600">Pros & Cons 📃</h2>

      <div className="mt-6 w-96 mx-auto text-2xl text-gray-800 flex flex-col items-center">
        {items[step].icon}
        <p className="mt-3 font-semibold">{items[step].text}</p>
      </div>

      {step < items.length - 1 ? (
        <button
          className="mt-6 px-8 py-4 bg-blue-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-blue-600 transition"
          onClick={() =>
            setStep((prev) => Math.min(prev + 1, items.length - 1))
          }
        >
          Next
        </button>
      ) : (
        <div className="mt-10 relative h-24">
          <button
            className="px-8 py-4 bg-pink-600 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-pink-700 transition"
            onClick={onNext}
          >
            Yes 😍
          </button>

          <button
            className="px-8 py-4 bg-gray-500 text-white text-xl font-bold rounded-lg shadow-lg absolute"
            style={{
              position: "absolute",
              top: noPosition.top,
              left: noPosition.left,
            }}
            onClick={moveNoButton}
          >
            No 😜
          </button>
        </div>
      )}
    </motion.div>
  );
}
