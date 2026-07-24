const Jugadores = [
    { nombre: "ShadowX", kda: 3.5, partidas: 120, nivelHonor: 4 },
    { nombre: "ViperQueen", kda: 1.8, partidas: 45, nivelHonor: 2 },
    { nombre: "TitanGamer", kda: 4.2, partidas: 200, nivelHonor: 5 },
    { nombre: "NoobMaster", kda: 0.9, partidas: 30, nivelHonor: 1 },
    { nombre: "CyberNinja", kda: 2.9, partidas: 90, nivelHonor: 3 }
];

let elite = [];
let evaluar_clasificacion = (j) => (j.kda >= 2.5) && (j.partidas >= 80) && (j.nivelHonor >= 3);

if (Jugadores.length === 0) {
    console.log("No hay jugadores registrados para clasificar.");
} else {
    Jugadores.forEach((jugador) => {
        if (evaluar_clasificacion(jugador)) {
            elite.push(jugador);
        }
    });
    console.log(`Se clasificaron ${elite.length} jugadores en la categoría de élite.`);
}