"use client";

import { useSearchParams } from "next/navigation";

export default function Results() {
  const searchParams = useSearchParams();

  const workoutData = JSON.parse(searchParams.get("workoutData") || "{}");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-6">Workout Results</h1>
      <pre className="bg-gray-900 p-6 rounded-md shadow-md max-w-2xl overflow-x-auto">
        {JSON.stringify(workoutData, null, 2)}
      </pre>
    </div>
  );
}
