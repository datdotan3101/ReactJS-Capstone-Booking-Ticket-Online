import React from "react";

export default function Loading() {
  const ProgressBar = () => (
    <div className="relative w-full h-2 bg-gray-300 rounded overflow-hidden">
      <div className="absolute left-0 w-1/3 h-full bg-blue-500 animate-ping"></div>
    </div>
  );
  return <div>{ProgressBar()}</div>;
}
