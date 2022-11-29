function genTxt() {
    var c1 = document.getElementById('c1').value;
    var c2 = document.getElementById('c2').value;
    var ec = document.getElementById('ec').value;
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
            if (i % 2 == 0) {
                row.classList.add("bg-red", "dark");
            }
            row.classList.add("bg-red");
            cell1.innerText = i.toString();
            cell2.innerText = (i * ec).toFixed(2);
        }
        else if (10 < i && i < 20) {
            if (i % 2 == 0) {
                row.classList.add("bg-vio", "dark");
            }
            row.classList.add("bg-vio");
            cell1.innerText = ((i - 9) * 10).toString();
            cell2.innerText = (((i - 9) * 10) * ec).toFixed(2);
        }
        else {
            if (i % 2 == 0) {
                row.classList.add("bg-green", "dark");
            }
            row.classList.add("bg-green");
            cell1.innerText = (c * 100).toString();
            cell2.innerText = ((c * 100) * ec).toFixed(2);
            c++;
        }
    }
}
function textunder() {
    document.getElementById("t2").innerHTML = "Currency table";
}
function swap() {
    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var ec = document.getElementById('ec');
    var zwi = c1.value;
    c1.value = c2.value;
    c2.value = zwi;
    ec.value = String((1 / +ec.value).toFixed(4));
}
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("button1").addEventListener("click", function (event) {
        event.preventDefault();
        del();
        swap();
        genTxt();
        gentbl();
        textunder();
    });
    document.getElementById("button2").addEventListener("click", function (event) {
        event.preventDefault();
        del();
        genTxt();
        gentbl();
        textunder();
    });
});
