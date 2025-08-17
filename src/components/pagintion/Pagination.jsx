import React from 'react';

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <nav className="flex justify-center content-center mt-8 gap-2 p-1" aria-label="Pagination">
      {/* Previous Button */}
      {/* <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className="px-3 py-2 border rounded-full bg-white text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ‹
      </button> */}

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Go to page ${page}`}
            aria-disabled={isActive}
            className={`px-4 py-2 border rounded-full ${
              isActive
                ? 'bg-mainColor text-white cursor-default'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      {/* <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        className="px-3 py-2 border rounded-full bg-white text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ›
      </button> */}
    </nav>
  );
}

export default React.memo(Pagination);
