import { ReactNode } from "react";
import React from "react";

export const Hero: React.FC<{
  topLayerText: string;
  bottomLayerText: string;
  color: string;
}> = ({ topLayerText, bottomLayerText, color }) => {
  return (
    <>
      <div className="flex justify-center mb-40 w-full h-[13%] badge-container">
        <h1 className="relative top-20 left-[3rem] z-10 drop-shadow-md h-0 font-black text-7xl text-slate-900 cursor-default select-none">
          {topLayerText.toUpperCase()}
        </h1>
        <div
          className={
            `absolute ${color} m-2 w-[15em] h-[8em] rounded-md mt-[4.5rem] shadow-md -z-5 opacity-[85%]`
          }
        />
        <h1 className="relative top-[7.5rem] right-[3rem] -z-10 drop-shadow-md h-0 font-black text-7xl text-slate-900 transform-gpu cursor-default select-none">
          {bottomLayerText.toUpperCase()}
        </h1>
      </div>
    </>
  );
};
