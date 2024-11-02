import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Detail.css";
import Table from "./Table";

function Detail({ gonggoId }) {
  const [sangseData, setSangseData] = useState(null);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleRowSelect = (index) => {
    setSelectedIndex(index);
  };

  const 테이블목데이터 = [
    {
      지자체명: "서울특별시 종로구",
      주택정보: "종로승인동(승인에스하임) - 1유형",
      공급호수: 21,
      보증금월세: "20000 / 60000",
    },
    {
      지자체명: "서울특별시 종로구",
      주택정보: "종로승인동(승인에스하임) - 1유형",
      공급호수: 21,
      보증금월세: "20000 / 60000",
    },
    {
      지자체명: "서울특별시 종로구",
      주택정보: "종로승인동(승인에스하임) - 1유형",
      공급호수: 21,
      보증금월세: "20000 / 60000",
    },
  ];

  useEffect(() => {
    const fetchSangseData = async () => {
      try {
        // const response = await axios.get(`/api/sangse/${gonggoId}`);
        const mockData = {
          id: 1,
          gonggoId: 101,
          city: "서울",
          houseName: "힐탑 아파트",
          providedNo: 302,
          deposit: 1000000,
          rent: 500000,
          imagePath: "https://example.com/image.jpg",
          address: "서울특별시 강남구 테헤란로 123",
          facilities: {
            wifi: "무료",
            parking: "유료",
            gym: "포함",
          },
          rentalPeriod: "1년",
        };
        setSangseData(mockData); // 데이터 저장
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };

    fetchSangseData();
  }, [gonggoId]);

  if (!sangseData) return <p>Loading...</p>;

  return (
    <div className="this">
      <div>
        <button className="청약추가버튼">내 청약 추가</button>
        <button className="청약신청바로가기버튼">청약 신청 바로가기</button>
        <button className="목록버튼">목록</button>
      </div>

      <h1 className="title">
        [선계약후검증, 동호지정] 도청이전신도시 RH10-2BL 국민임대주택 입주자
        추가모집 공고('24.11.01)
      </h1>

      <div className="제목아래모음">
        <span className="제목아래항목">• 공급자: 공급자 넣기</span>
        <span className="제목아래항목">• 유형: 유형 넣기</span>
        <span className="제목아래항목">• 공고 상태: 접수중</span>
        <span className="제목아래항목">• 접수 마감: D-12</span>
      </div>

      <div className="Border"></div>

      <div>
        <h4>공급 일정</h4>
        <div className="공급일정항목">
          • 접수기기간: 2024.11.11 ~ 2024.11.15
        </div>
        <div className="공급일정항목">• 당첨자 발표일: 2024.11.20</div>
        <div className="공급일정항목">• 계약기간: 2024.12.09</div>
      </div>

      <div>
        <Table
          data={테이블목데이터}
          selectedIndex={selectedIndex}
          onRowSelect={handleRowSelect}
        />
        {selectedIndex !== null && (
          <p>선택된 항목: {테이블목데이터[selectedIndex].지자체명}</p>
        )}
      </div>
    </div>
  );
}

export default Detail;
