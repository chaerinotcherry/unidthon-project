import React from "react";
import "./Home.css";
import buildingImage from "../assets/building.png"; // 이미지 경로를 올바르게 설정
import CustomCard from "./components/CustomCard"; // CustomCard 컴포넌트 가져오기
import a from "../assets/a.png"; // 이미지 경로를 올바르게 설정
import b from "../assets/b.jpeg";

function Custom() {
  const customCards = [
    {
      id: 10,
      rank: "예상 1순위",
      daysLeft: "D+2",
      title: "구로구 매입임대주택",
      price: "월 126,100원 ~",
      location: "서울특별시 구로구",
      image: buildingImage,
    },
    {
      id: 11,
      rank: "예상 2순위",
      daysLeft: "D+3",
      title: "용산구 매입임대주택",
      price: "월 151,200원 ~",
      location: "서울특별시 용산구",
      image: a,
    },
    {
      id: 9,
      rank: "예상 3순위",
      daysLeft: "D+8",
      title: "강동구 매입임대주택",
      price: "월 242,000원 ~",
      location: "서울특별시 강동구",
      image: b,
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
