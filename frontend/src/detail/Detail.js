import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Detail.css";
import Table from "./Table";
import KakaoMap from "./KakaoMap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const { gonggoId } = useParams(); // URL에서 gonggoId 파라미터 가져오기
  const [houseInfo, setHouseInfo] = useState(null);
  const [supplies, setSupplies] = useState([]);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // GET 요청을 보냅니다.
    axios
      .get("http://13.125.39.194/houses/" + gonggoId + "/info")
      .then((response) => {
        setHouseInfo(response.data); // 일반 정보를 상태에 저장합니다.저장합니다.
        setSupplies([...response.data["공급정보"]]);
      })
      .catch((error) => {
        setError(error); // 에러가 발생하면 에러를 상태에 저장합니다.
      });
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.

  // Error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Loading
  if (!houseInfo || supplies.length === 0) {
    return <div>Loading...</div>;
  }

  const handleRowSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div
      className="this"
      style={{
        "margin-top": "53px",
      }}
    >
      <div>
        <button className="청약추가버튼">내 청약 추가</button>
        <button
          className="청약신청바로가기버튼"
          onClick={() => window.open(houseInfo.공고링크, "_blank")}
        >
          청약 신청 바로가기
        </button>
        <button className="목록버튼" onClick={handleGoBack}>
          목록
        </button>
      </div>
      <div>
        <h1 className="title">{houseInfo.공고명}</h1>
      </div>

      <div className="제목아래모음">
        <span className="제목아래항목">• 주관사: {houseInfo.주관사}</span>
        <span className="제목아래항목">• 유형: {houseInfo.공고유형}</span>
        <span className="제목아래항목">
          • 공고 상태:{" "}
          <span
            style={{
              color: houseInfo.공고상태 === "접수중" ? "#0D43B0" : "",
            }}
          >
            {houseInfo.공고상태}
          </span>
        </span>
        <span className="제목아래항목">• 접수 마감: {houseInfo.접수마감}</span>
      </div>

      <div className="Border"></div>

      <div>
        <h4 className="subtitle">공급 일정</h4>
        <div className="공급일정항목">
          • 접수기기간: {houseInfo.공급일정.접수시작일} ~
          {houseInfo.공급일정.접수마감일}
        </div>
        <div className="공급일정항목">
          • 당첨자 발표일: {houseInfo.공급일정.당첨자발표일}
        </div>
        <div className="공급일정항목">
          • 계약기간: {houseInfo.공급일정.계약시작일} ~
          {houseInfo.공급일정.계약마감일}
        </div>
      </div>

      <div>
        <Table
          data={supplies}
          selectedIndex={selectedIndex} // 부모 컴포넌트의 selectedIndex 전달
          onRowSelect={handleRowSelect} // 선택된 행을 부모로 전달
        />
      </div>

      <div className="block">
        <h4 className="subtitle">단지 관련 이미지(평면도) 정보</h4>
        <img
          src={supplies[selectedIndex].평면도_object_key}
          alt="단지 관련 이미지"
          className="단지이미지"
        />
      </div>

      <div>
        <h4 className="subtitle">단지 관련 위치 정보 주소</h4>
        <div className="임대기간">{supplies[selectedIndex].주소}</div>
        <div
          style={{
            width: "1175px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <KakaoMap address={supplies[selectedIndex].주소.split("(")[0]} />
        </div>
      </div>

      <div>
        <h4 className="subtitle">임대기간</h4>
        <div className="임대기간">
          {supplies[selectedIndex].임대기간}, 재계약{" "}
          {supplies[selectedIndex].재계약가능최대횟수}회 가능(입주자격 유지시
          최장 20년까지 거주가능)
        </div>
      </div>
    </div>
  );
}

export default Detail;
