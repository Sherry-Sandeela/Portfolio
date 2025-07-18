import React from "react";


const Nav = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-lg font-semibold">
          
          <i class="fa fa-home"></i><span>Portfolio</span>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded hover:bg-gray-100"
        >
          <i class="fa fa-print"></i>
          <span>Print</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
