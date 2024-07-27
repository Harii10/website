import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiGoogleplay } from "react-icons/si";

function Header() {
  return (
    <div>
      <header className="sticky top-0">
      <div className="flex justify-between items-center gap-8 p-4 shadow-md md:flex md:justify-between md:p-6">
        <div>
          <Link>
            <span>
              <SiGoogleplay className="size-6 text-chose-10"/>
            </span>
          </Link>
        </div>
        <div>
          <ul className="flex gap-5 md:mr-44 md:gap-8">
            <li className="mt-2">
              <NavLink to="home">Home</NavLink>
            </li>
            <li className="mt-2">
              <NavLink to="about">About</NavLink>
            </li> 
            <div className="hidden md:flex">
            <button className="w-fit bg-chose-10 px-4 py-2 rounded-3xl text-white">Get Started</button>
          </div>
          </ul>
          
        </div>
        <div className="mt-1 md:hidden lg:hidden xl:hidden 2xl:hidden">
            <button className="w-fit bg-chose-10 p-2 rounded-3xl text-white">Get Started</button>
          </div>
      </div>
      </header>
    </div>
  );
}

export default Header;
