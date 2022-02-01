import React from "react";

function Tabs({ buttonText }) {
  return (
    <button className="bg-white font-semibold text-xs rounded-full shadow-lg py-2 px-4 mb-3 mx-2 hover:bg-red-400 hover:text-white transition duration-200 hover:scale-105 active:scale-95">
      {buttonText}
    </button>
  );
}

export default Tabs;
