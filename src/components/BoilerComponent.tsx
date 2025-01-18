import React, { useState, useEffect } from "react";
import RepComponent from "./RepComponent";

interface BoilerComponentProps {
  isActive: boolean;
  onFocus: () => void;
  onDataChange: (exerciseName: string, sets: { reps: number; weight: number }[]) => void;
}

const BoilerComponent: React.FC<BoilerComponentProps> = ({ isActive, onFocus, onDataChange }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState<{ reps: number; weight: number }[]>([{ reps: 0, weight: 0 }]);

  const handleAddSet = () => {
    setSets([...sets, { reps: 0, weight: 0 }]);
  };

  const handleSetChange = (setNumber: number, reps: number, weight: number) => {
    setSets((prev) =>
      prev.map((set, index) =>
        index + 1 === setNumber ? { reps, weight } : set
      )
    );
  };

  useEffect(() => {
    onDataChange(exerciseName, sets);
  }, [exerciseName, sets]);

  return (
    <div
      onClick={onFocus}
      tabIndex={0}
      className="bg-inherit hover:bg-gray-900 ease-in-out duration-300 p-3 rounded-lg cursor-pointer"
    >
      <input
        type="text"
        placeholder="Exercise Name"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
        className="px-2 py-1 bg-transparent text-white placeholder-gray-400 focus:outline-none pl-2 pr-0 max-w-md text-4xl w-auto border-b-2 border-white"
      />
      {sets.map((set, index) => (
        <RepComponent
          key={index}
          setNumber={index + 1}
          onRepAndWeightChange={handleSetChange}
        />
      ))}
      {isActive && (
        <button
          onClick={handleAddSet}
          className="text-center w-full bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded mt-4 ease-in-out duration-150 text-4xl"
        >
          +
        </button>
      )}
    </div>
  );
};

export default BoilerComponent;