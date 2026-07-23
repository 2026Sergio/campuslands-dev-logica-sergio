const Participantes = [
    { nombre: "CyberKnights", partidasGanadas: 15, precisionTiro: 85, nivelDisciplina: 9 },
    { nombre: "ShadowDragons", partidasGanadas: 10, precisionTiro: 92, nivelDisciplina: 6 },
    { nombre: "ApexStorm", partidasGanadas: 18, precisionTiro: 78, nivelDisciplina: 8 },
    { nombre: "PhantomRebels", partidasGanadas: 12, precisionTiro: 88, nivelDisciplina: 7 },
    { nombre: "PixelWarriors", partidasGanadas: 14, precisionTiro: 80, nivelDisciplina: 10 }
];

let seleccionado = Participantes[0];
let tomar_decision_equipo = (e) => (e.partidasGanadas * 50) + (e.precisionTiro * 10) + (e.nivelDisciplina * 30);

if (Participantes.length === 0) {
    console.log("No hay equipos de esports registrados para la toma de decisiones.");
} else {
    Participantes.forEach((equipo) => {
        if (tomar_decision_equipo(equipo) > tomar_decision_equipo(seleccionado)) {
            seleccionado = equipo;
        }
    });
    console.log(`El equipo seleccionado mediante la toma de decisiones es ${seleccionado.nombre}`);
}