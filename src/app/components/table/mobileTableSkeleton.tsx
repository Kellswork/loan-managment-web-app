import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MobileTableSkeletonLoader = () => {
  return (
    <div className="mobile-table">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={`loading-${i}`} className="mobile-card">
          <div className="mobile-card-row">
            <div className="mobile-card-header">Organization</div>
            <div className="mobile-card-value">
              <Skeleton width={100} height={20} />
            </div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-header">Username</div>
            <div className="mobile-card-value">
              <Skeleton width={100} height={20} />
            </div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-header">Email</div>
            <div className="mobile-card-value">
              <Skeleton width={100} height={20} />
            </div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-header">Phone Number</div>
            <div className="mobile-card-value">
              <Skeleton width={100} height={20} />
            </div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-header">Date Joined</div>
            <div className="mobile-card-value">
              <Skeleton width={100} height={20} />
            </div>
          </div>
          <div className="mobile-card-row">
            <div className="mobile-card-header">Status</div>
            <div className="mobile-card-value">
              <Skeleton width={100} height={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileTableSkeletonLoader;