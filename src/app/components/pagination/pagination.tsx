"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./pagination.scss";


interface PaginationProps {
  totalPages: number;
  currentPage: number;
  totalUserData: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  totalUserData
}: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);


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
    setCurrentPage(parseInt(e.target.value));
  }

  return (
    <div className="pagination-container">
      <div className="pagination-show">
      <p>
          Showing 
        </p>
        <div className="pagination-picker">
          <select value={currentPage} onChange={handlePageSelect}>
            {pageNumbers.map((pageNumber, index) => (
              <option key={pageNumber} value={pageNumber}>
                {pageNumber}
              </option>
            ))}
          </select>
          
          {/* TODO <Image
            src="/sidebar/dropdown-outline.svg"
            alt=""
            width={14}
            height={14}
            priority
          /> */}
        </div>
        <p>out of {totalUserData}</p>
      </div>

      <div className="pagination-row">
        <div onClick={prevPage} className="arrow-background">
          <Image
            src="/arrow_prev.svg"
            alt="previous icon for pagination navigation"
            width={14}
            height={14}
            priority
          />
        </div>

        {
          <ul className="ul">
            {pageNumbers.map((pageNumber, index) => {
              if (
                pageNumber === 1 ||
                pageNumber === currentPage ||
                pageNumber == totalPages ||
                pageNumber == totalPages - 1 ||
                (pageNumber >= currentPage - 3 && pageNumber <= currentPage + 3)
              ) {
                return (
                  <li
                    className={pageNumber === currentPage ? "active" : ""}
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </li>
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

        <div onClick={nextPage} className="arrow-background">
          <Image
            src="/arrow_next.svg"
            alt="previous icon for pagination navigation"
            width={14}
            height={14}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;

