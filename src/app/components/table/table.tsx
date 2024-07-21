"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import "./table.scss";
import formatDate from "@/utils/helpers";
import { StoreContext } from "@/app/_context-and-reducer/storeContext";
import { thead } from "@/utils/data";
import FilterCard from "../card/FilterCard";
import Pagination from "../pagination/pagination";
import StatusCard from "../card/statusCard";
import TableSkeletonLoader from "./tableLoaderSkeleton";
import MobileTable from "./mobileTable";
import MobileTableSkeletonLoader from "./mobileTableSkeleton";

/**
 * Renders the table displaying user data with various features.
 *
 * @returns {JSX.Element} The user data table.
 */
function Table() {
  const { userData, updateUserStatus, error, loading } =
    useContext(StoreContext);

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterPosition, setFilterPosition] = useState({ x: 0, y: 0 });
  const [showCard, setShowCard] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  /**
   * Toggles the display of the filter card.
   *
   * @param {React.MouseEvent<HTMLSpanElement>} event The mouse event.
   */
  const toggleFilter = (event: React.MouseEvent<HTMLSpanElement>) => {
    const filterCardWidth = 270;
    const filterPos = event.currentTarget.getBoundingClientRect();
    const left = filterPos.left + (filterPos.width - filterCardWidth) / 2;

    setFilterPosition({ x: left, y: filterPos.bottom + window.scrollY });
    setShowFilter(!showFilter);
  };

  /**
   * Updates the status of a user.
   *
   * @param {"Blacklisted" | "Active"} newStatus The new status to set for the user.
   */
  const handleUpdateStatus = (newStatus: "Blacklisted" | "Active") => {
    if (selectedUserId) {
      if (updateUserStatus) updateUserStatus(selectedUserId, newStatus);
      setSelectedUserId("");
      setShowCard(!showCard);
    }
  };

  /**
   * Toggles the display of the status card.
   *
   * @param {React.MouseEvent<HTMLTableCellElement>} event The mouse event.
   * @param {string} userId The ID of the user.
   */
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
    return (
      <>
        <div className="table-container-skeleton">
          <TableSkeletonLoader />
        </div>
        <div className="mobile-table-container-skeleton">
          <MobileTableSkeletonLoader />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="table-container">
        <table className="resp-table">
          <thead>
            <tr>
              {thead.map((th) => (
                <th key={th} className={`thead-${th}`}>
                  {th}
                  <button type="button" onClick={toggleFilter}>
                    <Image
                      src="/filter-results-button.svg"
                      alt="filter results button"
                      width={16}
                      height={16}
                      priority
                    />
                  </button>
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
                <td className="table-item-org">
                  {data.personal_information.organization}
                </td>
                <td className="table-item-username">
                  {data.personal_information.username}
                </td>
                <td className="table-item-email">
                  {data.personal_information.email}
                </td>
                <td className="table-item-phn">
                  {data.personal_information.phone_number}
                </td>
                <td className="table-item-date">
                  {formatDate(data.general.date_joined)}
                </td>
                <td className="status">
                  <span
                    className={`status ${data.general.user_status.toLocaleLowerCase()}`}
                  >
                    {data.general.user_status}
                  </span>
                </td>
                <td
                  onClick={(event) => {
                    toggleCard(event, data.general.user_id);
                  }}
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
            userId={selectedUserId}
            top={cardPosition.y}
            left={cardPosition.x}
          />
        ) : null}
      </div>

      <MobileTable
        data={currentUsersDisplayedOnTable}
        onUpdateUserStatus={updateUserStatus ?? (() => {})}
      />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalUserData={userData.length}
      />
    </>
  );
}

export default Table;
