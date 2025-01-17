import React, { useState } from "react";

interface RepComponentProps {
  setNumber: number;
  onRepAndWeightChange: (setNumber: number, reps: number, weight: number) => void;
}

const RepComponent: React.FC<RepComponentProps> = ({
  setNumber,
  onRepAndWeightChange,
}) => {
  const [reps, setReps] = useState<string>(""); // Store as string to preserve decimals
  const [weight, setWeight] = useState<string>("");

  const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newReps = e.target.value;

    // Allow only numbers and one optional decimal
    if (/^\d*\.?\d*$/.test(newReps)) {
      setReps(newReps);
      const parsedReps = parseFloat(newReps) || 0; // Convert to number for callback
      onRepAndWeightChange(setNumber, parsedReps, parseFloat(weight) || 0);
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = e.target.value;

    // Allow only numbers and one optional decimal
    if (/^\d*\.?\d*$/.test(newWeight)) {
      setWeight(newWeight);
      const parsedWeight = parseFloat(newWeight) || 0; // Convert to number for callback
      onRepAndWeightChange(setNumber, parseFloat(reps) || 0, parsedWeight);
    }
  };

  return (
    <div className="text-black flex items-center space-x-4 py-3">
      <span className="text-white my-3 bg-blue-400 px-2 py-1 rounded">
        {setNumber}
      </span>
      <input
        type="text" // Use text type to avoid browser enforcing integer-only input
        placeholder="Weight (lbs)"
        value={weight}
        onChange={handleWeightChange}
        className="px-2 py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
          bg-transparent
          text-white
          placeholder-gray-400
          focus:outline-none
          pl-2
          pr-0
          max-w-md
          text-3xl
          w-auto
          border-b-2
          border-white"
      />
      <input
        type="text" // Use text type to avoid browser enforcing integer-only input
        placeholder="Reps"
        value={reps}
        onChange={handleRepsChange}
        className="px-2 py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
          bg-transparent
          text-white
          placeholder-gray-400
          focus:outline-none
          pl-2
          pr-0
          max-w-md
          text-3xl
          w-auto
          border-b-2
          border-white"
      />
    </div>
  );
};

export default RepComponent;
