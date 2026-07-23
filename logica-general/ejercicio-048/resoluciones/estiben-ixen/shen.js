function procesarPelicula(pelicula) {
    const pasos = [];

    if (!pelicula.titulo || !pelicula.genero || pelicula.duracion <= 0) {
        return {
            pelicula: pelicula.titulo || "sin titulo",
            estado: "rechazada",
            motivo: "datos incompletos"
        };
    }

    pasos.push("pelicula registrada");

    if (pelicula.genero === "ciencia ficcion") {
        pasos.push("genero validado");
    } else {
        pasos.push("genero diferente");
    }

    if (pelicula.duracion >= 120) {
        pasos.push("duracion extensa");
    } else {
        pasos.push("duracion normal");
    }

    let estadoFinal = "aprobada";

    if (pelicula.calificacion < 5) {
        estadoFinal = "requiere revision";
    }

    return {
        pelicula: pelicula.titulo,
        pasos,
        estado: estadoFinal
    };
}

const peliculaNormal = {
    titulo: "Horizonte Galactico",
    genero: "ciencia ficcion",
    duracion: 140,
    calificacion: 8
};

const peliculaBorde = {
    titulo: "",
    genero: "ciencia ficcion",
    duracion: 0,
    calificacion: 3
};

console.log(procesarPelicula(peliculaNormal));
console.log(procesarPelicula(peliculaBorde));