function simularEstadoPelicula(pelicula) {
    const historialEstados = [];

    if (!pelicula.titulo || pelicula.nivelTerror < 0) {
        return {
            pelicula: pelicula.titulo || "sin titulo",
            estado: "error",
            motivo: "datos invalidos"
        };
    }

    let estado = "inicio";
    historialEstados.push(estado);

    if (pelicula.nivelTerror >= 8) {
        estado = "alto impacto";
    } else if (pelicula.nivelTerror >= 5) {
        estado = "terror moderado";
    } else {
        estado = "terror bajo";
    }

    historialEstados.push(estado);

    if (pelicula.final === "abierto") {
        estado = "continuacion posible";
    } else {
        estado = "historia finalizada";
    }

    historialEstados.push(estado);

    return {
        pelicula: pelicula.titulo,
        historial: historialEstados,
        estadoFinal: estado
    };
}

const peliculaNormal = {
    titulo: "La Casa Oscura",
    nivelTerror: 9,
    final: "abierto"
};

const peliculaBorde = {
    titulo: "",
    nivelTerror: -1,
    final: "cerrado"
};

console.log(simularEstadoPelicula(peliculaNormal));
console.log(simularEstadoPelicula(peliculaBorde));