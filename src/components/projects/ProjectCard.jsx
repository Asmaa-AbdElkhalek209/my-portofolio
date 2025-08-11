import React from 'react';

function ProjectCard({ title, image, onClick }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      className="relative w-96 h-60 md:w-72 md:h-48 rounded-sm overflow-hidden shadow-lg group m-auto
        cursor-pointer bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="absolute inset-0 bg-mainColor bg-opacity-80 flex items-center justify-center text-white 
          transition-all duration-500 ease-out translate-y-[-100%] group-hover:translate-y-0"
      >
        <h3 className="text-lg font-bold text-center px-2">{title}</h3>
      </div>
    </div>
  );
}

export default React.memo(ProjectCard);
