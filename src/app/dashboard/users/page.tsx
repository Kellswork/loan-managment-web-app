import React from "react";
// import {Card} from "../components/card/card";
// import Table from "../components/table/table";
// import Pagination from "../components/pagination/pagination";
import Image from "next/image";
import "./page.scss";
import { Tabs } from "@/app/components/tab/tab";
import { userDetailsData } from "@/utils/userDetails";

function Page() {
  return (
    <div className="card-table-layout">
      <div className="user-header-back-link">
        <p className="back-btn">
          <Image
            src="/back-arrow.svg"
            alt="back arrow on user details page"
            width={30}
            height={30}
            priority
          />
          Back to Users
        </p>
        <div className="user-btn-actions">
          <h2>Users Details</h2>
          <div className="action-btn-group">
            <button className="btn blacklist">blacklist user</button>
            <button className="btn active">active user</button>
          </div>
        </div>
      </div>

      <div className="user-details-tab-container">
        <div className="user-details-card">
          <Image
            src="/user-avatar.jpg"
            alt="user avatar imge"
            width={100}
            height={100}
            priority
          />
          <h3>Grace Effiom</h3>
          <p>LSQFf587g90</p>
          <div>
            <p>User’s Tier</p>
          </div>
          <div>
            <h3>₦200,000.00</h3>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <Tabs userData={userDetailsData} />
      </div>
    </div>
  );
}

export default Page;
