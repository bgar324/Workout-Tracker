"use client"

import { useState, useEffect } from "react";
import BoilerComponent from "@/components/BoilerComponent";

export default function Home() {
  const [currentDate] = useState<string>(
    new Date().toLocaleDateString("en-US", { month: "numeric", day: "numeric" })
  ); 
  const [boilers, setBoilers] = useState<number[]>([1]);
  const [activeBoiler, setActiveBoiler] = useState<number | null>(1);

  const [workoutFocus, setWorkoutFocus] = useState<string>("");
  const [workoutNotes, setWorkoutNotes] = useState<string>("");

  const handleAddBoiler = () => {
    const newBoilerId = boilers.length + 1;
    setBoilers([...boilers, newBoilerId]);
    setActiveBoiler(newBoilerId);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-row items-center border-b-2 border-white">
        <h1 className="text-7xl whitespace-nowrap">{currentDate}:</h1>
        <input
          type="text"
          placeholder="Goal"
          value={workoutFocus}
          size={Math.max(3, workoutFocus.length - 2)}
          onChange={(e) => setWorkoutFocus(e.target.value)}
          className="
            bg-transparent
            text-white
            placeholder-gray-400
            placeholder-opacity-50
            focus:outline-none
            pl-2
            pr-0
            rounded
            max-w-md
            text-7xl
            w-auto
          "
        />
      </div>


      <textarea
        placeholder="Notes"
        value={workoutNotes}
        onChange={(e) => setWorkoutNotes(e.target.value)}
        className="
        bg-transparent
      text-gray-400
      placeholder-gray-400
        placeholder-opacity-50
        focus:outline-none
        rounded
        max-w-md
        text-xl
        resize-none
        mt-3
        h-10
        italic
        underline
        w-full
        text-center
        "
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
