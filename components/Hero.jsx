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
      <div className="flex flex-col items-start justify-center h-3/4 md:h-full px-4">
        <div>
          <span className="md:text-2xl">I am a</span>
          <div className="">
            {titles.map((title, index) => (
              <h1 key={index} className="text-[23px] md:text-5xl lg:text-6xl font-bold uppercase md:my-2">
                {title}
              </h1>
            ))}
          </div>
        </div>
        <div className="mt-2 md:mt-4">
          <button className="py-2 px-4 md:py-4 md:px-8 md:uppercase font-bold text-md md:text-xl bg-blue-700 rounded-md">View Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
