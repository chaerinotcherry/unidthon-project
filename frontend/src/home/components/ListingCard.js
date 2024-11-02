import React from "react";
import "./ListingCard.css";

function ListingCard({ daysLeft, title, price, location }) {
  return (
    <div className="listing-card">
      <div className="listing-image">
        <img src="https://via.placeholder.com/300x200" alt="공고 이미지" />
        <span className="days-left">D-{daysLeft}</span>
      </div>
      <div className="listing-info">
        <h4>{title}</h4>
        <p className="price">{price}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
}

export default ListingCard;
