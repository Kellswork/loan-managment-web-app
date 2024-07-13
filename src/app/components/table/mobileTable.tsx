import "./mobileTable.scss"; // Ensure this import path is correct
import { UserDataProps } from "@/utils/userDetails";
import "./mobileTable.scss";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/helpers";
``;
const MobileTable = ({
  data,
  onUpdateUserStatus,
}: {
  data: UserDataProps[];
  onUpdateUserStatus: (
    userId: string,
    newStatus: "Blacklisted" | "Active"
  ) => void;
}) => {
  const handleBlacklist = (userID: string) => {
    onUpdateUserStatus(userID, "Blacklisted");
    console.log("Blacklisted in mobile card was clicked");
  };

  const handleActivate = (userID: string) => {
    onUpdateUserStatus(userID, "Active");
    console.log("Active in mobile card was clicked");
  };

  return (
    <div className="mobile-table">
      {data.map((row, index) => (
        <div key={index} className="mobile-card">
          <div className="mobile-card-row">
            <div className="mobile-card-header">Organization</div>
            <div className="mobile-card-value">
              {row.personal_information.organization}
            </div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-header">Username</div>
            <div className="mobile-card-value">
              {row.personal_information.username}
            </div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-header">Email</div>
            <div className="mobile-card-value">
              {row.personal_information.email}
            </div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-header">Phone Number</div>
            <div className="mobile-card-value">
              {row.personal_information.phone_number}
            </div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-header">Date Joined</div>
            <div className="mobile-card-value">
              {formatDate(row.general.date_joined)}
            </div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-header">Status</div>
            <div className="mobile-card-value">
              <span
                className={`mobile-card-status ${row.general.user_status.toLowerCase()}`}
              >
                {row.general.user_status}
              </span>
            </div>
          </div>

          <div className="mobile-card-options">
            <Link
              href={`/dashboard/users/${row.general.user_id}`}
              className="mobile-card-option view"
            >
              <Image src="/view.svg" alt="" width={16} height={16} priority />
              <span>View</span>
            </Link>
            <div
              onClick={() => handleBlacklist(row.general.user_id)}
              className="mobile-card-option blacklist"
            >
              <Image
                src="/delete-friend.svg"
                alt=""
                width={16}
                height={16}
                priority
              />
              <span>Blacklist</span>
            </div>
            <div
              onClick={() => handleActivate(row.general.user_id)}
              className="mobile-card-option activate"
            >
              <Image
                src="/reactivate-user.svg"
                alt=""
                width={16}
                height={16}
                priority
              />
              <span>Activate</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileTable;
