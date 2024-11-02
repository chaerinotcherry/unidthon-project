// src/components/CustomCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllCard.css"; // 카드 전용 스타일 파일

function CustomCard({ card }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${card.id}`); // 고유 ID를 포함하여 /detail로 이동
  };

  return (
    <div className="custom-card" onClick={handleCardClick}>
      <div className="card-header-all">
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
