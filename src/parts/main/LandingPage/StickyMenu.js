import React from "react";

import Button from "elements/Button";
import BrandIcon from "parts/main/LandingPage/IconText";
import Hamburger from "assets/images/hamburger.png";

export default function StickyMenu(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <div className="">
      <div className=""></div>
      <nav className="">
        <div className="bg-pink animate-floating-md p-8 rounded-l-2xl bg-opacity-50 fixed right-0 top-2/4 flex z-50 items-center justify-center w-8 h-8 text-black md:text-white focus:outline-none">
          <button id="menu-toggler" className="">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="16"
                y="3.2"
                width="16"
                height="3.2"
                rx="1.6"
                transform="rotate(-180 16 3.2)"
                fill="white"
              />
              <rect
                x="16"
                y="9.60001"
                width="16"
                height="3.2"
                rx="1.6"
                transform="rotate(-180 16 9.60001)"
                fill="white"
              />
              <rect
                x="16"
                y="16"
                width="16"
                height="3.2"
                rx="1.6"
                transform="rotate(-180 16 16)"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="b"></div>
    </div>
  );
}
