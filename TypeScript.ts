function genTxt() {
    let c1: string = (document.getElementById('c1') as HTMLInputElement).value;
    let c2: string = (document.getElementById('c2') as HTMLInputElement).value;
    let ec: string = (document.getElementById('ec') as HTMLInputElement).value;

    document.getElementById("t1").innerHTML = "Exchange rate " + c2 + "/" + c1 + " = " + ec;
}

function del() {
    document.getElementById("tbl1").innerHTML = "";
}

function switchCur() {
    let  xrate = (document.getElementById('ec') as HTMLInputElement);
    let cur1 = (document.getElementById('c1') as HTMLInputElement);
    let cur2 = (document.getElementById('c2') as HTMLInputElement);
    let temp = cur1.value;

    cur1.value = cur2.value;
    cur2.value = temp;
    xrate.value = String((1 /  + xrate.value).toFixed(4));
    gentbl();
}

function gentbl() {

    let c1: string = String((document.getElementById('c1') as HTMLInputElement).value);
    let c2: string = String((document.getElementById('c2') as HTMLInputElement).value);
    let ec: number = Number((document.getElementById('ec') as HTMLInputElement).value);

    let table = document.getElementById("tbl1") as HTMLTableElement;

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
            if(i%2 == 0){
                row.classList.add("bg-red", "dark");
            }
            row.classList.add("bg-red");
            cell1.innerText = i.toString();
            cell2.innerText = (i * ec).toFixed(2);


        } else if (10 < i && i < 20) {
            if(i%2 == 0){
                row.classList.add("bg-vio", "dark");
            }
            row.classList.add("bg-vio")
            cell1.innerText =  ((i - 9) * 10).toString() ;
            cell2.innerText = (((i - 9) * 10) * ec).toFixed(2);

        } else {
            if(i%2 == 0){
                row.classList.add("bg-green", "dark");
            }
            row.classList.add("bg-green")
            cell1.innerText= (c * 100).toString();
            cell2.innerText = ((c * 100) * ec).toFixed(2);
            c++;
        }
    }

}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('button2')!.addEventListener("click", (event) => {
        event.preventDefault();
        del();
        genTxt();
        gentbl();

    })

    document.getElementById('button1')!.addEventListener("click", (event) => {
        event.preventDefault();
        del();
        switchCur();
    })
})