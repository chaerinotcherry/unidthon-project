// src/components/CustomCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Home.css"; // 카드 전용 스타일 파일

function CustomCard({ card }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${card.id}`); // 고유 ID를 포함하여 /detail로 이동
  };
  const getRankClass = (rank) => {
    switch (rank) {
      case "예상 1순위":
        return "rank-1";
      case "예상 2순위":
        return "rank-2";
      case "예상 3순위":
        return "rank-3";
      default:
        return "rank-other";
    }
  };

  return (
    <div className="custom-card" onClick={handleCardClick}>
      <div className="card-header">
        <span className={`rank-badge ${getRankClass(card.rank)}`}>
          {card.rank}
        </span>
        <span className="d-day-badge">{card.daysLeft}</span>
      </div>
      <img src={card.image} alt="공고 이미지" className="card-image" />
      <div className="card-content">
        <p className="card-title">{card.title}</p>
        <p className="card-price">{card.price}</p>
        <p className="card-location">{card.location}</p>
      </div>
    </div>
  );
}

export default CustomCard;
