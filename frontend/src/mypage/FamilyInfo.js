import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FamilyInfo() {
    const [familyInfo, setFamilyInfo] = useState({
        parentCarPrice: '없음', // ENUM 값
        parentHousePrice: 0, // INTEGER로 변경
        parentMonthlyIncome: 0, // INTEGER로 변경
    });

    // 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://13.125.39.194/users/filter'); // 실제 API 엔드포인트로 수정
                setFamilyInfo(response.data);
            } catch (error) {
                console.error("Error fetching family data:", error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = name === 'parentHousePrice' || name === 'parentMonthlyIncome' ? Number(value) : value;
        setFamilyInfo({ ...familyInfo, [name]: newValue });
    };

    const handleSave = async () => {
        try {
            await axios.put('http://13.125.39.194/users/filter', familyInfo); // 실제 API 엔드포인트로 수정
            alert("세대 정보가 저장되었습니다.");
        } catch (error) {
            console.error("Error saving family data:", error);
        }
    };

    return (
        <section className="info-section card p-4 mt-5" style={{ backgroundColor: '#F6F6F6', width: '900px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <p style={{ fontSize: '20px' }}>세대 정보 (부모 재산)</p>
                <button type="button" className="btn btn-primary" onClick={handleSave}>저장</button>
            </div>
            
            <form>
                {/* 차량 가격 ENUM 값 */}
                <div className="row mb-3">
                    <label className="col-3 col-form-label">차량 가격</label>
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="parentCarPrice"
                            value="없음"
                            onChange={handleChange}
                            checked={familyInfo.parentCarPrice === '없음'}
                        /> 없음
                    </div>

                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="parentCarPrice"
                            value="0~ 3683만원"
                            onChange={handleChange}
                            checked={familyInfo.parentCarPrice === '0~ 3683만원'}
                        /> 0~3683만원
                    </div>

                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="parentCarPrice"
                            value="3683 ~ 3708만원"
                            onChange={handleChange}
                            checked={familyInfo.parentCarPrice === '3683 ~ 3708만원'}
                        /> 3683~3708만원
                    </div>

                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="parentCarPrice"
                            value="3708만원 이상"
                            onChange={handleChange}
                            checked={familyInfo.parentCarPrice === '3708만원 이상'}
                        /> 3708만원 이상
                    </div>
                </div>

                {/* 집 가격 */}
                <div className="row mb-3">
                    <label className="col-3 col-form-label">집 가격</label>
                    <div className="col-9">
                        <input type="number" className="form-control" name="parentHousePrice" value={familyInfo.parentHousePrice} onChange={handleChange} />
                    </div>
                </div>

                {/* 월 소득 */}
                <div className="row mb-3">
                    <label className="col-3 col-form-label">월 소득</label>
                    <div className="col-9">
                        <input type="number" className="form-control" name="parentMonthlyIncome" value={familyInfo.parentMonthlyIncome} onChange={handleChange} />
                    </div>
                </div>
            </form>
        </section>
    );
}

export default FamilyInfo;
