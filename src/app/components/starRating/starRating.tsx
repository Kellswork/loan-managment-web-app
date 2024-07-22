import React from "react";
import Image from "next/image";
import "./starRating.scss";

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  const maxRating = 3;

  const stars = Array.from({ length: maxRating });

  return (
    <span className="star-rating">
      {stars.map((_,index) => (
        <Image
          className="star-rating"
          // eslint-disable-next-line react/no-array-index-key
          key={`star-${index}-${maxRating}`}
          src={index < rating ? "/star-filled.jpg" : "/star-unfilled.jpg"}
          alt={index < rating ? "Filled Star" : "Unfilled Star"}
          width={24}
          height={24}
          priority />
      ))}
    </span>
  );
}

export default StarRating;
