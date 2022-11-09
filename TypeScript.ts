function genTxt(){
    let c1: String = String((document.getElementById('c1') as HTMLInputElement).value);
    let c2: String = String((document.getElementById('c2') as HTMLInputElement).value);
    let ec: String = String((document.getElementById('ec') as HTMLInputElement).value);
    document.getElementById("t1").innerHTML = "Exchange rate " + c2 + "/" + c1 + " = " + ec;

}

function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblhead = document.createElement("thead");
    const tblBody = document.createElement("tbody");


    // creating all cells
    for (let i = 0; i < 30; i++) {
        // creates a table row
        const row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
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




document.addEventListener("DOMContentLoaded",(event)=>{
    document.getElementById("button1").addEventListener("click", (event)=>{
        event.preventDefault();
    })

    document.getElementById("button2").addEventListener("click", (event)=>{
        event.preventDefault();
        genTxt();
        generateTable();
    })
})

