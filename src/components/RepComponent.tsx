import React, { useState } from "react";

interface RepComponentProps {
  setNumber: number;
  onRepAndWeightChange: (setNumber: number, reps: number, weight: number) => void;
}

const RepComponent: React.FC<RepComponentProps> = ({
  setNumber,
  onRepAndWeightChange,
}) => {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newReps = parseInt(e.target.value) || 0;
    setReps(newReps);
    onRepAndWeightChange(setNumber, newReps, weight);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = parseInt(e.target.value) || 0;
    setWeight(newWeight);
    onRepAndWeightChange(setNumber, reps, newWeight);
  };

  return (
    <div className="text-black flex items-center space-x-4 pl-3">
      <span className="text-white my-3 bg-blue-400 px-2 py-1 rounded">{setNumber}</span>
      <input
        type="number"
        placeholder="Weight (lbs)"
        value={weight === 0 ? "" : weight}
        onChange={handleWeightChange}
        className="border px-2 py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps === 0 ? "" : reps}
        onChange={handleRepsChange}
        className="border px-2 py-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>
  );
};

export default RepComponent;
