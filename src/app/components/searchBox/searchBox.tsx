import React from "react";
import "./searchBox.scss";
import Image from "next/image";

function SearchBox() {
  return (
    <div className="search-container">
      <form>
        <input type="search" placeholder="Search for anything" />
        <div  className="search-btn-container">
          <button type="submit" className="search-btn">
          <Image
          className="search-icon"
            src="/search-icon.svg"
            alt="search icon"
            width={14}
            height={14}
            priority
          />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
