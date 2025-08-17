import React from 'react';
import { EducationItems, ExperienceItems } from '../../data/ExperienceData';
import { ExperienceItem } from './ExperienceItem';
import { EducationItem } from './EducationItem';

function Experience() {
  return (
    <section className="py-2 px-10 lg:px-11 xl:px-40 font-open">
      <h2 className="text-MediumGray font-Poppins font-[600] text-xl md:text-2xl lg:text-3xl mb-10 uppercase md:text-center">
        Experience & Education
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          {ExperienceItems.map((item) => (
            <ExperienceItem key={item.id || item.title} item={item} />
          ))}
        </div>

        <div>
          {EducationItems.map((item) => (
            <EducationItem key={item.id || item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center w-full mt-10">
        <span className="bg-MediumGray w-[60%] sm:w-[40%] md:w-[30%] h-[1px] inline-block opacity-30"></span>
      </div>
    </section>
  );
}

export default React.memo(Experience);
