import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isStatus = location.pathname === "/status";
  const isCus = location.pathname === "/custom";
  const isAll = location.pathname === "/all";

  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="청프 로고" className="logo" />
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
          >
            <path
              d="M23.1284 23.1284L34 33.5341"
              stroke="#2A74B7"
              stroke-width="2.49603"
              stroke-linecap="round"
            />
            <circle
              cx="13.6944"
              cy="13.6944"
              r="12.4838"
              stroke="#2A74B7"
              stroke-width="2.42111"
            />
          </svg>
          <input
            type="text"
            placeholder="메뉴, 공고, 관심 지역을 검색해보세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="header-right">
          <div className="profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <ellipse
                cx="6.03563"
                cy="6.21513"
                rx="6.03563"
                ry="6.21513"
                transform="matrix(-1 0 0 1 16.0358 0)"
                fill="#2A74B7"
              />
              <path
                d="M2.65986e-05 20.2845C2.65986e-05 23.7171 4.4672 23.3124 9.97774 23.3124C15.4883 23.3124 20 23.7171 20 20.2845C20 16.852 15.4883 13.5458 9.97774 13.5458C4.4672 13.5458 2.65986e-05 16.852 2.65986e-05 20.2845Z"
                fill="#2A74B7"
              />
            </svg>
            <span className="user-name">유니드 님</span>
          </div>
          <Link to="/mypage" className="mypage-link">
            마이페이지
          </Link>
        </div>
      </div>
      <nav className="nav-menu">
        <Link to="/" className={`nav-link ${isHome ? "active" : ""}`}>
          Home
        </Link>
        <Link to="/custom" className={`nav-link ${isCus ? "active" : ""}`}>
          맞춤 공고
        </Link>
        <Link to="/all" className={`nav-link ${isAll ? "active" : ""}`}>
          전체 공고
        </Link>
        <Link to="/status" className={`nav-link ${isStatus ? "active" : ""}`}>
          내 청약 현황
        </Link>
      </nav>
    </header>
  );
}

export default Header;
