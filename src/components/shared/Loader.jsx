import React from 'react';
import { PulseLoader } from 'react-spinners';

export default function Loader({ loading = true }) {
  const mainColor = localStorage.getItem("mainColor") || "#72b626";

  return (
    loading && (
      <div className='absolute left-0 right-0 bottom-0 top-0 w-screen h-screen 
        flex justify-center items-center z-50 bg-lightGray'>
        <PulseLoader color={mainColor} size={15} margin={2} loading={loading} />
      </div>
    )
  );
}
