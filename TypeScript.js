function genTxt() {
    var c1 = String(document.getElementById('c1').value);
    var c2 = String(document.getElementById('c2').value);
    var ec = String(document.getElementById('ec').value);
    document.getElementById("t1").innerHTML = "Exchange rate " + c1 + "/" + c2 + " = " + ec;
}
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("button2").addEventListener("click", function (event) {
        event.preventDefault();
        genTxt();
    });
    document.getElementById("button1").addEventListener("click", function (event) {
    });
});
