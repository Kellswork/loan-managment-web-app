"use client";

import { UserDetailsDataProps } from "@/utils/userDetails";
import React, { useState } from "react";
import "./tab.scss";

interface TabsProps {
  userData: UserDetailsDataProps;
}

const TabButtons = () => {
  return (
    <div className="tab-header">
      <button className="tab active">General Details</button>
      <button className="tab">Documents</button>
      <button className="tab">Bank Details</button>
      <button className="tab">Loans</button>
      <button className="tab">Savings</button>
      <button className="tab">App and System</button>
    </div>
  );
};

const TabContent: React.FC<{ userData: UserDetailsDataProps }> = ({
  userData,
}) => {
  const [activeTab, setActiveTab] = useState<string>("General Details");

  return (
    <div className="tab-content">
      <div className="tab-content-section">
        <h4>Personal Information</h4>
        <div className="content-details">
          <div>
            <p>Full Name</p>
            <p>{userData.personalInformation.fullName}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{userData.personalInformation.phoneNumber}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{userData.personalInformation.emailAddress}</p>
          </div>
          <div>
            <p>BVN</p>
            <p>{userData.personalInformation.bvn}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{userData.personalInformation.gender}</p>
          </div>
          <div>
            <p>Marital Status</p>
            <p>{userData.personalInformation.maritalStatus}</p>
          </div>
          <div>
            <p>Children</p>
            <p>{userData.personalInformation.children}</p>
          </div>
          <div>
            <p>Type of Residence</p>
            <p>{userData.personalInformation.typeOfResidence}</p>
          </div>
        </div>
      </div>

      <div className="tab-content-section">
        <h4>Education and Employment</h4>
        <div className="content-details">
          <div>
            <p>Level of Education</p>
            <p>{userData.educationAndEmployment.levelOfEducation}</p>
          </div>
          <div>
            <p>Employment Status</p>
            <p>{userData.educationAndEmployment.employmentStatus}</p>
          </div>
          <div>
            <p>Sector of Employment</p>
            <p>{userData.educationAndEmployment.sectorOfEmployment}</p>
          </div>
          <div>
            <p>Duration of Employment</p>
            <p>{userData.educationAndEmployment.durationOfEmployment}</p>
          </div>
          <div>
            <p>Office Email</p>
            <p>{userData.educationAndEmployment.officeEmail}</p>
          </div>
          <div>
            <p>Monthly Income</p>
            <p>{userData.educationAndEmployment.monthlyIncome}</p>
          </div>
          <div>
            <p>Loan Repayment</p>
            <p>{userData.educationAndEmployment.loanRepayment}</p>
          </div>
        </div>
      </div>

      <div className="tab-content-section">
        <h4>Socials</h4>
        <div className="content-details">
          <div>
            <p>Twitter</p>
            <p>{userData.socials.twitter}</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>{userData.socials.facebook}</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>{userData.socials.instagram}</p>
          </div>
        </div>
      </div>

      <div className="tab-content-section ">
        <h4>Guarantors</h4>

        {userData.guarantors.map((guarantor, index) => (
          <div className="content-details guarantors" key={index}>
            <div>
              <p>Full Name</p>
              <p>{guarantor.fullName}</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>{guarantor.phoneNumber}</p>
            </div>
            <div>
              <p>Email Address</p>
              <p>{guarantor.emailAddress}</p>
            </div>
            <div>
              <p>Relationship</p>
              <p>{guarantor.relationship}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Tabs: React.FC<TabsProps> = ({ userData }) => {
  return (
    <div className="tabs">
      <TabButtons />
      <TabContent userData={userData} />
    </div>
  );
};
