
let cerchio;
let cerchio2;
let cerchio3;
let punteggio = 0;
let data1;
let data2;
let ms1;
let ms2;

function startGame() {
    cerchio1 = document.querySelector(".cerchio1");
    cerchio2 = document.querySelector(".cerchio2");
    cerchio3 = document.querySelector(".cerchio3");

    cerchio1.classList.remove("red");
    cerchio1.classList.add("green");

    setTimeout(secondaLuce, 1000);
}

function secondaLuce() {
    cerchio2.classList.remove("red");
    cerchio2.classList.add("green");

    setTimeout(terzaLuce, 450);
}

function terzaLuce() {
    cerchio3.classList.remove("red");
    cerchio3.classList.add("green");

    data1 = new Date();
}

function testaRiflessi() {
    data2 = new Date();
    if(data1){
        punteggio = data2 - data1;
        let textpoint = document.querySelector(".testo");
        textpoint.innerHTML = "Tempo di reazione: " + punteggio + " ms";
        }
        }