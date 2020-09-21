// from data.js
var tableData = data;
var cityData= data.map(row => row.shape);
console.log(cityData);
var tbody = d3.select("tbody");

//Display default table 

function init() {
    data.forEach(function(defaultTable) {
        var row = tbody.append("tr");

    Object.entries(defaultTable).forEach(function([key, value]) {
        //console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    }); 
    });
}
init();

//On change to the DOM, call getData()
d3.selectAll("#datetime").on("change", getData);

function getData() {
    tbody.html("");
    var newText = d3.event.target.value;

    function dateFilter(sighting) {
        return sighting.datetime === newText; 
    }
    var dateSighting = data.filter(dateFilter);
    console.log(dateSighting);

    dateSighting.forEach(function(sightingData) {
    console.log(sightingData);
    var row = tbody.append("tr");

    var filteredDate = Object.entries(sightingData).forEach(function([key,value]) {
        var cell = row.append("td");
        cell.text(value);
        
    });
    });

}

//Filter by State 

var stateInputField = d3.select("#statedropdown");

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

//Filter by Shape

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

// function updateTable(sightingData) {
//     var row=tbody.append("tr");
//     var filteredState= Object.entries(sightingData).forEach(function([key,value]) {
//         var cell = row.append("td");
//         cell.text(value);
//     });

// }); 
