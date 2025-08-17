import React from 'react';
import { GraduationCap} from 'lucide-react';


export const EducationItem = React.memo(({ item }) => (
  <div className="flex mb-8 w-full">
    <div className="flex flex-col items-center">
      <div className="bg-mainColor rounded-full p-2">
        <GraduationCap className="w-5 h-5 text-white"  aria-label="Education Experience" />
      </div>
      <span className="bg-MediumGray w-[1px] h-[100%] opacity-30 inline-block"></span>
    </div>
    <div className="ml-4 font-open">
      <p className="bg-lightGray opacity-80 w-fit text-[12px] font-semibold rounded-full px-3 py-1 mb-2">
        {item.date}
      </p>
      <h4 className="capitalize text-sm md:text-[17px] text-darkGray font-medium font-Poppins mb-1">
        {item.title}
      </h4>
      <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
    </div>
  </div>
));