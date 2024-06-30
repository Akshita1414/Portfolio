import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const SkillCircle = ({ name, percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-28 h-28">
      <svg className="absolute top-0 left-0 w-full h-full">
      <circle
      cx="50%"
      cy="50%"
      r={radius}
      stroke="#e5e7eb"
      strokeWidth="10"
      fill="none"
    />
    <circle
      cx="50%"
      cy="50%"
      r={radius}
      stroke="#108CC6"
      strokeWidth="10"
      fill="none"
      strokeDasharray={circumference}
      strokeDashoffset={offset}
      className="transition-stroke-dashoffset duration-500"
    />
      </svg>
      <div className="absolute text-center">
        <span className="text-1xl font-bold">{percentage}%</span>
        <div className="text-1xl">{name}</div>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <SkillCircle
          key={technology.name}
          name={technology.name}
          percentage={technology.percentage}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
