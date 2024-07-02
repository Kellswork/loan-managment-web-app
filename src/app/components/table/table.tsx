"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import "./table.scss";
import { FilterCard } from "../card/FilterCard";
import { UserDataProps } from "@/utils/userDetails";
import Pagination from "../pagination/pagination";
import { formatDate } from "@/utils/helpers";
import { StoreContext } from "@/app/_context-and-reducer/storeContext";
import { StatusCard } from "../card/statusCard";
import { thead } from "@/utils/data";
import TableSkeletonLoader from "./tableLoaderSkeleton";

const Table = () => {
  const { userData, updateUserStatus, error, loading } =
    useContext(StoreContext);

  console.log("h", userData);

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterPosition, setFilterPosition] = useState({ x: 0, y: 0 });
  const [showCard, setShowCard] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  const toggleFilter = (event: React.MouseEvent<HTMLSpanElement>) => {
    const filterCardWidth = 270;
    const filterPos = event.currentTarget.getBoundingClientRect();
    const left = filterPos.left + (filterPos.width - filterCardWidth) / 2;

    setFilterPosition({ x: left, y: filterPos.bottom + window.scrollY });
    setShowFilter(!showFilter);
  };

  const handleUpdateStatus = (newStatus: "Blacklisted" | "Active") => {
    if (selectedUserId) {
      updateUserStatus && updateUserStatus(selectedUserId, newStatus);
      setSelectedUserId("");
      setShowCard(!showCard);
    }
  };

  const toggleCard = (
    event: React.MouseEvent<HTMLTableCellElement>,
    userId: string
  ) => {
    const cellPos = event.currentTarget.getBoundingClientRect();
    const offsetX = cellPos.left - cellPos.width / 2 - 100;
    const offsetY = cellPos.top + window.scrollY;
    setCardPosition({ x: offsetX, y: offsetY });
    setShowCard(!showCard);
    setSelectedUserId(userId);
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordPerPage = 9;
  const totalPages = Math.ceil(userData.length / recordPerPage);

  // calculate the start and end index for the page
  const startIndex = (currentPage - 1) * recordPerPage;

  const endIndex = Math.min(startIndex + recordPerPage, userData.length);
  const currentUsersDisplayedOnTable = Array.isArray(userData)
    ? userData.slice(startIndex, endIndex)
    : [];

  if (loading) {
    return <TableSkeletonLoader />;
  }
  return (
    <>
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
            {error && (
              <tr className="error-row">
                <td colSpan={7} className="error-message">
                  There was a problem fetching the data. Please try again later.
                </td>
              </tr>
            )}
            {currentUsersDisplayedOnTable.map((data) => (
              <tr key={data.general.user_id}>
                <td>{data.personal_information.organization}</td>
                <td>{data.personal_information.username}</td>
                <td>{data.personal_information.email}</td>
                <td>{data.personal_information.phone_number}</td>
                <td>{formatDate(data.general.date_joined)}</td>
                <td className="status">
                  <span
                    className={`status ${data.general.user_status.toLocaleLowerCase()}`}
                  >
                    {data.general.user_status}
                  </span>
                </td>
                <td
                  onClick={(event) => toggleCard(event, data.general.user_id)}
                >
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
        {showFilter ? (
          <FilterCard top={filterPosition.y} left={filterPosition.x} />
        ) : null}
        {showCard ? (
          <StatusCard
            onUpdateUserStatus={handleUpdateStatus}
            userId={selectedUserId!}
            top={cardPosition.y}
            left={cardPosition.x}
          />
        ) : null}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalUserData={userData.length}
      />
    </>
  );
};

export default Table;
