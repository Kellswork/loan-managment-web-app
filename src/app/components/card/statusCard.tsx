import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import "./card.scss";


export const StatusCard = ({ top, left, userId, onUpdateUserStatus }: { top: number; left: number; userId: string, onUpdateUserStatus: (newStatus: "Blacklisted" | "Active") => void }) => {

  const handleBlacklist = () => {
    onUpdateUserStatus("Blacklisted");
  };

  const handleActivate = () => {
    onUpdateUserStatus("Active");
  };


  return (
    <div className="status-card-container" style={{ top: `${top}px`, left: `${left}px` }}>
      <div className="items">
        <Link href={`/dashboard/users/${userId}`} className="item">
          <Image src="/view.svg" alt="" width={16} height={16} priority />
          <span>View Details</span>
        </Link>
  
        <div onClick={handleBlacklist} className="item" >
          <Image
            src="/delete-friend.svg"
            alt=""
            width={16}
            height={16}
            priority />
          <span>Blacklist User</span>
        </div>
        <div onClick={handleActivate} className="item" >
          <Image
            src="/reactivate-user.svg"
            alt=""
            width={16}
            height={16}
            priority />
          <span>Activate User</span>
        </div>
      </div>
    </div>
  );
}
