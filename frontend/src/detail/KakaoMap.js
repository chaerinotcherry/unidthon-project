import React, { useEffect } from "react";

function KakaoMap({ address }) {
  useEffect(() => {
    // 카카오 맵 API 스크립트 불러오기
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=비밀이지롱&autoload=false&libraries=services`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 표시할 div
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 초기 좌표, 임의로 설정
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 주소-좌표 변환 객체 생성
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다.
        geocoder.addressSearch(address, (result, status) => {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 지도 중심으로 설정합니다.
            map.setCenter(coords);

            // 마커를 생성하고 지도에 표시합니다.
            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
            });
          }
        });
      });
    };

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      document.head.removeChild(script);
    };
  }, [address]);

  return (
    <div
      id="map"
      style={{
        width: "400px",
        height: "350px",
      }}
    ></div>
  );
}

export default KakaoMap;
