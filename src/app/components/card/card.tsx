import React from "react";
import Image from "next/image";
import "./card.scss";

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



