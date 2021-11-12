onload = function () {
    let button = document.getElementsByClassName("input")[3];
    button.addEventListener("click", Calc);
}
function Calc() {
    let adults = document.getElementsByClassName("input")[0];
    let kids = document.getElementsByClassName("input")[1];
    let time = document.getElementsByClassName("input")[2];
    let li1 = document.getElementsByClassName("listItem")[0];
    let li2 = document.getElementsByClassName("listItem")[1];
    let li3 = document.getElementsByClassName("listItem")[2];
    if ((adults.value == "") || (kids.value == "") || (time.value == "")) {
        alert("Preencha todos os campos.");
    } else if (parseInt(time.value) < 6) {
        let meat = (0.4 * parseInt(adults.value)) + (0.2 * parseInt(kids.value));
        let beer = 4 * parseInt(adults.value)
        let drink = (0.5 * parseInt(adults.value)) + (0.25 * parseInt(kids.value));
        li1.innerHTML = meat + " Kg de carne.";
        li2.innerHTML = beer + " latinhas de cerveja.";
        li3.innerHTML = drink + " Garrafas de 2L de bebida."
        output.style.display = "block";
        h2.style.display = "block";
    } else {
        let meat = (0.65 * parseInt(adults.value)) + (0.325 * parseInt(kids.value));
        let beer = 6 * parseInt(adults.value)
        let drink = (1 * parseInt(adults.value)) + (0.5 * parseInt(kids.value));
        li1.innerHTML = meat + " Kg de carne.";
        li2.innerHTML = beer + " latinhas de cerveja.";
        li3.innerHTML = drink + " Garrafas de 2L de bebida."
        output.style.display = "block";
        h2.style.display = "block";
    }
}
var output = document.getElementsByTagName("ul")[0];
var h2 = document.getElementsByTagName("h2")[0];
output.style.display = "none";
h2.style.display = "none";