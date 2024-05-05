import React from "react";
import Image from "next/image";
import "./navigation.scss";
import SearchBox from "../searchBox/searchBox";
import Logo from "../logo";

function Nav() {
  return (
    <div className="nav-container">
      <Logo />
      <SearchBox />
      <div className="nav-links">
        <p>Docs</p>
        <div>
          <Image
            className="notification-bell"
            src="/notification-bell.svg"
            alt="notification bell icon"
            width={26}
            height={26}
            priority
          />
        </div>
        <div>
        <Image
            className="avatar"
            src="/avatar.jpg"
            alt="user image"
            width={60}
            height={60}
            priority
          />
        </div>
        <div className="username">
          <span>Adedeji</span>
          <Image
            className="dropdown-icon"
            src="/dropdown.svg"
            alt="dropdown icon"
            width={24}
            height={24}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
