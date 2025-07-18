import React from "react";

const About = () => {
  return (
    <section className="w-full bg-[#1a253f] py-12">
      <div className="max-w-[1140px] mx-auto px-4">
      <h1 className="relative inline-block text-[16px] font-medium text-[#eff2f9] mb-12 section__heading">
  About Me!
  <span
    className="absolute left-0 bottom-[-3px] w-[70px] h-[3px] border-2 border-dashed border-[#7081b9]"
  />
</h1>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-24">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-[18px] font-bold text-[#4d79fc]">
            I'm Sherry Sandeela
          </h2>
          <p className="text-[#848db3] text-[14px] leading-relaxed">
            Currently I am full stack developer but mainly focus on Frontend. Extremely motivated to constantly develop my skills and grow professionally.
             I am confident in my ability to come up with interesting ideas for unforgettable programming techniques and designs
          </p>
          <button className="bg-[#4d79fc]/10 text-[#4d79fc] text-xs px-4 py-1 rounded hover:bg-[#4d79fc]/20 transition">
            Download CV
          </button>
        </div>
        {/* Right Side */}
        <div className="space-y-4">
  {[
    { label: "Name", value: "Sherry Sandeela" },
    { label: "Date of Birth", value: "25/6/2002" },
    { label: "Spoken Language", value: "English, Urdu" },
    { label: "Nationality", value: "Pakistan" },
  ].map((item, index) => (
    <div
      key={index}
      className="grid grid-cols-2 gap-x-1 text-[#848db3] pb-1"
    >
      <span className="font-semibold text-[#848db3]">{item.label}    :</span><span>{item.value}</span>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
