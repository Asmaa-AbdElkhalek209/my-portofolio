import React from 'react';
import { Code, FileText, SquareArrowOutUpRight, Link } from 'lucide-react';

function ModalCard({ selectedProject }) {
  return (
    <>
      {selectedProject && (
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box max-w-2xl p-6 relative">
            {/* Title */}
            <h3 className="font-bold text-3xl uppercase text-mainColor text-center mb-6">
              {selectedProject.title}
            </h3>

            {/* Description */}
            <div className="mb-5 flex gap-1">
              <FileText className="w-8 h-8 text-darkGray opacity-85" />
              <p className="text-darkGray pl-2 font-open font-semibold">
                <span className="text-darkGray opacity-85 font-normal pr-2">
                  Description:
                </span>
                {selectedProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-5 flex gap-1">
              <Code className="text-darkGray opacity-85 w-5 h-5" />
              <p className="text-darkGray pl-2 font-open font-semibold">
                <span className="text-darkGray opacity-85 font-normal pr-2">
                  Technologies:
                </span>
                {selectedProject.technologies.map((tec, index) => (
                  <span key={index} className="ml-1">{tec} </span>
                ))}
              </p>
            </div>

            {/* Links */}
            {/* <div className="grid grid-cols-2 gap-4 mb-6 px-5"> */}
            <div className="flex gap-4 mb-6 px-5">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-100 py-2 rounded hover:bg-gray-200"
              >
                <span className="flex items-center justify-center gap-2 text-gray-700 font-medium text-sm">
                  <Link /> Source Code
                </span>
              </a>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-100 py-2 rounded hover:bg-gray-200"
              >
                <span className="flex items-center justify-center gap-2 text-gray-700 font-medium text-sm">
                  <SquareArrowOutUpRight /> Live Demo
                </span>
              </a>
            </div>


            {/* Image */}
            <div className="w-full cursor-pointer">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} Screenshot`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </a>
            </div>

            {/* Close button */}
            <form method="dialog">
              <button
                className="absolute right-4 top-4 text-darkGray opacity-75
                           font-bold md:font-extrabold text-xl lg:text-2xl 
                           p-3 cursor-pointer"
              >
                ✕
              </button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}

export default React.memo(ModalCard);
