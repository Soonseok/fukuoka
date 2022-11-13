let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.5890195, lng: 130.4069459 },
        zoom: 15,
    });
    /*
    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
      
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            let myloc = new google.maps.Marker({
              position:pos,
              map:map,
              label:'C'
            });
            myloc;
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, myloc, map.getCenter());
          }
        );
      } else {
        handleLocationError(false, myloc, map.getCenter());
      }
    });
    */
    var labels = [
        { label: 'H', contents: '숙소', lat: 33.5890195, lng: 130.4069459 },
        { label: 'A', contents: '후쿠오카 공항', lat: 33.59003, lng: 130.44677 },
        { label: 'T', contents: '하카타 역', lat: 33.58985, lng: 130.42038 },
        { label: 'T', contents: '텐진미나미 역', lat: 33.58894, lng: 130.4001294 },
        { label: 'T', contents: '나카스카와바타 역', lat: 33.59458091451427, lng: 130.4062388703589 },
        { label: 'T', contents: '텐진 역, 지하상가', lat: 33.5914006, lng: 130.3988788 },
        { label: '1-1', contents: '야키토리 라쿠가키', lat: 33.5923325, lng: 130.4137423 },
        { label: '1-2', contents: '후쿠오카 성터', lat: 33.5855839, lng: 130.3827008 },
        { label: '1-3', contents: '스미요시 신사', lat: 33.5859192, lng: 130.4137369 },
        { label: '1-4', contents: '스이쿄텐만구-신사', lat: 33.5926509, lng: 130.4018375 },
        { label: '1-5', contents: '캐널시티 하카다', lat: 33.5943442, lng: 130.4171671 },
        { label: '1-6', contents: '다자이후 텐만구', lat: 33.5213697, lng: 130.5348239 },
        { label: '1-7', contents: '모모치 해변', lat: 33.5952697, lng: 130.3478276 },
        { label: '1-8', contents: '돈키호테 텐진 본점', lat: 33.5863423, lng: 130.3980152 },
        { label: '가-1', contents: '사케 양조장 하쿠넨구라', lat: 33.59876256956891, lng: 130.41746371759916 },
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
/*
function myLocation (pos){
    var myLat = pos.coords.latitude;
    var myLng = pos.coords.longitude;
};
var locc = navigator.geolocation.getCurrentPosition(myLocation);

const new_marker = new google.maps.Marker({
    position:{myLat, myLng},
    label : "M",
    map: map,
});
var userLocation = new google.maps.LatLng(myLat, myLng);
*/