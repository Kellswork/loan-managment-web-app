import React from "react";
import Image from "next/image";

export const Card = () => (
  <div className="card-container">
    <div className="card-item">
      <Image
        src="/users-ellipse.svg"
        alt="users ellipse icon svg"
        width={40}
        height={40}
        priority
      />
      <p>users</p>
      <p>2,453</p>
    </div>
    <div className="card-item">
      <Image
        src="/active-users.svg"
        alt="users ellipse icon svg"
        width={40}
        height={40}
        priority
      />
      <p>active users</p>
      <p>2,453</p>
    </div>
    <div className="card-item">
      <Image
        src="/users-with-loan.svg"
        alt="users with loan svg"
        width={40}
        height={40}
        priority
      />
      <p>users with loans</p>
      <p>12,453</p>
    </div>
    <div className="card-item">
      <Image
        src="/users-with-savings.svg"
        alt="users ewith savings svg"
        width={40}
        height={40}
        priority
      />
      <p>users with savings</p>
      <p>102,453</p>
    </div>
  </div>
);

export const FilterCard = ({ top, left }: { top: number; left: number }) => (
  <div
    className="filter-card-container"
    style={{ top: `${top}px`, left: `${left}px` }}
  >
    <form className="flex-container">
      <div className="form-fields">
        <div className="form-field-item">
          <label htmlFor="organization">Organization</label>
          <select name="" id="">
            <option value="">Select</option>
          </select>
        </div>
        <div className="form-field-item">
          <label htmlFor="username">Username</label>
          <input placeholder="User" type="text" name="" id="" />
        </div>
        <div className="form-field-item">
          <label htmlFor="email">Email</label>
          <input placeholder="Email" type="text" name="" id="" />
        </div>
        <div className="form-field-item">
          <label htmlFor="date">Date</label>
          <input placeholder="Date" type="date" name="" id="" />
        </div>
        <div className="form-field-item">
          <label htmlFor="phone number">Phone Number </label>
          <input placeholder="Phone Number" type="text" name="" id="" />
        </div>
        <div className="form-field-item">
          <label htmlFor="Status">Status </label>
          <select name="" id="">
            <option value="">Select</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>
      </div>
      <div className="form-field-btn-group">
        <button className="btn outline">Reset</button>
        <button className="btn filled">Filter</button>
      </div>
    </form>
  </div>
);


