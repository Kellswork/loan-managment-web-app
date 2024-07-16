"use client";
import React, { useContext, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import "./page.scss";
import { Tabs } from "@/app/components/tab/tab";
import { StoreContext } from "@/app/_context-and-reducer/storeContext";
import Link from "next/link";
import { Alert } from "@/app/components/alert/alert";
import StarRating from "@/app/components/starRating/starRating";

function Page() {
  // fetc data list and update status fiunction
  const { userData, updateUserStatus } = useContext(StoreContext);
  const [showAlert, setShowAlert] = useState({
    visible: false,
    text: "",
    color: "",
  });

  // fetch the ID
  const router: { userDetails: string } = useParams();

  const userID = router.userDetails;
  // write the filter function
  const currentUser = userData.find((user) => user.general.user_id === userID);
  const truncateId = (id: string | undefined) => {
    if (id) return id.slice(0, 11);
  };

  const handleUpdateStatus = (newStatus: "Blacklisted" | "Active") => {
    updateUserStatus && updateUserStatus(userID, newStatus);

    let text: string = "";
    let color: string = "";

    if (newStatus === "Blacklisted") {
      text = "User successfully blacklisted!";
      color = "red";
    } else if (newStatus === "Active") {
      text = "User successfully activated!";
      color = "green";
    }

    setShowAlert({
      visible: true,
      text: text,
      color: color,
    });
  };

  return (
    <div className="card-table-layout">
      {showAlert.visible && <Alert color={showAlert.color} statusText={showAlert.text} />}
      <div className="user-header-back-link">
        <Link href="/dashboard/users" className="back-btn">
          <Image
            src="/back-arrow.svg"
            alt="back arrow on user details page"
            width={30}
            height={30}
            priority
          />
          Back to Users
        </Link>
        <div className="user-btn-actions">
          <h2>Users Details</h2>
          <div className="action-btn-group">
            <button
              className="btn blacklist"
              onClick={() => handleUpdateStatus("Blacklisted")}
            >
              blacklist user
            </button>
            <button
              className="btn active"
              onClick={() => handleUpdateStatus("Active")}
            >
              activate user
            </button>
          </div>
        </div>
      </div>

      <div className="user-details-tab-container">
        <div className="user-details-card">
          <div className="user-avatar-name-id">
            <Image
              src="/user-avatar.jpg"
              alt="user avatar imge"
              width={100}
              height={100}
              priority
            />
            <div className="user-name-id">
              <h3>{currentUser?.personal_information.full_name}</h3>
              <p>{truncateId(currentUser?.general.user_id)}</p>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="user-ratings">
            <h3>User’s Tier</h3>
            <p><StarRating rating={3}/></p>
          </div>
          <div className="vertical-line"></div>
          <div className="user-acc-details">
            <h3>₦{currentUser?.general.loan_amount}</h3>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <Tabs userData={currentUser} />
      </div>
    </div>
  );
}

export default Page;
