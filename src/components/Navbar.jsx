import React from "react";
const items = ["React", "JavaScript", "HTML", "CSS"];
const Navbar = () => {
  return (
    <div className="sticky text-[var(--Sage)] w-full h-full flex top-10 pr-10 mb-20 text-[25px] z-30">
      <ul className="flex flex-row justify-end w-full">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-4 hover:text-[40px] transition-all duration-700 text-shadow-lg text-outline"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
