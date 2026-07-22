function calcularPuntajeVideojuegos(participantes, bono, penalizacion) {
    if (participantes.length === 0) {
        return 0;
    }

    let totalParticipantes = participantes.length;
    let puntajeFinal = totalParticipantes + bono - penalizacion;

    return puntajeFinal;
}

// prueba flujo normal
let torneoEsports = [12, 18, 25, 30];
console.log("Resultado Videojuegos:", calcularPuntajeVideojuegos(torneoEsports, 8, 3)); // esperado: 27

// prueba casbo borde
let partidaAmistosa = [10, 20, 30];
console.log("Resultado Videojuegos Caso Borde:", calcularPuntajeVideojuegos(partidaAmistosa, 0, 0)); // esprado: 3
