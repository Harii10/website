import React from "react";
import { SiGoogleplay } from "react-icons/si";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <footer className="hidden md:block lg:block xl:block 2xl:block border">
        <div className="flex flex-col gap-5 p-8 w-fit">
          <div>
            <span>
              <SiGoogleplay className="size-6" />
            </span>
          </div>
          <div className="flex gap-3">
            <span>
              <CiFacebook className="size-5" />
            </span>

            <span>
              <FaInstagram className="size-5" />
            </span>
            <span>
              <CiTwitter className="size-5" />
            </span>
            <span>
              <CiLinkedin className="size-5" />
            </span>
          </div>
        </div>
        <div className="flex justify-evenly">
          <ul className="flex flex-col gap-3">
            <span className="font-semibold">New to Bridge</span>
            <li>About US</li>
            <li>Customer Services</li>
            <li>Careers</li>
            <li>Awards</li>
          </ul>

          <ul className="flex flex-col gap-3">
            <span className="font-semibold">New to Bridge</span>

            <li>About US</li>
            <li>Customer Services</li>
            <li>Careers</li>
            <li>Awards</li>
          </ul>

          <ul className="flex flex-col gap-3">
            <span className="font-semibold">New to Bridge</span>

            <li>About US</li>
            <li>Customer Services</li>
            <li>Careers</li>
            <li>Awards</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
