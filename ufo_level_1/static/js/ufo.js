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

function wiFilter(sighting) {
    return sighting.state === "wi";
}
console.log(wiFilter);