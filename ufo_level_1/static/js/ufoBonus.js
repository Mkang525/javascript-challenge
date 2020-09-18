// from data.js
var tableData = data;
var cityData= data.map(row => row.shape);
console.log(cityData);


var tbody = d3.select("tbody");

var inputField = d3.select("#datetime");
inputField.on("change", function() {
    tbody.html("");
    var newText = d3.event.target.value;

 // console.log filtered input data   

    function dateFilter(sighting) {
        return sighting.datetime === newText;
    }
    var dateSighting = data.filter(dateFilter);
    console.log(dateSighting);

// displaying table of filtered input data in html

    dateSighting.forEach(function(sightingData) {
    console.log(sightingData);
    var row = tbody.append("tr");

    var filteredDate = Object.entries(sightingData).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
    });

});

var stateInputField = d3.select("#statedropdown");

// console.log filtered input data  

stateInputField.on("change", function() {
    tbody.html("");

    var stateSelect = d3.event.target.value; 

    function stateFilter(sighting) {
        return sighting.state === stateSelect;
    }
    var stateSighting = data.filter(stateFilter);
    console.log(stateSighting);

// displaying table of filtered input data in html

    stateSighting.forEach(function(sightingData) {
        console.log(sightingData);
        var row = tbody.append("tr");
    
        var filteredState = Object.entries(sightingData).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
        });

});

var shapeInputField = d3.select("#shapedropdown");

shapeInputField.on("change", function() {
    tbody.html("");

    var shapeSelect = d3.event.target.value;

    function shapeFilter(sighting) {
        return sighting.shape === shapeSelect;
    }
    var shapeSighting = data.filter(shapeFilter);
    console.log(shapeSighting);

// displaying table of filtered input data in html

    shapeSighting.forEach(function(sightingData) {
        console.log(sightingData);
        var row = tbody.append("tr");

        var filteredState = Object.entries(sightingData).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
    });

});