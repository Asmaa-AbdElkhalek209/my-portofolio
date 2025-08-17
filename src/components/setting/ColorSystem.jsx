// ColorSystem.jsx
import React from "react";

const ColorSystem = ({ colors, setMainColor, mainColor }) => {
  return (
    <div className="mt-4 grid grid-cols-5 gap-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setMainColor(color)}
          className={`w-8 h-8 rounded-full border-2 transition-transform duration-200 hover:scale-110
            ${mainColor === color ? "border-[var(--mainColor)] scale-110" : "border-gray-300"}`}
          style={{ backgroundColor: color }}
          aria-label={`Choose ${color} as main color`}
        />
      ))}
    </div>
  );
};

export default React.memo(ColorSystem);

//  <span class="sr-only">Choose ${color} as main color</span> مخفية ولكت يتم قرأتها فى screen readers
