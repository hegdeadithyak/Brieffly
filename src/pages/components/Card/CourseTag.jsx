import React from "react";


const CourseTag = ({ name, onclick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onclick(name)}
    >
      {name}
    </button>
  );
};

export default CourseTag;
