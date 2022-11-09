function genTxt(){
    let c1: String = String((document.getElementById('c1') as HTMLInputElement).value);
    let c2: String = String((document.getElementById('c2') as HTMLInputElement).value);
    let ec: String = String((document.getElementById('ec') as HTMLInputElement).value);

    document.getElementById("t1").innerHTML = "Exchange rate " + c1 + "/" + c2 + " = " + ec;
}
document.addEventListener("DOMContentLoaded",(event)=>{
    document.getElementById("button2").addEventListener("click", (event)=>{
        event.preventDefault();
        genTxt();
    })
    document.getElementById("button1").addEventListener("click", (event)=>{

    })
})

