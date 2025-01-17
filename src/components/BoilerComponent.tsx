import React, { useState } from "react";
import RepComponent from "./RepComponent";

interface BoilerComponentProps {
  isActive: boolean;
  onFocus: () => void;
}

const BoilerComponent: React.FC<BoilerComponentProps> = ({ isActive, onFocus }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState<number[]>([1]);

  const handleAddSet = () => {
    setSets([...sets, sets.length + 1]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") {
      e.preventDefault(); // Prevent default tabbing behavior
      handleAddSet(); // Add a new set
    }
  };

  return (
    <div
      onClick={onFocus}
      onKeyDown={handleKeyDown} // Listen for keydown events
      tabIndex={0} // Make the div focusable
      className="bg-inherit hover:bg-gray-900 ease-in-out duration-300 p-3 rounded-lg cursor-pointer"
    >
      <input
        type="text"
        placeholder="Exercise Name"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
        className="
        px-2 
        py-1 
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  mt-4
        bg-transparent
      text-white
      placeholder-gray-400
        focus:outline-none
        pl-2
        pr-0
        max-w-md
        text-4xl
        w-auto
        border-b-2
        border-white
        "
      />
      {sets.map((setNumber) => (
        <RepComponent
          key={setNumber}
          setNumber={setNumber}
          onRepAndWeightChange={(setNumber, reps, weight) =>
            console.log(`Set ${setNumber}: ${reps} reps at ${weight} lbs`)
          }
        />
      ))}
      {isActive && (
        <button
          onClick={handleAddSet}
          className="text-center w-full bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded mt-4 ease-in-out duration-150"
        >
          +
        </button>
      )}
    </div>
  );
};

export default BoilerComponent;
