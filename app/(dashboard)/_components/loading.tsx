import React from "react";
import BarLoader from "react-spinners/BarLoader";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <BarLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
