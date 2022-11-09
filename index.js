let map;
let accMarker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.5890195, lng: 130.4069459 },
        zoom: 15,
    });

    const labels = [
        { label: 'H', contents: '숙소', lat: 33.5890195, lng: 130.4069459 },
        { label: 'A', contents: '후쿠오카 공항', lat: 33.59003, lng: 130.44677 },
        { label: 'T', contents: '하카타 역', lat: 33.5891992, lng: 130.4168963 },
        { label: 'T', contents: '텐진 역, 지하상가', lat: 33.5855888, lng: 130.3992804 },
        { label: '1-1', contents: '야키토리 라쿠가키', lat: 33.5923325, lng: 130.4137423 },
        { label: '1-2', contents: '후쿠오카 성터', lat: 33.5855839, lng: 130.3827008 },
        { label: '1-3', contents: '스미요시 신사', lat: 33.5859192, lng: 130.4137369 },
        { label: '1-4', contents: '스이쿄텐만구-신사', lat: 33.5926509, lng: 130.4018375 },
        { label: '1-5', contents: '캐널시티 하카다', lat: 33.5943442, lng: 130.4171671 },
        { label: '1-6', contents: '다자이후 텐만구', lat: 33.5213697, lng: 130.5348239 },
        { label: '1-7', contents: '모모치 해변', lat: 33.5952697, lng: 130.3478276 },
        { label: '1-8', contents: '돈키호테 텐진 본점', lat: 33.5863423, lng: 130.3980152 },
        { label: '가-1', contents: '이시쿠라 사케 주조공장', lat: 33.5872405, lng: 130.3984223 },
        { label: '나-1', contents: '나카스 포장마차거리', lat: 33.5903982, lng: 130.4082999 },
        { label: '다-1', contents: '야오맨-교자', lat: 33.5872845, lng: 130.4146174 },
        { label: '라-1', contents: '간소 나가하마야-돈코츠 라멘', lat: 33.5924148, lng: 130.3845073 },
        { label: '마-1', contents: '미야케우동', lat: 33.5979904, lng: 130.4094758 },
        { label: '바-1', contents: '고마카페 마루니-카레정식', lat: 33.5768256, lng: 130.4121197 },
        { label: '사-1', contents: '사바테츠-고등어회', lat: 33.5889301, lng: 130.4138389 },
        { label: '아-1', contents: '하카탄사카나야고로-닭고기 전골', lat: 33.5938971, lng: 130.4073216 },
        { label: '자-1', contents: '카즈토미-가정식', lat: 33.5922863, lng: 130.406302 }
    ];

    labels.forEach(({ label, contents, lat, lng }) => {
        const marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            label,
            map: map,
        });

        const infowindow = new google.maps.InfoWindow();

        marker.addListener("click", () => {
            infowindow.setContent(contents);
            infowindow.open({
                anchor: marker,
                map,
            });
        });
    });
};

window.initMap = initMap;