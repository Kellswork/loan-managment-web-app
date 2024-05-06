"use client";

import React, { useState } from "react";
import { tableData } from "../../../utils/data";
import Image from "next/image";
import "./table.scss";
import { FilterCard, StatusCard } from "../card/card";

const thead = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];
const Table = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterPosition, setFilterPosition] = useState({ x: 0, y: 0 });
  const [showCard, setShowCard] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  const toggleFilter = (event: React.MouseEvent<HTMLSpanElement>) => {
    const filterCardWidth = 270
    const filterPos = event.currentTarget.getBoundingClientRect();
    const left = filterPos.left + (filterPos.width - filterCardWidth) / 2;

    setFilterPosition({ x: left, y: filterPos.bottom + window.scrollY  });
    setShowFilter(!showFilter);
    console.log(filterPosition.x, filterPosition.y)
  };

  const toggleCard = (event: React.MouseEvent<HTMLTableCellElement>) => {
    const cellPos = event.currentTarget.getBoundingClientRect();
    const offsetX = cellPos.left - cellPos.width / 2 - 100;
    const offsetY = cellPos.top - window.scrollY; // Adjusted to use cellPos.top
    setCardPosition({ x: offsetX, y: offsetY });
    setShowCard(!showCard);
  };

  return (
    <div className="table-container">
      <table className="resp-table">
        <thead>
          <tr>
            {thead.map((th) => (
              <th key={th}>
                {th}
                <span onClick={toggleFilter}>
                  <Image
                    src="/filter-results-button.svg"
                    alt="filter results button"
                    width={16}
                    height={16}
                    priority
                  />
                </span>
              </th>
            ))}
          </tr>
        
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.email}>
              <td>{data.organization}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.phonenumber}</td>
              <td>{data.dateJoined}</td>
              <td>{data.status}</td>
              <td onClick={toggleCard}>
                <Image
                  src="/eclipse.svg"
                  alt="vie actions "
                  width={16}
                  height={16}
                  priority
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showFilter ? <FilterCard top={filterPosition.y} left={filterPosition.x}/> : null}
      {showCard ? <StatusCard top={cardPosition.y} left={cardPosition.x}/> : null}
     
    </div>
  );
};

export default Table;
