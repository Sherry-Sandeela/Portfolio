import React from "react";


const Nav = () => {
  return (
    <nav className="w-full bg-[#1a253f] shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-lg font-semibold">
          
          <i className="fa fa-home text-[#4d79f6]"></i><span className="text-[#eff2f9] font-semibold text-lg">Portfolio</span>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center bg-[#2b55cc] gap-2 border border-gray-600 px-4 py-2 rounded "
        >
          <i className="fa fa-print text-white"></i>
          <span className="text-white">Print</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
