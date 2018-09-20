
const gradient = ['rgba(0,0,0,0)','rgba(255,0,0,1)','rgba(255,255,0,1)','rgba(5,193,255,1)','rgba(255,255,0,1)','rgba(255,0,0,1)'];
let  map, heatmap, region;

function initMap() {
    //console.log(mapProps(getUrlParameter("region")));

    map = new google.maps.Map(document.getElementById('map'), mapProps(getUrlParameter("region")));
    // console.log(mapProps("elruc"));
    updateData();

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}