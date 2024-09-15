import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[110vh] relative flex justify-center items-start]  ">
      <div className=" w-[80vw] h-[80vh] min-h-[250px] top-[30vh] left-[200px] rounded-lg grid grid-cols-3 grid-rows-2 gap-1 place-items-center justify-items-center p-1 grid-flow-col hover:grid-flow-row">
        <div className="bentos_under col-start-1 col-end-2 row-start-1 row-end-3  z-10  flex justify-center items-center "></div>
        <div className="bentos col-start-1 col-end-2 row-start-1 row-end-3  z-30 transition duration-[1500ms] hover:translate-x-[90%]  flex justify-center items-center ">
          <div className="w-[90%] h-[90%] bg-white flex flex-col justify-start items-start ">
            <div className="text-12 text-black p-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              nisi?
            </div>
            <div className="text-12 text-black p-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              nisi?
            </div>
            <div className="text-12 text-black p-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              nisi?
            </div>
          </div>
        </div>
        <div className="bentos_under col-start-2 col-end-4 row-start-1 row-end-2 z-20  flex justify-center items-center"></div>
        <div className="bentos col-start-2 col-end-4 row-start-1 row-end-2 z-20 lg:hover:translate-y-3/4 transition duration-[1500ms] flex justify-center items-center">
          <div className="w-[90%] h-[90%] bg-white flex flex-col justify-start items-start ">
            <div className="text-12 text-black p-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              nisi?
            </div>
            <div className="text-12 text-black p-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              nisi?
            </div>
          </div>
        </div>
        <div className="bentos_under col-start-3 col-end-4 row-start-2 row-end-3 z-10 flex justify-center items-center"></div>
        <div className="bentos col-start-3 col-end-4 row-start-2 row-end-3 z-10 hover:-translate-x-full transition duration-[1500ms] flex justify-center items-center">
          <div className="w-[90%] h-[90%] bg-white flex flex-col justify-start items-start ">
            <div className="text-12 text-black p-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              nisi?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
