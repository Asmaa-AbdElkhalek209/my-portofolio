import React from 'react';

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <div className="flex justify-center content-center mt-8 gap-2 p-1">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            aria-current={isActive ? 'page' : undefined}
            disabled={isActive}
            tabIndex={0}
            className={`px-4 py-2 border rounded-full ${
              isActive ? 'bg-mainColor text-white cursor-default' : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default React.memo(Pagination);
