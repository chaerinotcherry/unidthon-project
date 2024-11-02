import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo';
import FamilyInfo from './FamilyInfo';
import PreferenceFilter from './PreferenceFilter';

function Mypage() {
    const [userData, setUserData] = useState({
        nickname: '유니드',
        username: 'unid_24',
        phonenumber: '010-0000-0000',
    });

    useEffect(() => {
        // API 호출 함수
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://13.125.39.194/users/profile'); // 실제 API 엔드포인트로 변경
                const { nickname, username, phonenumber } = response.data;
                setUserData({ nickname, username, phonenumber });
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="mypage">
                <div className="card p-3 text-start" style={{ width: '900px', backgroundColor: '#F6F6F6' }}>
                    <div className="d-flex align-items-center mb-3 ms-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#2A74B7" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        <h5 className="mb-0" style={{ fontSize: '20px', color: '#2A74B7', fontWeight: '650' }}>{userData.nickname}</h5>
                    </div>
                    <p className="mb-1">{userData.username}</p>
                    <p className="mb-0">Tel: {userData.phonenumber}</p>
                </div>
                <UserInfo />
                <FamilyInfo />
                <PreferenceFilter />
            </div>
        </div>
    );
}

export default Mypage;
