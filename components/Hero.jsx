import React from "react";

const titles = [
  "Frontend developer,",
  "Data analyst,",
  "Systems analyst,",
  "IT Specialist",
];
const Hero = () => {
  return (
    <div className="lg:max-w-[1200px] mx-auto px-4 h-screen">
      <div className="flex flex-col items-start justify-center h-3/4 px-4">
        <div>
          <span>I am a</span>
          <div className="">
            {titles.map((title, index) => (
              <h1 key={index} className="text-[23px] font-bold uppercase">
                {title}
              </h1>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <button className="py-2 px-4 bg-blue-700 rounded-md">View Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
