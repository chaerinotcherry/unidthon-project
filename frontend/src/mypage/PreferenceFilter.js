import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PreferenceFilter() {
    const [preferences, setPreferences] = useState({
        favoriteLoc: '은평구', // 지역 이름
        favMaxDeposit: 1000, // 최대 보증금
        favMaxArea: 55, // 최대 평수
    });

    // 데이터 가져오기
    useEffect(() => {
        const fetchPreferences = async () => {
            try {
                const response = await axios.get('http://13.125.39.194/users/preference-filter');
                setPreferences(response.data);
                console.log("got response: ", response.data);
            } catch (error) {
                console.error("Error fetching preferences:", error);
            }
        };
        fetchPreferences();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = name === 'favMaxDeposit' || name === 'favMaxArea' ? Number(value) : value;
        setPreferences({ ...preferences, [name]: newValue });
    };

    const handleSave = async () => {
        try {
            await axios.put('http://13.125.39.194/users/preference-filter', preferences);
            alert("선호 조건이 저장되었습니다.");
        } catch (error) {
            console.error("Error saving preferences:", error);
        }
    };

    return (
        <section className="info-section card p-3 mt-5" style={{ backgroundColor: '#F6F6F6', width: '900px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <p style={{ fontSize: '20px', fontWeight: '700' }}>선호 조건 필터링</p>
                <button type="button" className="btn btn-primary" onClick={handleSave}>저장</button>
            </div>
            
            <form>
                <div className="row mb-3">
                    <label className="col-3 col-form-label">지역</label>
                    <div className="col-9">
                        <input type="text" className="form-control" name="favoriteLoc" value={preferences.favoriteLoc} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-3 col-form-label">최대 보증금</label>
                    <div className="col-9">
                        <input type="number" className="form-control" name="favMaxDeposit" value={preferences.favMaxDeposit} onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <label className="col-3 col-form-label">선호 평수</label>
                    <div className="col-2 mt-2">
                        <div className="d-flex mb-2">
                            <span style={{ fontSize: '15px' }}>최대: {preferences.favMaxArea}평</span>
                        </div>
                    </div>
                    <div className="col-7 mt-2">
                        <input 
                            type="range" 
                            className="form-range" 
                            name="favMaxArea" 
                            min="0" 
                            max="55" 
                            step="1" 
                            value={preferences.favMaxArea} 
                            onChange={handleChange} 
                            style={{ width: '65%' }} // 슬라이더 길이를 60%로 설정
                        />
                    </div>
                </div>
            </form>
        </section>
    );
}

export default PreferenceFilter;
