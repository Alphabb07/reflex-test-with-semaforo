console.log("Javascript caricato");
console.log("test");

function setup(){
  createCanvas(150, 400);
  document.querySelector('#semaforo').innerHTML = '';
 




}

function draw(){
  background(110);
  fill(50);
  rect(25, 50);
  
  if(countdown === 3){
    fill(255, 0, 0);
    circle(75, 100, 80); 

  } else if(countdown === 2){
    fill(255, 0, 0);
    circle(75, 200, 80); 
  } else if(countdown === 1){


    fill(0, 255, 0);
    circle(75, 300, 80); 
  } else if(countdown === 0){
   
    fill(150, 0, 0);
    circle(75, 100, 80); 
    circle(75, 200, 80);
    circle(75, 300, 80);
  }



}









let countdown = 3;
let timer = document.querySelector("#timer");
let GAS = document.querySelector("#GAS");
let inizio;
let fine;
let risultato;
let reflex;

function conteggio(){
  if(countdown > 0){
    timer.textContent = countdown;
    countdown--;
    setTimeout(conteggio, 1000);
    GAS.disabled = true;
  } else {
    timer.textContent = "VIA!";
    inizio = new Date().getTime();
    GAS.disabled = false;
  }
}

GAS.addEventListener("click", function(){
  if(inizio){
    fine = new Date().getTime();
    reflex = fine - inizio;
    risultato = reflex + " ms";
    timer.textContent = "Il tuo risultato è: " + risultato;
    GAS.disabled = true;
  }
});

conteggio();
