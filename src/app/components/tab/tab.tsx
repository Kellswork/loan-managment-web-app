"use client";

import { UserDataProps, UserDetailsDataProps } from "@/utils/userDetails";
import React, { useState } from "react";
import "./tab.scss";

interface TabsProps {
  userData: UserDataProps | undefined;
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

const TabContent: React.FC<{ userData: UserDataProps | undefined }> = ({
  userData,
}) => {

  return (
    <div className="tab-content">
      <div className="tab-content-section">
        <h4>Personal Information</h4>
        <div className="content-details">
          <div>
            <p>Full Name</p>
            <p>{userData?.personal_information.full_name}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{userData?.personal_information.phone_number}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{userData?.personal_information.email}</p>
          </div>
          <div>
            <p>BVN</p>
            <p>{userData?.personal_information.bvn}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{userData?.personal_information.gender}</p>
          </div>
          <div>
            <p>Marital Status</p>
            <p>{userData?.personal_information.marital_status}</p>
          </div>
          <div>
            <p>Children</p>
            <p>{userData?.personal_information.children}</p>
          </div>
          <div>
            <p>Type of Residence</p>
            <p>{userData?.personal_information.type_of_residence}</p>
          </div>
        </div>
      </div>

      <div className="tab-content-section">
        <h4>Education and Employment</h4>
        <div className="content-details">
          <div>
            <p>Level of Education</p>
            <p>{userData?.education_and_employment.level_of_education}</p>
          </div>
          <div>
            <p>Employment Status</p>
            <p>{userData?.education_and_employment.employment_status}</p>
          </div>
          <div>
            <p>Sector of Employment</p>
            <p>{userData?.education_and_employment.sector_of_employment}</p>
          </div>
          <div>
            <p>Duration of Employment</p>
            <p>{userData?.education_and_employment.duration_of_employment}</p>
          </div>
          <div>
            <p>Office Email</p>
            <p></p>
          </div>
          <div>
            <p>Monthly Income</p>
            <p>
              ₦{userData?.education_and_employment.monthly_income.lower}-₦
              {userData?.education_and_employment.monthly_income.upper}
            </p>
          </div>
          <div>
            <p>Loan Repayment</p>
            <p>{userData?.education_and_employment.loan_repayment}</p>
          </div>
        </div>
      </div>

      <div className="tab-content-section">
        <h4>Socials</h4>
        <div className="content-details">
          <div>
            <p>Twitter</p>
            <p>{userData?.socials.twitter}</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>{userData?.socials.facebook}</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>{userData?.socials.instagram}</p>
          </div>
        </div>
      </div>

      <div className="tab-content-section ">
        <h4>Guarantors</h4>

        <div className="content-details guarantors">
          <div>
            <p>Full Name</p>
            <p>{userData?.guarantor.full_name}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{userData?.guarantor.phonenumber}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{userData?.guarantor.phonenumber}</p>
          </div>
          <div>
            <p>Relationship</p>
            <p>{userData?.guarantor.relationship}</p>
          </div>
        </div>

        {/* {userData.guarantor.map((guarantor, index) => (
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
        ))} */}
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
