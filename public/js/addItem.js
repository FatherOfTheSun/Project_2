/* eslint-disable indent */
/* eslint-disable prettier/prettier */
// Make a get request to our api route that will return every item
$.get("/api/inventory", function (data) {
    // For each item that our server sends us back
    for (var i = 0; i < data.length; i++) {
        // Create a parent div to hold item data
        var wellSection = $("<div>");
        // Add a class to this div: 'well'
        wellSection.addClass("well");
        // Add an id to the well to mark which well it is
        wellSection.attr("id", "item-well-" + i);
        // Append the well to the well section
        $("#item-section").append(wellSection);

        // Now  we add our item data to the well we just placed on the page
        var newrow = $("#item-well-" + i).append(
            // YOU CAN RENAME THE <th> OR CREATE ID'S AND CLASS JUST ONLY TOUCH THE ONES IN "QUOTES" //

            " <td>" +
            data[i].item +
            "</td>" +
            "<td> " +
            data[i].amount +
            "</td>" +
            "<td>" +
            data[i].measure +
            // eslint-disable-next-line prettier/prettier
            "</td>" +
            "<td>" +
            data[i].category +
            "</td>"
        )
    };
    $(".resultTable").append(newrow);
});
