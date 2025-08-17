import React from 'react';

function Button({ title, icon, handelClick ,type}) {
  const Icon = icon;

  return (
    <button
      type={type}
      onClick={handelClick}
      className="group relative flex items-center gap-3 bg-mainColor uppercase
       text-white px-7 py-3 rounded-full shadow-lg
        hover:bg-white hover:text-mainColor border-2 border-mainColor transition duration-300"
    >
      <span className="font-open text-[15px] font-[500] tracking-wide ">{title}</span>
      <Icon className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" aria-hidden="true"/>
    </button>
  );
}

export default Button;
