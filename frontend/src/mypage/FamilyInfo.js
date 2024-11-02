import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FamilyInfo() {
    const [familyInfo, setFamilyInfo] = useState({
        carValue: '0',
        houseValue: '0',
        monthlyIncome: '0',
    });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios.get('/api/family-info');
    //         setFamilyInfo(response.data);
    //     };
    //     fetchData();
    // }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFamilyInfo({ ...familyInfo, [name]: value });
    };

    const handleSave = async () => {
        // await axios.put('/api/family-info', familyInfo);
        alert("세대 정보가 저장되었습니다.");
    };

    return (
        <section className="info-section card p-4 mt-5" style={{ backgroundColor: '#F6F6F6', width: '900px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <p style={{ fontSize: '20px' }}>세대 정보 (부모 재산)</p>
                <button type="button" className="btn btn-primary" onClick={handleSave}>저장</button>
            </div>
            
            <form>
                <div className="row mb-3">
                    <label className="col-3 col-form-label">차량 가격</label>
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="carValue"
                            value="없음"
                            onChange={handleChange}
                            checked={familyInfo.carValue === '없음'}
                        /> 없음
                    </div>
    
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="carValue"
                            value="0~3683만원"
                            onChange={handleChange}
                            checked={familyInfo.carValue === '0~3683만원'}
                        /> 0~3683만원
                    </div>
    
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="carValue"
                            value="3683~3708만원"
                            onChange={handleChange}
                            checked={familyInfo.carValue === '3683~3708만원'}
                        /> 3683~3708만원
                    </div>
    
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="carValue"
                            value="3708만원 이상"
                            onChange={handleChange}
                            checked={familyInfo.carValue === '3708만원 이상'}
                        /> 3708만원 이상
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">집 가격</label>
                    <div className="col-9">
                        <input type="text" className="form-control" name="houseValue" value={familyInfo.houseValue} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">월 소득</label>
                    <div className="col-9">
                        <input type="text" className="form-control" name="monthlyIncome" value={familyInfo.monthlyIncome} onChange={handleChange} />
                    </div>
                </div>
            </form>
        </section>
    );
}

export default FamilyInfo;
