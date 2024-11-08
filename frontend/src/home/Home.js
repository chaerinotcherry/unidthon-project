import React, { useEffect, useState } from "react";
import "./Home.css";
import buildingImage from "../assets/building.png";
import a from "../assets/a.png"; // 이미지 경로를 올바르게 설정
import b from "../assets/b.jpeg";
import c from "../assets/c.png";
import d from "../assets/d.jpeg";
import e from "../assets/e.png";
import f from "../assets/f.png";
import g from "../assets/g.png";
import i from "../assets/i.jpeg";
import CustomCard from "./components/CustomCard"; // CustomCard 컴포넌트 가져오기
import AllCard from "./components/AllCard";

function HomePage() {
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
    // 추가 공고 데이터를 여기에 추가할 수 있습니다.
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

export default HomePage;
