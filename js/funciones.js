//VARIABLE GLOBALES
const d = document;
let imgN1 = [
    { nombre: "1", url: "imagenes/1.jpg" },
    { nombre: "2", url: "imagenes/2.jpg" },
    { nombre: "3", url: "imagenes/3.jpg" },
    { nombre: "4", url: "imagenes/4.jpg" },
    { nombre: "5", url: "imagenes/5.jpg" },
    { nombre: "6", url: "imagenes/6.jpg" },
    { nombre: "7", url: "imagenes/7.jpg" },
    { nombre: "8", url: "imagenes/8.jpg" },
    { nombre: "1", url: "imagenes/1.jpg" },
    { nombre: "2", url: "imagenes/2.jpg" },
    { nombre: "3", url: "imagenes/3.jpg" },
    { nombre: "4", url: "imagenes/4.jpg" },
    { nombre: "5", url: "imagenes/5.jpg" },
    { nombre: "6", url: "imagenes/6.jpg" },
    { nombre: "7", url: "imagenes/7.jpg" },
    { nombre: "8", url: "imagenes/8.jpg" },
];

let imgN2 = [
    { nombre: "P1", url: "imagenes/Pokemon/P1.png" },
    { nombre: "P2", url: "imagenes/Pokemon/P2.png" },
    { nombre: "P3", url: "imagenes/Pokemon/P3.png" },
    { nombre: "P4", url: "imagenes/Pokemon/P4.png" },
    { nombre: "P5", url: "imagenes/Pokemon/P5.png" },
    { nombre: "P6", url: "imagenes/Pokemon/P6.png" },
    { nombre: "P7", url: "imagenes/Pokemon/P7.png" },
    { nombre: "P8", url: "imagenes/Pokemon/P8.png" },
    { nombre: "P9", url: "imagenes/Pokemon/P9.png" },
    { nombre: "P10", url: "imagenes/Pokemon/P10.png" },
    //-----------------------------------------------------
    { nombre: "P1", url: "imagenes/Pokemon/P1-2.png" },
    { nombre: "P2", url: "imagenes/Pokemon/P2-2.png" },
    { nombre: "P3", url: "imagenes/Pokemon/P3-2.png" },
    { nombre: "P4", url: "imagenes/Pokemon/P4-2.png" },
    { nombre: "P5", url: "imagenes/Pokemon/P5-2.png" },
    { nombre: "P6", url: "imagenes/Pokemon/P6-2.png" },
    { nombre: "P7", url: "imagenes/Pokemon/P7-2.png" },
    { nombre: "P8", url: "imagenes/Pokemon/P8-2.png" },
    { nombre: "P9", url: "imagenes/Pokemon/P9-2.png" },
    { nombre: "P10", url: "imagenes/Pokemon/P10-2.png" }
];

let imgN3 = [
    { nombre: "P1", url: "imagenes/Pokemon/P1.png" },
    { nombre: "P2", url: "imagenes/Pokemon/P2.png" },
    { nombre: "P3", url: "imagenes/Pokemon/P3.png" },
    { nombre: "P4", url: "imagenes/Pokemon/P4.png" },
    { nombre: "P5", url: "imagenes/Pokemon/P5.png" },
    { nombre: "P6", url: "imagenes/Pokemon/P6.png" },
    { nombre: "P7", url: "imagenes/Pokemon/P7.png" },
    { nombre: "P8", url: "imagenes/Pokemon/P8.png" },
    { nombre: "P9", url: "imagenes/Pokemon/P9.png" },
    { nombre: "P10", url: "imagenes/Pokemon/P10.png" },
    { nombre: "P11", url: "imagenes/Pokemon/P11.png" },
    { nombre: "P12", url: "imagenes/Pokemon/P12.png" },
    //-----------------------------------------------------
    { nombre: "P1", url: "imagenes/Pokemon/P1-2.png" },
    { nombre: "P2", url: "imagenes/Pokemon/P2-2.png" },
    { nombre: "P3", url: "imagenes/Pokemon/P3-2.png" },
    { nombre: "P4", url: "imagenes/Pokemon/P4-2.png" },
    { nombre: "P5", url: "imagenes/Pokemon/P5-2.png" },
    { nombre: "P6", url: "imagenes/Pokemon/P6-2.png" },
    { nombre: "P7", url: "imagenes/Pokemon/P7-2.png" },
    { nombre: "P8", url: "imagenes/Pokemon/P8-2.png" },
    { nombre: "P9", url: "imagenes/Pokemon/P9-2.png" },
    { nombre: "P10", url: "imagenes/Pokemon/P10-2.png" },
    { nombre: "P11", url: "imagenes/Pokemon/P11-2.png" },
    { nombre: "P12", url: "imagenes/Pokemon/P12-2.png" }
];


let imagenNivel;
let nombreIMG = [];
let posIMG = [];
let tablero = d.querySelector(".tablero"); //TABLERO DEL JUEGO
let aciertos = 0;
let totalIntentos = 0;
let totalTiempo = 0;
let tiempoSobrante = 0;
let intentos = 0;
let nivel = 1;
let tiempo = 60;
let tiempoTranscurrido;
let btnIniciar = d.querySelector(".btn-iniciar");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarNivel = d.querySelector(".nivel");
let mostrarTiempo = d.querySelector(".tiempo");
let estoyJugando = false;
let mostrarJugador = d.querySelector(".jugador");
let tabla = d.querySelector(".records tbody")

let sonidoSeleccionar = new Audio("./sonidos/seleccionar.mp3");
let sonidoCorrecto = new Audio("./sonidos/correcto.mp3");
let sonidoIncorrecto = new Audio("./sonidos/incorrecto.mp3");
let sonidoPerdida = new Audio("./sonidos/perdida.mp3");
let sonidoGanado = new Audio("./sonidos/ganar.mp3");

d.addEventListener("DOMContentLoaded", () => {
    mostrarDatos();
});


//Evento de inicio de juego
btnIniciar.addEventListener("click", function () {
    if (estoyJugando == false && nivel == 1) {
        VentanaModal();

    } else if (estoyJugando == false && nivel == 2) {
        estoyJugando = true;
        Nivel2();
    } else if (estoyJugando == false && nivel == 3) {
        estoyJugando = true;
        Nivel3();
    }
});


//FUNCION PARA AGREGA LAS IMAGENES AL TABLERO
function agregarImagenes() {

    if (nivel == 1) {
        imagenNivel = imgN1
    }
    else if (nivel == 2) {
        imagenNivel = imgN2
    }
    else if (nivel == 3) {
        imagenNivel = imgN3
    }

    //poner las imagenes aleatorias
    imagenNivel.sort(() => Math.random() - 0.5);

    imagenNivel.forEach((img, i) => {
        let div = d.createElement("div"); //CREAMOS ETIQUETA DIV
        div.className = "col-3"; //LA CLASE DEBE SER DE BOOSTRAP
        let imagen = d.createElement("img"); //CREAMOS ETIQUETA DE IMAGEN
        imagen.className = "img-fluid altura"; //CLASE PARA ADAPTAR LA IMG
        imagen.src = "imagenes/Oculta.jpg"; //UBICACION DE LA IMAGEN
        imagen.id = i; //Agregar ID a las imagenes
        imagen.addEventListener("click", mostrarImagenes);
        div.appendChild(imagen); //AGREGRA LA IMAGEN AL DIV
        tablero.appendChild(div); // AGREGAR EL DIV AL TABLERO
    });

}

//Funcion para mostrar imagenes ocultas
function mostrarImagenes() {
    sonidoSeleccionar.play();
    let imagenID = this.getAttribute("id");
    //Mostrar imagen
    this.src = imagenNivel[imagenID].url;
    nombreIMG.push(imagenNivel[imagenID].nombre);
    posIMG.push(imagenID);

    //Valida si se muestran dos imagenes
    if (nombreIMG.length == 2) {
        setTimeout(compararImagenes, 200);
        // compararImagenes();
    }
}

//funcion para compara las imagenes
function compararImagenes() {
    let imagenesTablero = document.querySelectorAll(".tablero .col-3 img");
    //Validar si las imagenes se llaman igual
    if (nombreIMG[0] == nombreIMG[1]) {
        if (posIMG[0] != posIMG[1]) {
            sonidoCorrecto.play();
            imagenesTablero[posIMG[0]].src = "imagenes/Pokemon/Pokeball.png"
            imagenesTablero[posIMG[1]].src = "imagenes/Pokemon/Pokeball.png"
            imagenesTablero[posIMG[0]].removeEventListener("click", mostrarImagenes);
            imagenesTablero[posIMG[1]].removeEventListener("click", mostrarImagenes);
            aciertos++;
            mostrarAciertos.textContent = aciertos;
        } else {
            alert("Debes seleccionar otra imagen");
            imagenesTablero[posIMG[0]].src = "imagenes/Oculta.jpg"
        }

    } else {
        sonidoIncorrecto.play();
        imagenesTablero[posIMG[0]].src = "imagenes/Oculta.jpg"
        imagenesTablero[posIMG[1]].src = "imagenes/Oculta.jpg"
    }
    //Guardar los intentos
    intentos++;
    mostrarIntentos.textContent = intentos;
    //Reiniciar las variables
    nombreIMG = [];
    posIMG = [];


    //Comprobar si se adivinaron todas las imagenes
    if (nivel == 1 && aciertos == 8) {
        sonidoGanado.play();
        setTimeout(() => {
            alert("Felicidades pasaste al siguiente nivel");
        }, 2000);
        totalIntentos += intentos;
        totalTiempo += tiempo;
        tiempoSobrante += (60 - tiempo);
        nivel++;
        obtenerDatos();
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        LimpiarTablero();
    } else if (nivel == 2 && aciertos == 10) {
        sonidoGanado.play();
        setTimeout(() => {
            nivel++;
            alert("Felicidades pasaste al siguiente nivel");
        }, 2000);
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 40;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        LimpiarTablero();
    } else if (nivel == 3 && aciertos == 12) {
        sonidoGanado.play();
        alert("Felicidades has pasado el juego");
        setTimeout(() => {
            location.reload();
        }, 3000);

    }
}


function Nivel1() {
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    TiempoDeJuego();
}
function Nivel2() {
    agregarImagenes();
    TiempoDeJuego();
}
function Nivel3() {
    agregarImagenes();
    TiempoDeJuego();
}


function TiempoDeJuego() {
    tiempoTranscurrido = setInterval(() => {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 10) {
            //alert("El tiempo se agota!!");

            mostrarTiempo.classList.add("tiempo-agotado");
        } else if (tiempo == 0) {
            clearInterval(tiempoTranscurrido);
            sonidoPerdida.play();

            setTimeout(() => {
                alert("El tiempo se agotó");
                estoyJugando == false;
                location.reload();
            }, 3000);

        }
    }, 1000);
}

function LimpiarTablero() {
    let imagenQuitar = d.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img) => {
        img.remove();
    });
}


//Mostrar ventana modal
function VentanaModal() {
    let mostrarModal = d.querySelector("#exampleModal");
    let cerrarModal = d.querySelectorAll(".cerrar");
    let inputJugador = d.querySelector(".nombre-jugador");
    let btnJugador = d.querySelector(".registrar-jugador");


    cerrarModal.forEach((btn) => {
        btn.addEventListener("click", () => {
            mostrarModal.classList.remove("show");
            mostrarModal.style.display = "none";
        });
    });
    mostrarModal.classList.add("show");
    mostrarModal.style.display = "block";

    btnJugador.addEventListener("click", () => {

        //Mostrar nombre registrado en el tablero
        mostrarJugador.textContent = inputJugador.value;

        //Cerrar ventana modal
        mostrarModal.classList.remove("show");
        mostrarModal.style.display = "none";

        //Inicio de nivel 1
        estoyJugando = true;
        Nivel1();
    });
}

