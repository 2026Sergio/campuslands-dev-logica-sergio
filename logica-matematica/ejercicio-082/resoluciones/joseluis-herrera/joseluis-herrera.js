const EquiposFutbol = [
    { nombre: "Leones Futsal", partidosJugados: 20, partidosGanados: 14, golesFavor: 65 },
    { nombre: "Real Bucana", partidosJugados: 20, partidosGanados: 9, golesFavor: 45 },
    { nombre: "Galácticos FS", partidosJugados: 20, partidosGanados: 17, golesFavor: 80 },
    { nombre: "Academia Futsal", partidosJugados: 20, partidosGanados: 6, golesFavor: 30 },
    { nombre: "Titanes Futsal", partidosJugados: 20, partidosGanados: 12, golesFavor: 55 }
];

let mejorEquipo = EquiposFutbol[0];
let calcular_efectividad = (e) => (e.partidosGanados / e.partidosJugados) * 100;

if (EquiposFutbol.length === 0) {
    console.log("No hay equipos de fútbol sala registrados en el ranking.");
} else {
    EquiposFutbol.forEach((equipo) => {
        if (calcular_efectividad(equipo) > calcular_efectividad(mejorEquipo)) {
            mejorEquipo = equipo;
        }
    });
    console.log(`El equipo de fútbol sala con mayor porcentaje de efectividad es ${mejorEquipo.nombre}`);
}