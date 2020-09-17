// from data.js
var tableData = data;
var tbody = d3.select("tbody");
console.log(tableData);

// tableData.forEach(function(sightingData) {
//     console.log(sightingData);
//     var row = tbody.append("tr");

//     Object.entries(sightingData).forEach(function([key, value]) {
//         console.log(key, value);
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

function dateFilter(sighting) {
    return sighting.datetime < "1/10/2010";
};
var dateSighting = data.filter(dateFilter);
console.log(dateSighting);

var inputField = d3.select("#datetime");

inputField.on("change", function() {
    var newText = d3.event.target.value;

 // console.log filtered input data   

    function dateFilter(sighting) {
        return sighting.datetime === newText;
    }
    var dateSighting = data.filter(dateFilter);
    console.log(dateSighting);

// displaying table of filtered input data

    dateSighting.forEach(function(sightingData) {
    console.log(sightingData);
    var row = tbody.append("tr");

    Object.entries(sightingData).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});





});

