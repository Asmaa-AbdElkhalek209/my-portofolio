import React, { useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import imgPortofolio from "../../assets/imgPortofolio.webp";

function HeroSection() {
  const navigate = useNavigate();

  //  useCallback 
  const handleClick = useCallback(() => {
    navigate('/about');
  }, [navigate]);

  return (
    <section
      className='w-full h-screen sm:flex-col lg:bg-transparent 
                 lg:grid lg:grid-cols-12 grid-rows-1 lg:gap-10 justify-center content-center relative'
    >
      {/* bg-Italic */}
      <div
        className='bg-mainColor h-[200%] w-full hidden lg:block fixed -left-[70%] -rotate-[15deg] z-0 top-0'
      ></div>

      {/* profile image */}
      <div
        className='col-span-0 lg:col-span-5 hidden sm:flex justify-center items-center m-auto 
                   z-10 sm:w-72 sm:h-72 lg:h-[100%] lg:w-[92%] sm:my-6 lg:my-0'
      >
        <img
          src={imgPortofolio}
          alt="Asmaa AbdElkhalek - Frontend Developer"
          loading="lazy" 
          width="400"
          height="400"
          className="lg:h-[90%] lg:w-[90%] xl:w-[80%] object-fill shadow-darkGray shadow-md
                     lg:rounded-md sm:rounded-full sm:w-[100%] sm:h-[100%]"
        />
      </div>

      {/* content */}
      <div
        className='col-span-12 lg:col-span-6 flex flex-col justify-center z-10 px-5 md:ms-5'
      >
        <div
          className="w-full flex sm:justify-center sm:content-center lg:justify-start lg:content-normal"
        >
          <span
            className="hidden lg:block bg-mainColor lg:w-[8%] lg:h-[6%] xl:w-[5%] xl:h-[6%] rounded-md mr-5 relative top-6"
          ></span>

          <h1
            className='uppercase font-Poppins font-[600] text-3xl sm:text-center lg:text-left 
                       lg:text-4xl text-mainColor mb-6 whitespace-nowrap'
          >
            I'm Asmaa AbdElkhalek <br />
            <span className='text-darkGray font-[500] text-2xl lg:text-3xl xl:text-3xl ms-2'>
              Frontend Developer
            </span>
          </h1>
        </div>

        <p
          className="text-[1rem] font-open opacity-75 p-2 sm:text-center lg:text-left"
          style={{ lineHeight: 3 }}
        >
          I'm a passionate front-end developer from Egypt, dedicated to building modern,
          responsive, and user-friendly web interfaces. I love crafting experiences
          that are both visually appealing and highly functional to improve the digital lives of users.
        </p>

        <div className='mt-6 mb-6 sm:flex sm:justify-center lg:block'>
          <Button
            title="More About Me"
            icon={ArrowLeft}
            handelClick={handleClick}
            type="button"
            aria-label="Go to About section"
          />
        </div>
      </div>
    </section>
  );
}
// export default HeroSection;

// React.memo لتجنب إعادة الريندر
export default React.memo(HeroSection);
