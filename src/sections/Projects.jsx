import React from "react";

const Projects = () => {
  return (
    <section className="w-[100%] h-[110vh] relative flex justify-center content-center ">
      <div className=" w-[80%] h-[80%] bg-[var(--Sage)]  gap-4 flex flex-row justify-center items-center p-8 rounded-md">
        <div className="w-full h-full  bg-[var(--AshGray)] flex justify-center items-center rounded-md">
          <div className="w-[90%] h-[90%] relative bg-white rounded-md "></div>
        </div>
        <div className="w-full h-full  bg-[var(--AshGray)] flex flex-col justify-center items-center rounded-md">
          <div className=" h-[90%] w-[90%] bg-white mt-10 rounded-md"></div>
          <div className="flex flex-row justify-between items-end  w-[99%] h-auto]">
            <div className=" m-5 p-5 rounded-md text-3xl bg-white hover:bg-[var(--RaisinBlack)] hover:text-white">
              prev
            </div>
            <div className=" m-5 p-5  rounded-md text-3xl bg-white hover:bg-[var(--RaisinBlack)] hover:text-white">
              next
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
