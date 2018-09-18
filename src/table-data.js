function makeTableRows(data){
    const tableref = document.getElementById('datatable').getElementsByTagName('tbody')[0];
    tableref.innerHTML = "";
    let obj = "";
    for(let key in data){
        obj = data[key];
        let newRow = tableref.insertRow();
        let centreMarker = document.createTextNode(obj["marker-label"]);
        let centreName = document.createTextNode(key);
        let centreOpen = document.createTextNode(obj["service-open"]);
        let currentWaitingTime = document.createTextNode(obj["waiting-times"]["1min"]);

        let centreMarker_cell = newRow.insertCell(0);
        let centreName_cell = newRow.insertCell(1);
        let centreOpen_cell = newRow.insertCell(2);
        let waitingTime_cell = newRow.insertCell(3);

        centreMarker_cell.classList.add("table-marker");
        centreName_cell.classList.add("table-centrename");


        centreMarker_cell.appendChild(centreMarker);
        centreName_cell.appendChild(centreName);
        centreOpen_cell.appendChild(centreOpen);
        waitingTime_cell.appendChild(currentWaitingTime);
    }
}