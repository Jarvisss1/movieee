import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FinalScreen() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDateConfirmed, setIsDateConfirmed] = useState(false);

  const handleDateSelect = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <motion.div
      className="text-center bg-white p-10 rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-extrabold text-pink-600">
        It’s a Date! 🎬❤️
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        {isDateConfirmed
          ? `See you on ${format(selectedDate, "PPPP")} ❤️`
          : "Pick a date, and let's make it happen!"}
      </p>

      <Card className="mt-6 p-4">
        <CardContent className="flex flex-col items-center">
          {!isDateConfirmed ? (
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-md border shadow-sm"
            />
          ) : (
            <p className="text-2xl font-semibold text-pink-600">
              {format(selectedDate, "PPPP")} ❤️
            </p>
          )}
        </CardContent>
      </Card>

      <Button
        className="mt-6 px-6 py-3 text-lg font-bold bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
        disabled={!selectedDate || isDateConfirmed}
        onClick={() => setIsDateConfirmed(true)}
      >
        {isDateConfirmed ? "Date Confirmed! 🎉" : "Confirm? 🥰"}
      </Button>
    </motion.div>
  );
}
