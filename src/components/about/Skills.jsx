import React from 'react';
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { SkillsData } from '../../data/SkillsData';

function Skills() {
  const skills = SkillsData;

  return (
    <section className="py-10 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40">
      <h2 className="text-MediumGray font-bold text-2xl sm:text-3xl mb-10 font-open uppercase text-center">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 justify-center items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex justify-center items-center">
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textColor: "#666",
                  pathColor: "#72b626",
                  textSize: "18px",
                })}
              />
            </div>
            <p className="mt-3 sm:mt-4 font-semibold text-darkGray text-sm sm:text-base text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default React.memo(Skills);

