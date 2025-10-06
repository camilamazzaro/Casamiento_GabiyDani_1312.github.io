let fecha = new Date(2025, 11, 13, 21); /*año - mes - día - hora - minutos (11 = diciembre) */

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


/* ---- ANIMACIÓN REGALO ----- */ 

  const regalo = document.getElementById('regalo');
  const tapa = document.getElementById('tapa');
  const modal = document.getElementById('modal');
  const cerrar = document.getElementById('cerrar');

  regalo.addEventListener('click', () => {
    tapa.classList.add('abierta');
    
    // Espera a que se abra la tapa antes de mostrar el modal
    setTimeout(() => {
      modal.style.display = 'flex';
    }, 600);
  });

  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
    tapa.classList.remove('abierta'); // vuelve a cerrar
  });

  // Cerrar si se hace clic fuera del contenido
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      tapa.classList.remove('abierta');
    }
  });

/* ---- MODAL ALOJAMIENTO ---- */
const btnAlojamiento = document.getElementById('btn-alojamiento');
const modalAlojamiento = document.getElementById('modalAlojamiento');
const cerrarAlojamiento = document.getElementById('cerrarAlojamiento');

btnAlojamiento.addEventListener('click', () => {
  modalAlojamiento.style.display = 'flex';
  document.activeElement.blur();
});

cerrarAlojamiento.addEventListener('click', () => {
  modalAlojamiento.style.display = 'none';
});

// Cerrar si se hace clic fuera del contenido
modalAlojamiento.addEventListener('click', (e) => {
  if (e.target === modalAlojamiento) {
    modalAlojamiento.style.display = 'none';
  }
});


// Botón WhatsApp
function toggleOpciones(event) {
    event.stopPropagation(); // evita que el click se propague al documento
    document.getElementById("opcionesWsp").classList.toggle("active");
}

document.addEventListener("click", function(e) {
    const opciones = document.getElementById("opcionesWsp");
    const container = document.getElementById("whatsappContainer");

    if (opciones.classList.contains("active") && !container.contains(e.target)) {
        opciones.classList.remove("active");
    }
});

window.addEventListener("scroll", function() {
    const wsp = document.getElementById("whatsappContainer");
    if (window.scrollY > 50) {   // cuando bajás 50px
        wsp.classList.add("visible");
    } else {
        wsp.classList.remove("visible");
    }
});

// Audio
function toggleMusica() {
  const icono = document.querySelector(".icono-musica");

  // Desmutear si estaba silenciado
  musica.muted = false;

  if (musica.paused) {
    musica.play();
    icono.classList.remove("pausado");
  } else {
    musica.pause();
    icono.classList.add("pausado");
  }
}


window.addEventListener("scroll", function() {
  const musicaBtn = document.querySelector(".btn-musica");
  if (window.scrollY > 50) {
    musicaBtn.classList.add("visible");
  } else {
    musicaBtn.classList.remove("visible");
  }
});


/* PARA MANEJAR INGRESO CON Y SIN MUSICA */
const musica = document.getElementById("musica");
const overlay = document.getElementById("cartel-inicial");

// Ingreso con música
document.getElementById("conMusica").addEventListener("click", () => {
  musica.muted = true;
  musica.load();
  musica.play().then(() => {
    musica.muted = false;
    overlay.style.display = "none";
  }).catch((error) => {
    console.log("El navegador bloqueó el audio:", error);
    overlay.style.display = "none";
  });
});

// Ingreso sin música
document.getElementById("sinMusica").addEventListener("click", () => {
  musica.pause();
  musica.muted = false; 
  overlay.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
    // Cargar y desbloquear audio al primer toque
    const musica = document.getElementById("musica");
    const unlockAudio = () => {
        musica.play().then(() => musica.pause());
        document.removeEventListener("touchstart", unlockAudio);
    };
    document.addEventListener("touchstart", unlockAudio, { once: true });
});

