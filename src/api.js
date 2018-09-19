const url = "http://10.10.41.237/lwt-simple-api/index.php";
let response, json;
async function grabData() {
    response = await fetch(url, {});
    json = await response.json();
    return json;
}


function updateData(){
   grabData().then(ret => {
        heatmap = new google.maps.visualization.HeatmapLayer({
            data: makeHeatMap(ret),
            dissipating: false,
            gradient: gradient,
            radius: 10
        });

        if(heatmap) {
            heatmap.setMap(null);
        }
        heatmap.setMap(map);
        addCentreMarkers(ret,map);
        makeTableRows(ret);
        setUpdated();
    });
}