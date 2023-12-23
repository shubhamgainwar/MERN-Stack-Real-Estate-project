import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center font-semibold gap-3 mx-1 ">
      <svg className="w-4 h-4 border-b-2 border-slate-700 rounded-full animate-spin "></svg>
      <span> Loading...</span>
    </div>
  );
};

export default Spinner;
