import React from "react";

const Skill = () => {
  return (
     <section className="bg-[#1a253f] text-white py-12 border-b border-[#212A4A] w-full">
      <div className="container mx-auto px-6">
        <h1 className="relative inline-block text-[16px] font-medium text-[#eff2f9] mb-12 section__heading">
  Education & Skills
  <span
    className="absolute left-0 bottom-[-3px] w-[70px] h-[3px] border-2 border-dashed border-[#7081b9]"
  />
</h1>

        <div className="content mt-8 flex flex-col md:flex-row gap-12">
          {/* Education */}
          <div className="left flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="inner__left">
              <div className="heading flex items-center gap-2 mb-4">
                <i className="fa fa-graduation-cap text-[#4d79fc] text-2xl"></i>
                <p>Education</p>
              </div>
              <div className="timeline_wrapper border-l-2 border-dotted border-[#28365f] pl-4 space-y-6">
                <div className="item relative">
                  <p className="text-sm text-gray-500">2016-2018</p>
                  <p className="text-sm text-gray-500">High School</p>
                  <p className="text-gray-600">Matriculation</p>
                </div>
                <div className="item relative">
                  <p className="text-sm text-gray-500">2018-2020</p>
                  <p className="text-sm text-gray-500">College</p>
                  <p className="text-gray-600">Secondary Education</p>
                </div>
                <div className="item relative">
                  <p className="text-sm text-gray-500">2020-2024</p>
                  <p className="text-sm text-gray-500">University</p>
                  <p className="text-gray-600">Bachelor Of Computer Science</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="inner__right">
              <div className="heading flex items-center gap-2 mb-4">
                <i className="fa fa-suitcase text-[#4d79fc] text-2xl"></i>
                <p >Experience</p>
              </div>
              <div className="timeline_wrapper border-l-2 border-dotted border-[#28365f] pl-4 space-y-6">
                <div className="item relative">
                  <p className="text-sm text-gray-500">2024</p>
                  <p className="text-sm text-gray-500">Front End Dev </p>
                  <p className="text-sm text-gray-500">Siqa</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">2025- Present</p>
                  <p className="text-sm text-gray-500">Front End Dev</p>
                  <p className="text-sm text-gray-500">Freelancer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex-1 space-y-6">
            <SkillBar name="HTML & CSS" percent="78" />
            <SkillBar name="JS" percent="60" />
            <SkillBar name="React" percent="70" />
            <SkillBar name="Node.js" percent="30" />
          </div>
        </div>
      </div>
    </section>
  );
};
const SkillBar = ({ name, percent }) => {
  return (
    <div>
      <div className="mb-1 flex justify-between items-center">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm font-medium text-white">{percent}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-[#4d79fc] h-2.5 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};


export default Skill;
