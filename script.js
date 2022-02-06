const $comenzar = document.querySelector("#comenzar");
const $turnoActual = document.querySelector("#turno-actual");
const $estado = document.querySelector("#estado");
let turnoActual = 0;
let primerCarta;
let segundaCarta;
let paresAcertados = 0;

$comenzar.onclick = function(){
    randomizarFrutas();
    mostrarFrutas(500);
    ocultarFrutas(3500);

    seleccionarCartas(primerCarta, segundaCarta)
  

}

function verificarCartas(primerCarta, segundaCarta){
    if (primerCarta.getAttribute("src") === segundaCarta.getAttribute("src")){
            paresAcertados++;
            primerCarta = undefined;
            segundaCarta = undefined;

            if(paresAcertados === 8){
            $estado.textContent =
            "Estado: completaste el MemoTest! Pulsa comenzar para jugar de nuevo.";
            return;
            }

            seleccionarCartas(primerCarta, segundaCarta);

    } else {
        
        setTimeout(function(){
            primerCarta.setAttribute("id", "oculto")
            segundaCarta.setAttribute("id", "oculto")}
            ,1000);

        setTimeout(function(){
            primerCarta = undefined;
            segundaCarta = undefined;
            seleccionarCartas(primerCarta, segundaCarta);
        }, 1250);

     
    }
}


function seleccionarCartas(primerCarta, segundaCarta){
    const cartas = document.querySelectorAll("img");
    cartas.forEach(function(carta){
        carta.onclick = function(e){
            if (!primerCarta) {
                carta.setAttribute("id", "visible");
                primerCarta = e.target;

            } else if (!segundaCarta) {
                carta.setAttribute("id", "visible");
                segundaCarta = e.target;
            }

            if (primerCarta && segundaCarta){
                turnoActual++;
                $turnoActual.textContent = `Turno actual: ${turnoActual.toString()}`;
                verificarCartas(primerCarta, segundaCarta)
            }
        }
    })
}

function randomizarFrutas(){
    
    let frutas = {

        "suika": "./img/furit_mark01_suika.png",
        "grape": "./img/furit_mark06_grape.png",
        "kiwi": "./img/furit_mark09_kiwi.png",
        "pineapple": "./img/furit_mark10_pineapple.png",
        "ichigo":"./img/furit_mark11_ichigo.png",
        "suikaBite": "./img/furit_mark14_suika.png",
        "cherry": "./img/furit_mark17_cherry.png",
        "mikan": "./img/furit_mark18_mikan.png",
    }
    
    let contadorFrutas ={
        "suika": 0,
        "grape": 0,
        "kiwi": 0,
        "pineapple": 0,
        "ichigo": 0,
        "suikaBite": 0,
        "cherry": 0,
        "mikan": 0,
    }

    let frutasContadas = Object.values(contadorFrutas);
    const imagenes = document.querySelectorAll("img");
    const nombreFrutas = Object.keys(frutas);
    const localizacionFruta = Object.values(frutas);

    for (i = 0; i < imagenes.length; i++){
        let frutaRandom = Math.floor(Math.random() * nombreFrutas.length);
        frutasContadas[frutaRandom]++

        if(frutasContadas[frutaRandom] > 2){
           i--
           continue;
        }
        
        else 
        imagenes[i].setAttribute("src", localizacionFruta[frutaRandom]);
    

    }

}

function ocultarFrutas(retraso){
    const imagenes = document.querySelectorAll("img");
    imagenes.forEach(function(imagen){
        setTimeout(function(){imagen.setAttribute("id", "oculto")}, retraso);
       ;
    })
}

function mostrarFrutas(retraso){
    const imagenes = document.querySelectorAll("img");
    imagenes.forEach(function(imagen){
        setTimeout(function(){imagen.setAttribute("id", "visible")}, retraso);
       ;
    })
}










