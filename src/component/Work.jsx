import React, { useState } from "react";
import Todo from "../assets/Todolist.png";
import Portfolio from "../assets/portfolio website.png";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/applivity_logo.jpeg";
import Ecom from "../assets/Ecom.png";
import PropertyPortal from "../assets/PropertyTaxPortal.jpeg";
const Work = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      category: "frontend",
      img: Todo,
    },
    {
      id: 2,
      category: "backend",
      img: Ecom,
    },
    {
      id: 3,
      category: "frontend",
      img: PropertyPortal,
    },
    {
      id: 4,
      category: "backend",
      img: Portfolio,
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="bg-[#1a253f] text-white py-12  border-gray-300 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="relative inline-block text-[16px] font-semibold  text-[#eff2f9] mb-12 section__heading">
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
                  I’m currently working as a Full Stack Developer at Applivity Software House, where I build complete web applications using PHP, Laravel, Livewire, and React.
My work involves creating dynamic frontend interfaces, developing secure and scalable backend systems, and integrating both ends to deliver smooth, high-performing user experiences.
I’m passionate about continuous learning, writing clean code, and delivering creative, high-quality web solutions.
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
                  className="border rounded overflow-hidden shadow border border-[#28365f]"
                >
                  <img
                    src={item.img}
                    alt={`placeholder-${item.id}`}
                    className="w-full h-40 object-scale-down mx-auto"
                    onClick={() => setSelectedImage(item.img)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0  flex items-center justify-center z-50 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-[80vw] max-h-[80vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-red-600 hover:text-white transition"
            >
              ✕
            </button>
            <motion.img
              src={selectedImage}
              alt="Zoom"
              className="rounded-lg shadow-lg max-w-[80vw] max-h-[80vh] "
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            </div>
          </motion.div>
        )}
        
      </AnimatePresence>
    </section>
  );
};

export default Work;
