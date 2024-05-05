import React from "react";
import Image from "next/image";
import "./card.scss";

const Card = () => {
  return (
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
          src="/users-ellipse.svg"
          alt="users ellipse icon svg"
          width={40}
          height={40}
          priority
        />
        <p>users</p>
        <p>2,453</p>
      </div>
    </div>
  );
};

export default Card;
