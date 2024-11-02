import React, { useState } from "react";
import "./Detail.css";

function Table({ data }) {
  function TableRow({ row, isSelected, onClick }) {
    return (
      <div
        className={`table-row ${isSelected ? "selected" : ""}`}
        onClick={onClick}
      >
        <div>{row.지자체명}</div>
        <div>{row.주택정보}</div>
        <div>{row.공급호수}</div>
        <div>{row.보증금월세}</div>
      </div>
    );
  }
  const [selectedIndex, setSelectedIndex] = useState(null); // 선택된 인덱스를 저장하는 상태

  return (
    <div className="table">
      <h4>공급 정보</h4>
      <div className="Border-Blue"></div>
      <div className="table-header">
        <div>지자체명</div>
        <div>주택정보</div>
        <div>공급 호수</div>
        <div>보증금 / 월세</div>
      </div>
      {data.map((row, index) => (
        <TableRow
          key={index}
          row={row}
          isSelected={index === selectedIndex} // 선택된 상태인지 확인
          onClick={() => setSelectedIndex(index)} // 클릭 시 인덱스 업데이트
        />
      ))}
    </div>
  );
}

export default Table;
