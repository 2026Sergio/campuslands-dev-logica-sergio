const Partidas = [
    { id: 1, basePuntos: 1000, bonifRacha: 150, penalizacionMuerte: 50 },
    { id: 2, basePuntos: 800, bonifRacha: 50, penalizacionMuerte: 120 },
    { id: 3, basePuntos: 1200, bonifRacha: 300, penalizacionMuerte: 30 },
    { id: 4, basePuntos: 950, bonifRacha: 100, penalizacionMuerte: 90 },
    { id: 5, basePuntos: 1100, bonifRacha: 200, penalizacionMuerte: 40 }
];

let mejorPartida = Partidas[0];
let calcular_puntuaje_neto = (p) => p.basePuntos + p.bonifRacha - p.penalizacionMuerte;

if (Partidas.length === 0) {
    console.log("No hay partidas registradas para calcular las operaciones aritméticas.");
} else {
    Partidas.forEach((partida) => {
        if (calcular_puntuaje_neto(partida) > calcular_puntuaje_neto(mejorPartida)) {
            mejorPartida = partida;
        }
    });
    console.log(`La partida con mayor puntaje neto obtenido es la número ${mejorPartida.id}`);
}