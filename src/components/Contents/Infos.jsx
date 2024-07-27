import React from "react";

function Infos({ title, desc, Icon }) {
  return (
    <div>
      <div className="flex justify-evenly gap-14 h-40 p-3 rounded-lg border border-chose-20 bg-chose-10 hover:drop-shadow-lg md:transition ease-in-out transform hover:scale-105 duration-700">
        <ul role="list">
          <li class="group/item flex flex-col justify-center items-center">
            <h4 className="text-3xl font-bold">{title}</h4>
            <div className="group/edit visible group-hover/item:invisible">
            <img src={Icon} className="w-16 h-16 mt-5"/>
            </div>
            
            <a class="group/edit invisible group-hover/item:visible -mt-20">
              <span class="h-20 font-semibold">
                {desc}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Infos;
