import React from "react";
import ListingCard from "./ListingCard";
import "./ListingSection.css";

function ListingSection() {
  const listings = [
    {
      id: 1,
      daysLeft: 2,
      title: "부천원종 B2블록 신혼희망타운",
      price: "월 90,000~",
      location: "경기도 부천시 오정구",
    },
    {
      id: 2,
      daysLeft: 5,
      title: "도척이천신도시 RH10-2BL",
      price: "월 90,000~",
      location: "경기도 이천시",
    },
    {
      id: 3,
      daysLeft: 7,
      title: "도척이천신도시 RH10-2BL",
      price: "월 75,000~",
      location: "서울특별시 중랑구/은평구/광진구",
    },
  ];

  return (
    <div className="listing-section">
      <h2>전체 공고</h2>
      <div className="listing-cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
}

export default ListingSection;
