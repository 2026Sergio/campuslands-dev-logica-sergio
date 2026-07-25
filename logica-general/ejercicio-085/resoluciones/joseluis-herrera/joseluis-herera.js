const Reparaciones = [
    { codigo: "REP-001", urgencia: 3, costo: 150000, tiempoEstimado: 2 },
    { codigo: "REP-002", urgencia: 5, costo: 450000, tiempoEstimado: 5 },
    { codigo: "REP-003", urgencia: 1, costo: 80000, tiempoEstimado: 1 },
    { codigo: "REP-004", urgencia: 4, costo: 300000, tiempoEstimado: 3 },
    { codigo: "REP-005", urgencia: 2, costo: 120000, tiempoEstimado: 2 }
];

let mayorPrioridad = Reparaciones[0];
let calcular_prioridad = (r) => (r.urgencia * 200) + (r.costo * 0.001) - (r.tiempoEstimado * 50);

if (Reparaciones.length === 0) {
    console.log("No hay reparaciones registradas en el taller mecánico.");
} else {
    Reparaciones.forEach((reparacion) => {
        if (calcular_prioridad(reparacion) > calcular_prioridad(mayorPrioridad)) {
            mayorPrioridad = reparacion;
        }
    });
    console.log(`La reparación con mayor prioridad establecida es la código ${mayorPrioridad.codigo}`);
}