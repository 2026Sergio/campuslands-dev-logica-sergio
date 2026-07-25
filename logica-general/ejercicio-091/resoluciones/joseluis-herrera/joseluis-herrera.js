const Luchadores = [
    { nombre: "Alex Pereira", pesoKg: 93, victoriasPorKo: 18, experienciaAnios: 10 },
    { nombre: "Israel Adesanya", pesoKg: 84, victoriasPorKo: 15, experienciaAnios: 12 },
    { nombre: "Rico Verhoeven", pesoKg: 120, victoriasPorKo: 24, experienciaAnios: 15 },
    { nombre: "Giorgio Petrosyan", pesoKg: 70, victoriasPorKo: 11, experienciaAnios: 18 },
    { nombre: "Superbon Singha Mawynn", pesoKg: 70, victoriasPorKo: 28, experienciaAnios: 14 }
];

let mejorLuchador = Luchadores[0];

let calcular_puntaje_combate = (luchador) => {
    let factorKo = luchador.victoriasPorKo * 50;
    let factorExperiencia = luchador.experienciaAnios * 30;
    let factorPeso = luchador.pesoKg * 2;
    return factorKo + factorExperiencia + factorPeso;
};

if (Luchadores.length === 0) {
    console.log("No hay luchadores de kickboxing registrados para organizar la lista.");
} else {
    Luchadores.forEach((luchador) => {
        if (calcular_puntaje_combate(luchador) > calcular_puntaje_combate(mejorLuchador)) {
            mejorLuchador = luchador;
        }
    });
    console.log(`El luchador de kickboxing con mejor puntuación y organización en la lista es ${mejorLuchador.nombre}`);
}