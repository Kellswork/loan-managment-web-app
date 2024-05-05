import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <a href="/" rel="noopener noreferrer">
      <Image
        src="/lendsqr.svg"
        alt="Lendsqr Logo"
        width={173.76}
        height={36}
        priority
      />
    </a>
  );
};

export default Logo;
