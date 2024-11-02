import React from "react";
import "./Detail.css";

function Table({ data, selectedIndex, onRowSelect }) {
  function TableRow({ row, isSelected, onClick }) {
    return (
      <div
        className={`table-row ${isSelected ? "selected" : ""}`}
        onClick={onClick}
      >
        <div>{row.시도군구}</div>
        <div>{row.주택명}</div>
        <div>{row.평수}</div>
        <div>{row.공급호수}</div>
        <div>{row.보증금 + " / " + row.월세}</div>
      </div>
    );
  }

  return (
    <div className="table">
      <h4 className="subtitle">공급 정보</h4>
      <div className="Border-Blue"></div>
      <div className="table-header">
        <div>지자체명</div>
        <div>주택정보</div>
        <div>평수</div>
        <div>공급 호수</div>
        <div>보증금 / 월세</div>
      </div>
      {data.map((row, index) => (
        <TableRow
          key={index}
          row={row}
          isSelected={index === selectedIndex} // 부모 컴포넌트에서 선택된 상태인지 확인
          onClick={() => onRowSelect(index)} // 클릭 시 부모로 인덱스를 전달
        />
      ))}
    </div>
  );
}

export default Table;
