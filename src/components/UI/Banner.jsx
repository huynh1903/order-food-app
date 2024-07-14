import React from "react";

const Banner = ({ name }) => {
  return (
    <div className="bg-banner-pattern bg-cover bg-no-repeat h-56 md:h-60 lg:h-64 w-full relative">
      <div className="bg-slate-900/75 w-full h-full top-0 left-0 absolute inset-1 flex items-center p-6">
        <h2 className="text-slate-50 font-semibold font-mono text-2xl">{name}</h2>
      </div>
    </div>
  );
};

export default Banner;
