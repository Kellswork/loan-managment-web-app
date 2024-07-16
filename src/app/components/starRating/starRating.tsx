import React from "react";
import Image from "next/image";
import "./starRating.scss";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const maxRating = 3;

  const stars = Array.from({ length: maxRating });

  return (
    <div className="star-rating">
      {stars.map((_, index) => (
        <Image
          className="star-rating"
          key={index}
          src={index < rating ? "/star-filled.jpg" : "/star-unfilled.jpg"}
          alt={index < rating ? "Filled Star" : "Unfilled Star"}
          width={24}
          height={24}
          priority
        />
      ))}
    </div>
  );
};

export default StarRating;
