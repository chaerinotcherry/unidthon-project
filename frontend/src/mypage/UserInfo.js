import React, { useState } from 'react';
import './UserInfo.css'; 

function UserInfo() {
    const [formData, setFormData] = useState({
        isOwner: '예',
        birthYear: '1997',
        job: '대학생',
        salary: '0',
        workExperience: '아니오',
        residence: '서울특별시 은평구',
        assets: '5000',
        numberOfApplications: '18',
        carValue: '0',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async () => {
        // await axios.put('/api/userinfo', formData);
        alert("내 정보가 저장되었습니다.");
    };

    return (
        <div className="card p-4 mt-5" style={{ backgroundColor: '#F6F6F6', width: '900px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <p style={{ fontSize: '20px' }}>내 정보</p>
                <button type="button" className="btn btn-primary" onClick={handleSave}>저장</button>
            </div>
            <form>
                <div className="row mb-3">
                    <label className="col-3 col-form-label">무주택자 여부</label>
                    <div className="col-3 d-flex align-items-center">
                        <input type="radio" name="isOwner" value="예" onChange={handleChange} checked={formData.isOwner === '예'} /> 예
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <input type="radio" name="isOwner" value="아니오" onChange={handleChange} className="ms-3" checked={formData.isOwner === '아니오'} /> 아니오
                    </div>
                </div>
                
                <div className="row mb-3">
                    <label className="col-3 col-form-label">출생연도</label>
                    <div className="col-9">
                        <input type="text" className="form-control" name="birthYear" value={formData.birthYear} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">현재 직업</label>
                    <div className="col-9">
                        <select className="form-control" name="job" value={formData.job} onChange={handleChange}>
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
                        <input type="text" className="form-control" name="salary" value={formData.salary} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">5년이상 근로 경험 여부</label>
                    <div className="col-3 d-flex align-items-center">
                        <input type="radio" name="workExperience" value="예" onChange={handleChange} checked={formData.workExperience === '예'} /> 예
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <input type="radio" name="workExperience" value="아니오" onChange={handleChange} checked={formData.workExperience === '아니오'} /> 아니오
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">현재 거주지</label>
                    <div className="col-9">
                        <input type="text" className="form-control" name="residence" value={formData.residence} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">자산(본인)</label>
                    <div className="col-9">
                        <input type="text" className="form-control" name="assets" value={formData.assets} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">청약 횟수</label>
                    <div className="col-9">
                        <input type="text" className="form-control" name="numberOfApplications" value={formData.numberOfApplications} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3" >
                    <label className="col-3 col-form-label">차량 가격</label>
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="carValue"
                            value="없음"
                            onChange={handleChange}
                            checked={formData.carValue === '없음'}
                        /> 없음
                    </div>
    
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="carValue"
                            value="0~3683만원"
                            onChange={handleChange}
                            checked={formData.carValue === '0~3683만원'}
                        /> 0~3683만원
                    </div>
    
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="carValue"
                            value="3683~3708만원"
                            onChange={handleChange}
                            checked={formData.carValue === '3683~3708만원'}
                        /> 3683~3708만원
                    </div>
    
                    <div className="col-2 d-flex align-items-center" style={{ fontSize: '14px' }}>
                        <input
                            type="radio"
                            name="carValue"
                            value="3708만원 이상"
                            onChange={handleChange}
                            checked={formData.carValue === '3708만원 이상'}
                        /> 3708만원 이상
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserInfo;
