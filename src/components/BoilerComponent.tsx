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

  return (
    <div
      onClick={onFocus}
      className="bg-inherit hover:bg-gray-900 ease-in-out duration-300 p-4 rounded-lg cursor-pointer"
    >
      <input
        type="text"
        placeholder="Exercise Name"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
        className="border px-2 py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-black mt-4
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
