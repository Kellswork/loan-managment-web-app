import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" rel="noopener noreferrer">
      <div className="logo-container">
      <Image
        src="/lendsqr.svg"
        alt="Lendsqr Logo"
        width={173.76}
        height={36}
        priority
      />
      </div>
    </Link>
  );
}

export default Logo;
