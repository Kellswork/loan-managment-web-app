import React from "react";
import Image from "next/image";
import "./navigation.scss";
import SearchBox from "../searchBox/searchBox";
import Logo from "../logo";

function Nav() {
  return (
    <div className="nav-container">
      <Logo />
      <div className="search-links-container">
        <SearchBox />
        <div className="nav-links">
          <p className="nav-links-docs">Docs</p>
          <div className="nav-links-bell">
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
    </div>
  );
}

export default Nav;
