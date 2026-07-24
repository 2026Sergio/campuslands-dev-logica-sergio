const EquiposFutbol = [
    { nombre: "Leones Futsal", partidosJugados: 20, golesFavor: 65, activo: true },
    { nombre: "Real Bucana", partidosJugados: 0, golesFavor: 0, activo: false },
    { nombre: "Galácticos FS", partidosJugados: 20, golesFavor: 80, activo: true },
    { nombre: "Academia Futsal", partidosJugados: 15, golesFavor: 30, activo: false },
    { nombre: "Titanes Futsal", partidosJugados: 20, golesFavor: 55, activo: true }
];

let validados = [];
let validar_equipo = (e) => e.activo && (e.partidosJugados > 0) && (e.golesFavor > 0);

if (EquiposFutbol.length === 0) {
    console.log("No hay equipos de fútbol sala registrados para validar.");
} else {
    EquiposFutbol.forEach((equipo) => {
        if (validar_equipo(equipo)) {
            validados.push(equipo);
        }
    });
    console.log(`Se validaron correctamente ${validados.length} equipos de fútbol sala.`);
}