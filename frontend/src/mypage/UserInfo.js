import React, { useState, useEffect } from 'react';
import './UserInfo.css'; 
import axios from 'axios';

function UserInfo() {
    const [formData, setFormData] = useState({
        haveHouse: false,
        birthYear: 2000, // integer로 수정
        currentJob: '대학생',
        monthlyIncome: 0, // integer로 수정
        haveWorked: false, // boolean으로 수정
        currentLoc: '서울특별시 은평구',
        asset: 3000, // integer로 수정
        subscriptionNo: 16, // integer로 수정
        carPrice: '없음', // ENUM 타입에 맞춰 수정
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://13.125.39.194/users/myinfo');
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'radio' ? (value === 'true' ? true : value === 'false' ? false : value)
                        : type === 'number' ? Number(value)
                        : value;

        setFormData({ ...formData, [name]: newValue });
    };

    const handleSave = async () => {
        await axios.put('http://13.125.39.194/users/myinfo', formData);
        alert("내 정보가 저장되었습니다.");
    };

    return (
        <div className="card p-4 mt-5" style={{ backgroundColor: '#F6F6F6', width: '900px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <p style={{ fontSize: '20px', fontWeight: 700 }}>내 정보</p>
                <button type="button" className="btn btn-primary" onClick={handleSave}>저장</button>
            </div>
            <form>
                <div className="row mb-3">
                    <label className="col-3 col-form-label">무주택자 여부</label>
                    <div className="col-4 d-flex align-items-center">
                        <input type="radio" name="haveHouse" value={true} onChange={handleChange} checked={formData.haveHouse === true} style={{ marginRight: '3px' }} /> 예
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <input type="radio" name="haveHouse" value={false} onChange={handleChange} checked={formData.haveHouse === false} style={{ marginRight: '3px' }} /> 아니오
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">출생연도</label>
                    <div className="col-9">
                        <input type="number" className="form-control" name="birthYear" value={formData.birthYear} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">현재 직업</label>
                    <div className="col-9">
                        <select className="form-control" name="currentJob" value={formData.currentJob} onChange={handleChange}>
                            <option value="대학생">대학생</option>
                            <option value="취준생">취준생</option>
                            <option value="일반 근로자">일반 근로자</option>
                            <option value="건설 근로자">건설 근로자</option>
                            <option value="제조업 근로자">제조업 근로자</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">월소득(본인)</label>
                    <div className="col-9">
                        <input type="number" className="form-control" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">5년이상 근로 경험 여부</label>
                    <div className="col-4 d-flex align-items-center">
                        <input type="radio" name="haveWorked" value={true} onChange={handleChange} checked={formData.haveWorked === true} style={{ marginRight: '3px' }}/> 예
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <input type="radio" name="haveWorked" value={false} onChange={handleChange} checked={formData.haveWorked === false} style={{ marginRight: '3px' }}/> 아니오
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">현재 거주지</label>
                    <div className="col-9">
                        <input type="text" className="form-control" name="currentLoc" value={formData.currentLoc} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">자산(본인)</label>
                    <div className="col-9">
                        <input type="number" className="form-control" name="asset" value={formData.asset} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">청약 횟수</label>
                    <div className="col-9">
                        <input type="number" className="form-control" name="subscriptionNo" value={formData.subscriptionNo} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3" >
                    <label className="col-3 col-form-label">차량 가격</label>
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input type="radio" name="carPrice" value="없음" onChange={handleChange} checked={formData.carPrice === '없음'} style={{ marginRight: '3px' }} /> 없음
                    </div>
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input type="radio" name="carPrice" value="0~ 3683만원" onChange={handleChange} checked={formData.carPrice === '0~ 3683만원'} style={{ marginRight: '3px' }}/> 0~3683만원
                    </div>
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input type="radio" name="carPrice" value="3683 ~ 3708만원" onChange={handleChange} checked={formData.carPrice === '3683 ~ 3708만원'} style={{ marginRight: '3px' }}/> 3683~3708만원
                    </div>
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input type="radio" name="carPrice" value="3708만원 이상" onChange={handleChange} checked={formData.carPrice === '3708만원 이상'} style={{ marginRight: '3px' }}/> 3708만원 이상
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserInfo;
