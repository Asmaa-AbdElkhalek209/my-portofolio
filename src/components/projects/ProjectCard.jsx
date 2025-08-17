import React from 'react';

function ProjectCard({ title, image, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View details about ${title}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="relative w-96 h-60 md:w-72 md:h-48 rounded-sm overflow-hidden shadow-lg group m-auto
        cursor-pointer bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay with title */}
      <div
        className="absolute inset-0 bg-mainColor opacity-90 flex items-center justify-center text-white 
          transition-all duration-500 ease-out translate-y-[-100%] group-hover:translate-y-0"
      >
        <h3 className="text-lg font-bold text-center px-2">{title}</h3>
      </div>

      {/* Hidden img for accessibility */}
      <img src={image} alt={title} className="sr-only" />
    </div>
  );
}

export default React.memo(ProjectCard);
