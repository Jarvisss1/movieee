import { useState, useEffect, useRef } from "react";
import LandingPage from "./components/LandingPage";
import ProsAndCons from "./components/ProsAndCons";
import FinalScreen from "./components/FinalScreen";
import { FaPlay, FaPause } from "react-icons/fa"; // Import play/pause icons
import musicPath from "./music1.mp3";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(musicPath);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Adjust volume as needed
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => console.error("Audio play failed:", err));
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-200 text-gray-900">
      {/* Play/Pause Button */}
      <button
        className="absolute top-15 right-25 bg-white p-3 rounded-full shadow-md flex items-center justify-center"
        onClick={toggleMusic}
      >
        {isPlaying ? (
          <>
            <span className="mr-2 ml-1 text-gray-800 font-bold ">Pause</span>
            <FaPause size={20} className="text-gray-800" />
          </>
        ) : (
          <>
            <span className="mr-2 ml-1 text-gray-800 font-bold ">Play</span>
            <FaPlay size={20} className="text-gray-800" />
          </>
        )}
      </button>

      {/* Content */}
      {step === 0 && <LandingPage onNext={() => setStep(1)} />}
      {step === 1 && <ProsAndCons onNext={() => setStep(2)} />}
      {step === 2 && <FinalScreen />}
    </div>
  );
}

export default App;