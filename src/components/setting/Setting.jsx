// Setting.jsx
import React, { useState, useEffect, useMemo } from "react";
import { Settings } from "lucide-react";
import ColorSystem from "./ColorSystem";

const Setting = () => {
  const colors = useMemo(
    () => [
      "#72b626", "#8a2be2", "#f72b1c", "#000", "#9acd32",
      "#ee6192", "#DAA520", "#FFB400", "#4169e1",
      "#95aef9", "#6957af", "#b91c1c", "#234560", "#296846", "#f78f88"
    ],
    []
  );

  const [mainColor, setMainColor] = useState(
    localStorage.getItem("mainColor") || colors[0]
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--mainColor", mainColor);
    localStorage.setItem("mainColor", mainColor);
  }, [mainColor]);

  return (
    <div
      className={`fixed left-0 top-1/3 z-50 bg-white rounded-r-lg shadow-lg 
        transition-all duration-300 overflow-hidden
        ${isOpen ? "w-52 h-60 p-4" : "w-12 h-12 flex items-center justify-center"}`}
    >
      {isOpen ? (
        <>
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-darkGray font-semibold uppercase text-sm">
              Color Switcher
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className=" text-darkGray rounded-full w-8 h-8 flex items-center justify-center font-open font-[700] text-xl" >
              ✕
            </button>
          </div>
          {/* Colors */}
          <ColorSystem
            colors={colors}
            setMainColor={setMainColor}
            mainColor={mainColor}
          />
        </>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white w-12 h-12 flex items-center justify-center hover:opacity-75 animate-spin transition"
        >
          <Settings size={20} />
        </button>
      )}
    </div>
  );
};

export default React.memo(Setting);
