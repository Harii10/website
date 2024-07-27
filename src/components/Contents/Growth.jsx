import React from "react";

function Growth({title, desc, Icon}) {
  return (
    <>
      <div>
        <div className="p-3 uppercase md:flex md:justify-evenly">
          <div className="flex justify-center items-center gap-5 mt-10 ml-28 md:m-0 md:p-10 ">
            <div className="flex flex-col justify-center items-center p-10 transition duration-300 ease-in-out transform  border border-chose-20 rounded-lg">
              <img src={Icon} className="w-28 h-20" />
              <div className="flex flex-col justify-center items-center">
                <span className="font-semibold">{title}</span>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Growth;
