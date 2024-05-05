import React from "react";
import Image from "next/image";
import { sidebarData } from "../../utils/data";
import "./sidebar.scss"

const TextIcon = ({
  text,
  icon,
  alt,
}: {
  text: string;
  icon: string;
  alt: string;
}) => (
  <div className="sidebar-text-icon">
    <Image
      className="sidebar-icon"
      src={`/sidebar/${icon}`}
      alt={alt}
      width={16}
      height={16}
      priority
    />
    <span>{text}</span>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
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
      <TextIcon text="dashboard" icon="home.svg" alt="dashboard icon" />

      {sidebarData.map((data) => (
        <div key={data.title} className="sidebar-nav-links">
          <h4>{data.title}</h4>
          <ul>
            {data.linkList.map((link) => (
              <li key={link.name}>
                <TextIcon
                  text={link.name}
                  icon={link.icon}
                  alt={link.name + " svg icon"}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
