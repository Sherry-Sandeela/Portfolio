import React, { useState } from "react";
import logo from "../assets/applivity_logo.jpeg";
const Work = () => {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "frontend",
      img: "https://via.placeholder.com/300x200?text=1",
    },
    {
      id: 2,
      category: "backend",
      img: "https://via.placeholder.com/300x200?text=2",
    },
    {
      id: 3,
      category: "frontend",
      img: "https://via.placeholder.com/300x200?text=3",
    },
    {
      id: 4,
      category: "backend",
      img: "https://via.placeholder.com/300x200?text=4",
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="bg-[#1a253f] text-white py-12 border-b border-gray-300 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="relative inline-block text-[16px] font-medium text-[#eff2f9] mb-12 section__heading">
          My Work
          <span className="absolute left-0 bottom-[-3px] w-[70px] h-[3px] border-2 border-dashed border-[#7081b9]" />
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* === Left Column: Quotes Slider === */}
          <div className="md:w-1/2 bg-[#151A33] p-6 rounded-lg shadow-lg relative">
            <div className="text-[#4d79fc] text-3xl mb-4 text-center">
              <i className="fa fa-comments " aria-hidden="true"></i>
            </div>

            <div className=" slider mt-4 space-y-6">
              {/* Slide 1 */}
              <div className="slide text-center">
                <p className="italic text-[#848db3] mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  repellat fuga unde dolore quae? Inventore cupiditate
                  consectetur ratione ullam, explicabo iure laborum dignissimos
                  accusamus non placeat eos animi minus tenetur?
                </p>

                <img
                  src={logo}
                  className="w-19 h-19 rounded-full mb-1 mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="tabs flex justify-center md:justify-start gap-6 mb-6">
              <button
                className={`hover:text-blue-600 ${
                  filter === "all" && "text-blue-600"
                }`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`hover:text-blue-600 ${
                  filter === "frontend" && "text-blue-600"
                }`}
                onClick={() => setFilter("frontend")}
              >
                Front End
              </button>
              <button
                className={`hover:text-blue-600 ${
                  filter === "backend" && "text-blue-600"
                }`}
                onClick={() => setFilter("backend")}
              >
                Back End
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded overflow-hidden shadow"
                >
                  <img
                    src="https://via.placeholder.com/200"
                    alt={`placeholder-${item.id}`}
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
