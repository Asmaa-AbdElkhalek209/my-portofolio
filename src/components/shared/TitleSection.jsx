import React from 'react'

function Titlesection({title ,higeLighted , bakgroundText}) {
  return (
    <>
    <section className="w-full bg-white hidden sm:block ">
      <div className="text-center relative mb-20">
        <h1 className="sm:text-5xl font md:text-6xl font-extrabold text-darkGray relative z-10 font-Poppins uppercase">
          {title} <span className="text-mainColor">{higeLighted}</span>
        </h1> 	
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
         sm:text-8xl font md:text-9xl font-extrabold text-lightGray pointer-events-none select-none uppercase">
          {bakgroundText}
        </span>
        </div>
    </section>
      
    </>
  )
}

export default Titlesection
