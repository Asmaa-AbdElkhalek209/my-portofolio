import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 p-5 ">
      <h1 className="text-7xl lg:text-9xl mb-2 text-mainColor font-open font-semibold">404</h1>
      <p className="text-xl mb-6 font-open text-darkGray">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-5 py-3 bg-mainColor text-white text-base rounded-md cursor-pointer hover:bg-white border
         hover:text-mainColor hover:border-mainColor
         transition-colors duration-300">
        Go to Home
      </button>
    </div>
  );
} 

export default React.memo(NotFound);
