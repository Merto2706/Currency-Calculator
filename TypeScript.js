function genTxt() {
    var c1 = String(document.getElementById('c1').value);
    var c2 = String(document.getElementById('c2').value);
    var ec = String(document.getElementById('ec').value);
    document.getElementById("t1").innerHTML = "Exchange rate " + c2 + "/" + c1 + " = " + ec;
}
function generateTable() {
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblhead = document.createElement("thead");
    var tblBody = document.createElement("tbody");
    // creating all cells
    for (var i = 0; i < 30; i++) {
        // creates a table row
        var row = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode("cell in row ".concat(i, ", column ").concat(j));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "1");
}
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("button1").addEventListener("click", function (event) {
        event.preventDefault();
    });
    document.getElementById("button2").addEventListener("click", function (event) {
        event.preventDefault();
        genTxt();
        generateTable();
    });
});
