//variables globales
let nombreJugador = d.querySelector(".jugador");
let listaJugadores = "jugadores";

//función para obtener los datos
function obtenerDatos() {
    let datosJugador = {
        "nombre": nombreJugador.textContent,
        "intentos": totalIntentos,
        "tiempototal": totalTiempo,
        "tiemposobrante": tiempoSobrante
    }
    //Pasar los datos del jugador
    guardarDatos(datosJugador);
}

//funcion para guardar datos en local storage
function guardarDatos(datos) {
    let jugadores = [];
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores));
    if (datosPrevios != null) {
        jugadores = datosPrevios;
    }

    //Guardar el nuevo jugador
    jugadores.push(datos);

    //Guardar todos los datos en el localstorage
    localStorage.setItem(listaJugadores, JSON.stringify(jugadores));
}


function mostrarDatos() {
    let jugadores = [];
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores));
    if (datosPrevios != null) {
        jugadores = datosPrevios;
    }

    //Organizar los jugadores
    jugadores.sort((a,b)=>{
        if(a.tiempototal < b.tiempototal){
            return -1;
        }
        if(a.intentos < b.intentos){
            return 1;
        }
        
    });

    // mostrar los datos en la tabla records
    jugadores.forEach((jugador, i) => {
        let fila = d.createElement("tr");
        fila.innerHTML = `
            <td> ${i + 1} </td>
            <td> ${jugador.nombre} </td>
            <td> ${jugador.intentos} </td>
            <td> ${jugador.tiempototal} </td>
            <td> ${jugador.tiemposobrante} </td>  
        `;
        tabla.appendChild(fila);
    });
}