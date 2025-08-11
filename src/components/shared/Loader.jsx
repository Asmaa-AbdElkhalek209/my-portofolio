import React from 'react';
import { PulseLoader } from 'react-spinners';

export default function Loader({ loading = true }) {
  return (
    loading && (
      <div className='absolute left-0 right-0 bottom-0 top-0 w-screen h-screen 
        flex justify-center items-center z-9999999999999999 bg-lightGray'>
        <PulseLoader color="#72b626" size={15} margin={2} loading={loading} />
      </div>
    )
  );
}
