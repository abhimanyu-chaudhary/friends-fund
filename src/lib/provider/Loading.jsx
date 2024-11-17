import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#f9f9f9]" style={{}}>
      <ClipLoader size={50} color="#4A90E2" />
    </div>
  );
};

export default Loader;
