import React from "react";
import "./Home.css";
import buildingImage from "../assets/building.png"; // 이미지 경로를 올바르게 설정
import CustomCard from "./components/CustomCard"; // CustomCard 컴포넌트 가져오기

function Custom() {
  const customCards = [
    {
      id: 1,
      rank: "예상 1순위",
      daysLeft: "D-7",
      title: "도청이전신도시 RH10-2BL 국민임대주택 입주자 추가모집 공고",
      price: "월 75,000~",
      location: "서울특별시 중랑구/은평구/광진구",
      image: buildingImage,
    },
    {
      id: 2,
      rank: "예상 3순위",
      daysLeft: "D-2",
      title: "[신규모집] 부천원종 B2블록 신혼희망타운 행복주택 입주자 모집",
      price: "월 90,000~",
      location: "경기도 부천시 오정구",
      image: buildingImage,
    },
  ];

  return (
    <div className="home-page">
      <div className="cus-section">
        <h2 className="section-title">맞춤 공고</h2>
        <div className="card-container">
          {customCards.map((card) => (
            <CustomCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Custom;
