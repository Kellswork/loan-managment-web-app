"use client";

import React from "react";
import Image from "next/image";
import "./pagination.scss";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  totalUserData: number;
  setCurrentPage: (page: number) => void;
}

/**
 * Pagination component to navigate through pages of data.
 * @param {number} totalPages - Total number of pages.
 * @param {number} currentPage - Current active page.
 * @param {number} totalUserData - Total number of user data items.
 * @param {Function} setCurrentPage - Function to set the current page.
 * @returns {JSX.Element} The rendered pagination component.
 */
function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
  totalUserData,
}: PaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i += 1) pageNumbers.push(i);

  // handl prev and next
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle page selection from dropdown
  const handlePageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(parseInt(e.target.value, 10));
  };

  console.log(currentPage);

  return (
    <div
      className="pagination-container"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <div className="pagination-show">
        <p>Showing</p>
        <div className="pagination-picker">
          <select
            aria-label="Select Page"
            value={currentPage}
            onChange={handlePageSelect}
          >
            {pageNumbers.map((pageNumber) => (
              <option key={pageNumber} value={pageNumber}>
                {pageNumber}
              </option>
            ))}
          </select>
        </div>
        <p>out of {totalUserData}</p>
      </div>

      <div className="pagination-row">
        <button
          disabled={currentPage === 1}
          type="button"
          onClick={prevPage}
          className="arrow-background"
          aria-label="Previous Page"
        >
          <Image
            src="/arrow_next.svg"
            alt="previous icon for pagination navigation"
            width={14}
            height={14}
            priority
            className="prev-icon"
          />
        </button>

        {
          <ul className="pagination-list" aria-live="polite">
            {pageNumbers.map((pageNumber) => {
              if (
                pageNumber === 1 ||
                pageNumber === currentPage ||
                pageNumber === totalPages ||
                pageNumber === totalPages - 1 ||
                (pageNumber >= currentPage - 3 && pageNumber <= currentPage + 3)
              ) {
                return (
                  <button
                    type="button"
                    aria-current="page"
                    className={
                      pageNumber === currentPage
                        ? "pagination-page active"
                        : "pagination-page"
                    }
                    key={pageNumber}
                    onClick={() => {
                      setCurrentPage(pageNumber);
                    }}
                  >
                    {pageNumber}
                  </button>
                );
              }
              // display elipse for pages not shown
              if (
                pageNumber === currentPage - 4 ||
                pageNumber === currentPage + 4
              ) {
                return <span key={pageNumber}>...</span>;
              }
              return null;
            })}
          </ul>
        }

        <button
          disabled={currentPage === totalPages}
          type="button"
          onClick={nextPage}
          className="arrow-background"
        >
          <Image
            src="/arrow_next.svg"
            alt="next icon for pagination navigation"
            width={14}
            height={14}
            priority
          />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
