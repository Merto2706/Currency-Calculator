function genTxt() {
    var c1 = String(document.getElementById('c1').value);
    var c2 = String(document.getElementById('c2').value);
    var ec = String(document.getElementById('ec').value);
    document.getElementById("t1").innerHTML = "Exchange rate " + c2 + "/" + c1 + " = " + ec;
}
function del() {
    document.getElementById("tbl1").innerHTML = "";
}
function gentbl() {
    var c1 = String(document.getElementById('c1').value);
    var c2 = String(document.getElementById('c2').value);
    var ec = Number(document.getElementById('ec').value);
    var table = document.getElementById("tbl1");
    var header = table.createTHead();
    var rowh = header.insertRow(0);
    var cellhl = rowh.insertCell(0);
    var cellhr = rowh.insertCell(1);
    cellhl.innerHTML = c1;
    cellhr.innerHTML = c2;
    var c = 2;
    for (var i = 1; i < 29; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        if (i < 11) {
            cell1.innerHTML = i;
            cell2.innerHTML = (i * ec).toFixed(2);
            cell1.style.background = "aquamarine"; //falsch?
            cell2.style.background = "aquamarine"; //falsch?
        }
        else if (10 < i && i < 20) {
            cell1.innerHTML = ((i - 9) * 10);
            cell2.innerHTML = (((i - 9) * 10) * ec).toFixed(2);
            cell1.style.background = "blueviolet";
            cell2.style.background = "blueviolet";
        }
        else {
            cell1.innerHTML = (c * 100);
            cell2.innerHTML = ((c * 100) * ec).toFixed(2);
            cell1.style.background = "goldenrod";
            cell2.style.background = "goldenrod";
            c++;
        }
    }
}
function textunder() {
    document.getElementById("t2").innerHTML = "Currency table";
}
function swap() {
    var c1 = String(document.getElementById('c1').value);
    var zwi = c1;
    document.getElementById("c1").value = document.getElementById('c2').value;
    document.getElementById('c2').value = zwi;
    document.getElementById("ec").value = 1 / document.getElementById("ec").value;
}
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("button1").addEventListener("click", function (event) {
        event.preventDefault();
        swap();
    });
    document.getElementById("button2").addEventListener("click", function (event) {
        event.preventDefault();
        del();
        genTxt();
        gentbl();
        textunder();
    });
});
