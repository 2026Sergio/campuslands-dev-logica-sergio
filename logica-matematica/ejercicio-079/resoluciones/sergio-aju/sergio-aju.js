const validarYCalcularPuntajes = (datos) => {
    if (!datos?.participantes?.length) return { error: "Arreglo de participantes vacío o inválido" };

    let suma = 0;
    for (let i = 0; i < datos.participantes.length; i++) {
        suma += datos.participantes[i];
    }

    const promedioBase = Math.round(suma / datos.participantes.length);
    const puntajeFinal = promedioBase + (datos.bono || 0) - (datos.penalizacion || 0);
    const clasificacion = puntajeFinal >= 25 ? "competitivo" : "estandar";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "se sumo el bono y se resto la penalizacion segun las reglas."
    };
};

// Pruebas
console.log(validarYCalcularPuntajes({
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
}));

console.log(validarYCalcularPuntajes({
    participantes: [100, 100],
    bono: 10,
    penalizacion: 20
}));