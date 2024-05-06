import React from "react";
import Image from "next/image";
import "./card.scss";
import Link from "next/link";

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

export const FilterCard = () => (
  <div>
    <div>
      <label htmlFor="organization">
        Organization
        <select name="" id="">
          <option value="">select</option>
        </select>
      </label>
      <label htmlFor="username">
        Username
        <input type="text" name="" id="" />
      </label>
      <label htmlFor="email">
        Email
        <input type="text" name="" id="" />
      </label>
      <label htmlFor="date">
        Date
        <input type="date" name="" id="" />
      </label>
      <label htmlFor="email">
        Phone Number
        <input type="text" name="" id="" />
      </label>
      <label htmlFor="Status">
        Status
        <select name="" id="">
          <option value="">select</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="blacklisted">Blacklisted</option>
        </select>
      </label>
    </div>
    <div>
      <button>Reset</button>
      <button>Filter</button>
    </div>
  </div>
);

export const StatusCard = () => (
  <div className={`status-card`}>
    <Link href="/" >
    <Image
      className=" "
      src="/view.svg"
      alt= ""
      width={16}
      height={16}
      priority
    />
    <span>View Details</span>
  </Link>

  <Link href="/" className={`status-card`}>
    <Image
      className=" "
      src="/delete-friend.svg"
      alt= ""
      width={16}
      height={16}
      priority
    />
    <span>Blacklist User</span>
  </Link>
  <Link href="/" className={`status-card`}>
    <Image
      className=" "
      src="/reactivate-user.svg"
      alt= ""
      width={16}
      height={16}
      priority
    />
    <span>Activate User</span>
  </Link>
  </div>
);
