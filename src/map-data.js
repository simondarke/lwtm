function makeHeatMap(data) {
    let heatdata = [];
    for (let key in data) {
        let obj = data[key];
        heatdata.push({
            location: new google.maps.LatLng(obj["co-ords"]["lat"], obj["co-ords"]["lng"]),
            weight: obj["waiting-times"]["1min"]
        });
    }
    return heatdata;
    }

    function addCentreMarkers(data,map){

        for (let key in data){
            let obj = data[key];
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(obj["co-ords"]["lat"], obj["co-ords"]["lng"]),
                label: obj["marker-label"],
                map: map
            })
        }
    }


