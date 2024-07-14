import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({closeMenu}) => {
  return (
    <div className="w-full flex justify-center items-center">
      <ul className="w-11/12 min-h-[60vh] flex justify-evenly items-center flex-col">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-orange-600"
                  : "hover:text-orange-600 text-slate-800"
              } + text-xl font-semibold  font-mono  hover:cursor-pointer ease-in duration-150`
            }
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-orange-600"
                  : "hover:text-orange-600 text-slate-800"
              } + text-xl font-semibold  font-mono  hover:cursor-pointer ease-in duration-150`
            }
            to="foods"
            onClick={closeMenu}
          >
            Foods
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-orange-600"
                  : "hover:text-orange-600 text-slate-800"
              } + text-xl font-semibold  font-mono  hover:cursor-pointer ease-in duration-150`
            }
            to="feedback"
            onClick={closeMenu}
          >
            Feedback
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
