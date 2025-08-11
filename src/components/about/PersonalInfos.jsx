import React from 'react';
import { Plus, Download } from "lucide-react";
import Titlesection from '../shared/TitleSection';
import { PersonalInfos1, PersonalInfos2 } from '../../data/PersonalInfosData';

const stats = [
  {
    value: '3',
    label: (
      <>
        Years of<br />
        Experience
      </>
    ),
  },
  {
    value: '10',
    label: (
      <>
        Projects<br />
        Completed
      </>
    ),
  },
  {
    value: '5',
    label: (
      <>
        Technologies<br />
        Used
      </>
    ),
  },
  {
    value: '2',
    label: (
      <>
        Companies<br />
        Worked With
      </>
    ),
  },
];

function PersonalInfos() {
  return (
    <section className="w-full min-h-screen bg-white py-16 px-8">
      <Titlesection title="ABOUT" higeLighted="ME" bakgroundText="RESUME" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-5 py-5 lg:px-24 xl:px-32">

        <div className="rounded-lg">
          <h2 className="text-MediumGray font-bold text-3xl mb-5 p-3 font-open">PERSONAL INFOS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 p-1">

            <ul className="space-y-2 p-1">
              {PersonalInfos1.map((info) => (
                <li key={info.title} className='mb-5 font-open'>
                  <span className="text-MediumGray opacity-[0.8]">{info.title}: </span>
                  <span className="text-gray-800">{info.description}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-2 p-1">
              {PersonalInfos2.map((info) => (
                <li key={info.title} className='mb-5 font-open'>
                  <span className="text-MediumGray opacity-[0.8]">{info.title}: </span>
                  <span className="text-gray-800">{info.description}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-start mt-10">
              <a
                href="Asmaa-Mohamed-AbdElkhalek-cv2025 (1).pdf"
                download
                className="group flex items-center gap-3 bg-mainColor text-white px-7 py-4 rounded-full shadow-lg text-sm font-open font-[600]
                  hover:bg-white hover:text-mainColor border-2 border-mainColor transition duration-300"
              >
                <span className="font-medium tracking-wide uppercase whitespace-nowrap">Download CV</span>
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((item) => (
              <div
                key={item.value}
                className="shadow-sm border rounded-md py-3 px-9"
              >
                <div className="flex items-center font-open text-[3rem] font-extrabold text-mainColor">
                  <h2>{item.value}</h2>
                  <Plus />
                </div>

                <div className="flex mt-5">
                  <span className="bg-darkGray w-[13%] h-[2px] inline-block mr-4 relative top-3"></span>
                  <p className="uppercase text-md text-darkGray font-open">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className='flex justify-center items-center w-full mt-10'>
        <span className="bg-MediumGray w-[30%] h-[1.1px] inline-block mr-4 relative top-3 opacity-[0.3]"></span>
      </div>
    </section>
  );
}

export default React.memo(PersonalInfos);
