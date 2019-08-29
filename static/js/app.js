// from data.js
var tableData = data;

// YOUR CODE HERE!


// select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // add more input fields to index.html
    // select the input element and get the raw html node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
    // get the value property of the input element
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");

    // filter the table data
    // only apply filters when a filter value is not empty

    var filteredData = tableData;

    if (dateValue != "") {
        filteredData = filteredData.filter(sighting => sighting.datetime === dateValue);
    };
    if (cityValue != "") {
        filteredData = filteredData.filter(sighting => sighting.city === cityValue);
    };
    if (stateValue != "") {
        filteredData = filteredData.filter(sighting => sighting.state === stateValue);
    };
    if (countryValue != "") {
        filteredData = filteredData.filter(sighting => sighting.country === countryValue);
    };
    if (shapeValue != "") {
        filteredData = filteredData.filter(sighting => sighting.shape === shapeValue);
    };
         
    
    


    // select the table body
    var tbody = d3.select("#ufo-table>tbody");

    tbody.html("");

    // iterate through each sighting object in the filteredData array
    filteredData.forEach((sighting) => {

        // append a row to the table for each sighting object
        var row = tbody.append("tr");

        // iterate through the key-value pairs in each sighting object
        Object.entries(sighting).forEach(([key, value]) => {
            // append a cell for each key-value pair
            var cell = row.append("td");
            // populate the cell
            cell.text(value);
        });
    });
});
