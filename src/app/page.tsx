"use client";

import { useState, useEffect } from "react";
import BoilerComponent from "@/components/BoilerComponent";

export default function Home() {
  const [currentDate, setCurrentDate] = useState("");
  const [boilers, setBoilers] = useState<number[]>([1]);
  const [activeBoiler, setActiveBoiler] = useState<number | null>(1);

  const [workoutFocus, setWorkoutFocus] = useState<string>("");
  const [workoutNotes, setWorkoutNotes] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    setCurrentDate(
      date.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
      })
    );
  }, []);

  const handleAddBoiler = () => {
    const newBoilerId = boilers.length + 1;
    setBoilers([...boilers, newBoilerId]);
    setActiveBoiler(newBoilerId); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-row items-center border-b-2 border-white">
        <h1 className="text-2xl whitespace-nowrap">{currentDate}:</h1>
        <input
          type="text"
          placeholder="Title"
          value={workoutFocus}
          size={Math.max(3, workoutFocus.length-2)}
          onChange={(e) => setWorkoutFocus(e.target.value)}
          className="
          bg-transparent
        text-white
        placeholder-gray-400
          focus:outline-none
          pl-2
          pr-0
          rounded
          max-w-md
          text-2xl
          w-auto"
        />
      </div>

      <textarea
        placeholder="Notes"
        value={workoutNotes}
        onChange={(e) => setWorkoutNotes(e.target.value)}
        className="
        bg-transparent
        text-white
        placeholder-gray-400
        border-b-2
        border-transparent
        focus:border-b-2
        focus:border-white
        focus:outline-none
        transition-all
        duration-300
        ease-in-out
        placeholder-shown:border-b-white
        placeholder-shown:focus:border-b-white
        placeholder-shown:focus:border-opacity-100
        animate-flush-underline
        px-2
        py-1
        rounded
        w-full
        max-w-md
        my-3
        h-16
        text-center
        resize-none
        "
        rows={4}
      />

      {boilers.map((id) => (
        <BoilerComponent
          key={id}
          isActive={activeBoiler === id}
          onFocus={() => setActiveBoiler(id)}
        />
      ))}
      <button
        onClick={handleAddBoiler}
        className="mt-4 bg-red-400 text-white px-5 py-1 rounded"
      >
        +
      </button>
    </div>
  );
}
