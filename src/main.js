
const gradient = ['rgba(0,0,0,0)','rgba(255,0,0,1)','rgba(255,255,0,1)','rgba(5,193,255,1)','rgba(255,255,0,1)','rgba(255,0,0,1)'];
let  map, heatmap, region;

function initMap() {
    // region = getUrlParameter("region");
    // // Styles a map in night mode.
    // console.log(document.getElementById('map'));
    // console.log(mapProps(region));
    // console.log(mapProps("elruc"));
    map = new google.maps.Map(document.getElementById('map'), mapProps(region));
    updateData();

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}