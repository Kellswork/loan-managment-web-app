import React from "react";
import Image from "next/image";
import "./pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="pagination-show">
        <p>showing</p>
        <div className="pagination-picker">
          <span>100</span>
          <Image
            src="/sidebar/dropdown-outline.svg"
            alt=""
            width={14}
            height={14}
            priority
          />
        </div>
        <p>out of 100</p>
      </div>
      <div className="pagination-row">
        <div className="arrow-background">
          <Image
            src="/arrow_prev.svg"
            alt="previous icon for pagination navigation"
            width={14}
            height={14}
            priority
          />
        </div>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
          <li>15</li>
          <li>16</li>
        </ul>
        <div className="arrow-background">
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
