let fecha = new Date(2025, 12, 13, 21); /*año - mes - día - hora - minutos*/

let msFecha = fecha.getTime(); // obtenemos milisegundos

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let cuentaRegresiva = document.querySelector("#cuenta-regresiva")


let intervalo = setInterval(() => {

    let hoy = new Date().getTime();

    let distancia = msFecha - hoy;

    let msPorDia = 1000 * 60 *60 * 24;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;

    let dias = Math.floor(distancia / msPorDia) + " : "; //obtenemos un número entero
    let horas = Math.floor((distancia % msPorDia) / msPorHora) + " : ";
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto) + " : ";
    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    parrafoDias.innerText = dias;
    parrafoHoras.innerText = horas < 10 ? "0" + horas:horas; //si la hora es ej. "4", le pone un 0 adelante para que siempre haya 2 números
    parrafoMinutos.innerText = minutos < 10 ? "0" + minutos:minutos;
    parrafoSegundos.innerText = segundos < 10 ? "0" + segundos:segundos;

    if (distancia < 0){
        clearInterval(intervalo);
        cuentaRegresiva.innerHTML = "<p class = 'grande'>¡Llegó el día!</p>";
    }

}, 1000); // Se actualiza la cuenta regresiva cada un segundo