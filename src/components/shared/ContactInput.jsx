import React from 'react';

function ContactInput({ type = "text", name, placeholder, value, onChange }) {
  return (
    <div>
    <label htmlFor={name} className="sr-only">
      {placeholder}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border-gray-300 border-[0.5px] rounded-3xl
                 focus:border-mainColor focus:outline-none focus-visible:border-mainColor focus-visible:outline-none"
    />
    </div>
  );
}

export default ContactInput;
