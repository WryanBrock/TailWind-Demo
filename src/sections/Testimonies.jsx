import React from "react";

const Testimonies = () => {
  return (
    <section className="w-[100%] h-[110vh] relative flex justify-center content-center p-20">
      <div className="grid grid-col-9 grid-row-2 gap-20 w-[70%] h-[80%]">
        <div className="border-2 border-yellow-400 bg-orange-600 rounded-sm col-start-3 col-end-7 row-start-1 row-end-2">
          this
        </div>
        <div className="border-2 border-yellow-400 bg-orange-600 rounded-sm col-start-1 col-end-5 row-start-2 row-end-3">
          that
        </div>
        <div className="border-2 border-yellow-400 bg-orange-600 rounded-sm col-start-5 col-end-9 row-start-2 row-end-3">
          them
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
