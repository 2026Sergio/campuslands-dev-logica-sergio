const Luchadores = [
    { nombre: "Alex Pereira", pesoKg: 93, victorias: 25, derrotas: 2, empates: 0 },
    { nombre: "Israel Adesanya", pesoKg: 84, victorias: 22, derrotas: 3, empates: 0 },
    { nombre: "Rico Verhoeven", pesoKg: 120, victorias: 60, derrotas: 10, empates: 1 },
    { nombre: "Giorgio Petrosyan", pesoKg: 70, victorias: 104, derrotas: 3, empates: 2 },
    { nombre: "Superbon Singha Mawynn", pesoKg: 70, victorias: 114, derrotas: 35, empates: 0 }
];

let mejorLuchador = Luchadores[0];

let calcular_combinacion_combate = (luchador) => {
    let totalPeleas = luchador.victorias + luchador.derrotas + luchador.empates;
    let efectividad = (luchador.victorias / (totalPeleas > 0 ? totalPeleas : 1)) * 100;
    return (efectividad * 10) + (luchador.victorias * 2) - (luchador.derrotas * 5);
};

if (Luchadores.length === 0) {
    console.log("No hay luchadores de kickboxing registrados para realizar el conteo combinatorio.");
} else {
    Luchadores.forEach((luchador) => {
        if (calcular_combinacion_combate(luchador) > calcular_combinacion_combate(mejorLuchador)) {
            mejorLuchador = luchador;
        }
    });
    console.log(`El luchador con mejor puntaje tras el conteo combinatorio simple es ${mejorLuchador.nombre}`);
}