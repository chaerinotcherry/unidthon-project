import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  // 검색 버튼 클릭 시 실행되는 함수 (검색 기능 구현 예정)
  const handleSearch = () => {
    if (searchQuery) {
      // 검색 기능을 여기에 추가 (필요에 따라 검색 결과 페이지로 이동하거나 결과 표시)
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/login" className="nav-link">
          로그인
        </Link>
        <Link to="/" className="nav-link">
          홈
        </Link>
        <Link to="/custom-announcements" className="nav-link">
          맞춤공고
        </Link>
        <Link to="/all-announcements" className="nav-link">
          전체공고
        </Link>
      </nav>
      <div className="search-section">
        <input
          type="text"
          placeholder="메뉴, 공고, 관심 지역을 검색해보세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          🔍
        </button>
      </div>
      <div className="user-section">
        <span className="icon">🔔</span>
        <Link to="/mypage" className="nav-link">
          👤 유니드 님
        </Link>
      </div>
    </header>
  );
}

export default Header;
