"use client";
import React, { useState } from "react";
import Image from "next/image";
import { sidebarData } from "../../../utils/data";
import "./sidebar.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const TextIcon = ({
  text,
  icon,
  alt,
  link,
  classname,
}: {
  text: string;
  icon: string;
  alt: string;
  link: string;
  classname?: string;
}) => (
  <Link href={`${link}`} className={`sidebar-text-icon ${classname || ""}`}>
    <Image
      className="sidebar-icon"
      src={`/sidebar/${icon}`}
      alt={alt}
      width={16}
      height={16}
      priority
    />
    <span>{text}</span>
  </Link>
);

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const isDashboardActive = (link: string) => pathname === link;
  // sidebar naviagtion /users should be active when a user navigates to /users/userdetails
  const currentLink = pathname.split("/")[2];
  const isActive = (link: string) => link.includes(currentLink);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };
  return (
    <>
      <div
        onClick={toggleSidebar}
        className={`sidebar-icon-container ${isSidebarOpen ? "hide-icon" : ""}`}
      >
        <Image
          className="sidebar-icon"
          src="/sidebar/show-sidepanel.jpg"
          alt="dropdown icon"
          width={40}
          height={40}
          priority
        />
      </div>
      <div
        onClick={toggleSidebar}
        className={`sidebar-icon-container-hide ${
          !isSidebarOpen ? "hide-icon" : ""
        }`}
      >
        <Image
          className="sidebar-icon"
          src="/sidebar/hide-sidepanel.jpg"
          alt="dropdown icon"
          width={40}
          height={40}
          priority
        />
      </div>
      <aside className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-org">
          <Image
            src="/sidebar/briefcase.svg"
            alt="briefcase icon"
            width={16}
            height={16}
            priority
          />
          <span>Switch Organization</span>
          <Image
            className="dropdown-icon"
            src="/sidebar/dropdown-outline.svg"
            alt="dropdown icon"
            width={14}
            height={14}
            priority
          />
        </div>
        <div
          className={`dashboard-link ${
            isDashboardActive("/dashboard") && "active"
          }`}
        >
          <TextIcon
            link="/dashboard"
            text="dashboard"
            icon="home.svg"
            alt="dashboard icon"
          />
        </div>

        {sidebarData.map((data) => (
          <div key={data.title} className="sidebar-nav-links">
            <h4>{data.title}</h4>
            <ul>
              {data.linkList.map((link) => (
                <li
                  key={link.name}
                  className={`${isActive(link.link) && "active"}`}
                >
                  <TextIcon
                    text={link.name}
                    icon={link.icon}
                    alt={link.name + " svg icon"}
                    link={link.link}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
        <hr />
        <div className="sidebar-nav-links logout" onClick={handleLogout}>
          <TextIcon
            link="#"
            text="Logout"
            icon="sign-out.svg"
            alt="logout link"
          />
          <p>v1.2.0</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
