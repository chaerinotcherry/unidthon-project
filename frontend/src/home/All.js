import React from "react";
import "./Home.css";
import AllCard from "./components/AllCard";
import c from "../assets/c.png";
import d from "../assets/d.jpeg";
import e from "../assets/e.png";
import f from "../assets/f.png";
import g from "../assets/g.png";
import i from "../assets/i.jpeg";

function Custom() {
  const allCards = [
    {
      id: 2,
      daysLeft: "D-4",
      title: "오산시 지역 국민임대주택 예비입주자 모집 공고",
      price: "월 69,950원 ~",
      location: "경기도 오산시",
      image: c,
    },
    {
      id: 3,
      daysLeft: "D-9",
      title: "세종특별자치시 행복주택",
      price: "월 60,560원 ~",
      location: "세종특별자치시",
      image: d,
    },
    {
      id: 4,
      daysLeft: "D-9",
      title: "김해시 휴먼시아 6단지 국민임대주택",
      price: "월 72,890원 ~",
      location: "경상남도 김해시",
      image: e,
    },
    {
      id: 2,
      daysLeft: "D-2",
      title: "인천 검단 영구임대주택",
      price: "월 49,270원 ~",
      location: "인천광역시 서구",
      image: f,
    },
    {
      id: 2,
      daysLeft: "D-3",
      title: "광진구 매입임대주택",
      price: "월 225,200원 ~",
      location: "서울특별시 광진구",
      image: g,
    },
    {
      id: 2,
      daysLeft: "D-13",
      title: "은평구 매입임대주택",
      price: "월 132,500원 ~",
      location: "서울특별시 은평구",
      image: i,
    },
  ];

  return (
    <div className="home-page">
      <div className="cus-section">
        <h2 className="section-title">전체 공고</h2>
        <div className="card-container">
          {allCards.map((card) => (
            <AllCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Custom;
