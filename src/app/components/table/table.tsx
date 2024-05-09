"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./table.scss";
import { FilterCard, StatusCard } from "../card/card";
import { UserDataProps, UserDetailsDataProps } from "@/utils/userDetails";


const thead = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
];

const Table = ({data}: {data: UserDataProps[] | string}) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterPosition, setFilterPosition] = useState({ x: 0, y: 0 });
  const [showCard, setShowCard] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const allUsers: UserDataProps[] = typeof data !== 'string'
  ? data.reduce((acc: UserDataProps[], curr: UserDataProps) => {
      return acc.concat(curr);
    }, []).slice(0, 20)
  : []; // concat fetch data into one array
  

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

console.log(allUsers[100])

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
          {allUsers.map((data) => (
            <tr key={data.general.user_id}>
              <td>{data.personal_information.organization}</td>
              <td>{data.personal_information.username}</td>
              <td>{data.personal_information.email}</td>
              <td>{data.personal_information.phone_number}</td>
              <td>{data.general.date_joined}</td>
              <td>{data.general.user_status}</td>
              <td onClick={toggleCard}>
                <Image
                  src="/eclipse.svg"
                  alt="view actions "
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
