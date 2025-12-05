import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';

export default function Loader({ loading = true }) {
  const [mainColor, setMainColor] = useState("#72b626");

  useEffect(() => {
    const savedColor = localStorage.getItem("mainColor");
    if (savedColor) setMainColor(savedColor);
  }, []);

  return (
    loading && (
      <div
        className="absolute left-0 right-0 bottom-0 top-0 w-screen h-screen 
        flex justify-center items-center z-50 bg-lightGray"
        role="status" 
        aria-live="polite"
      >
        <PulseLoader color={mainColor} size={15} margin={2} loading={loading} />
        <span className="sr-only">Loading...</span>
      </div>
    )
  );
}
