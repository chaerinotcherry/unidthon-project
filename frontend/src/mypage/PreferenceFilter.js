import React, { useState } from 'react';
import axios from 'axios';

function PreferenceFilter() {
    const [preferences, setPreferences] = useState({
        region: '은평구',
        subsidy: '1000',
        maxArea: 40,
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPreferences({ ...preferences, [name]: Number(value) });
    };

    const handleSave = async () => {
        // await axios.put('/api/preferences', preferences);
        alert("선호 조건이 저장되었습니다.");
    };

    return (
        <section className="info-section card p-3 mt-4" style={{ backgroundColor: '#F6F6F6', width: '900px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <p style={{ fontSize: '20px' }}>선호 조건 필터링</p>
                <button type="button" className="btn btn-primary" onClick={handleSave}>저장</button>
            </div>
            
            <form>
                <div className="row mb-3">
                    <label className="col-3 col-form-label">지역</label>
                    <div className="col-9">
                        <input type="text" className="form-control" name="region" value={preferences.region} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">최대 보증금</label>
                    <div className="col-9">
                        <input type="text" className="form-control" name="subsidy" value={preferences.subsidy} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">선호 평수</label>
                    <div className="col-9">
                        <div className="d-flex justify-content-between mb-2">
                            <span style={{ fontSize: '15px' }}>최대: {preferences.maxArea}평</span>
                        </div>
                        <input 
                            type="range" 
                            className="form-range" 
                            name="maxArea" 
                            min="0" 
                            max="55" 
                            step="1" 
                            value={preferences.maxArea} 
                            onChange={handleChange} 
                            style={{ width: '50%' }} // 슬라이더 길이를 100%로 설정
                        />
                    </div>
                </div>
            </form>
        </section>
    );
}

export default PreferenceFilter;
