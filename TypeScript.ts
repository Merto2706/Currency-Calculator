function genTxt() {
    let c1: String = String((document.getElementById('c1') as HTMLInputElement).value);
    let c2: String = String((document.getElementById('c2') as HTMLInputElement).value);
    let ec: String = String((document.getElementById('ec') as HTMLInputElement).value);

    document.getElementById("t1").innerHTML = "Exchange rate " + c2 + "/" + c1 + " = " + ec;
}

function del() {
    document.getElementById("tbl1").innerHTML = "";
}

function gentbl() {

    let c1: String = String((document.getElementById('c1') as HTMLInputElement).value);
    let c2: String = String((document.getElementById('c2') as HTMLInputElement).value);
    let ec: number = Number((document.getElementById('ec') as HTMLInputElement).value);

    let table = document.getElementById("tbl1") as HTMLElement;

    let header = table.createTHead();
    let rowh = header.insertRow(0);
    let cellhl = rowh.insertCell(0);
    let cellhr = rowh.insertCell(1);
    cellhl.innerHTML = c1;
    cellhr.innerHTML = c2;
    let c = 2;

    for (let i = 1; i < 29; i++) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        if (i < 11) {
            cell1.innerHTML = i;
            cell2.innerHTML = (i * ec).toFixed(2);
            cell1.style.background = "aquamarine";  //falsch?
            cell2.style.background = "aquamarine";  //falsch?

        } else if (10 < i && i < 20) {
            cell1.innerHTML = ((i - 9) * 10);
            cell2.innerHTML = (((i - 9) * 10) * ec).toFixed(2);
            cell1.style.background = "blueviolet";
            cell2.style.background = "blueviolet";
        } else {
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
    let c1 = (document.getElementById('c1') as HTMLInputElement);
    let c2 = (document.getElementById('c2') as HTMLInputElement);
    let ec = (document.getElementById('ec') as HTMLInputElement);

    let zwi = c1.value;
    c1.value = c2.value;
    c2.value = zwi;
    ec.value = String((1 /  +ec.value).toFixed(4));

}

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("button1").addEventListener("click", (event) => {
        event.preventDefault();
        del();
        swap();
        genTxt();
        gentbl();
        textunder();
    })
    document.getElementById("button2").addEventListener("click", (event) => {
        event.preventDefault();
        del();
        genTxt();
        gentbl();
        textunder();
    })
})
