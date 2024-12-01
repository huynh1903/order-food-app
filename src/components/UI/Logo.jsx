import React from "react";
import logo from "/images/res-logo.png";
import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <Link to="/" className="w-[80px] flex flex-col items-center">
      <img className="w-6/12" src={logo} alt="logo image" />
      <span className="w-full text-sm text-center text-slate-800 font-medium">
        Food Order
      </span>
    </Link>
  );
};

export default Logo;
