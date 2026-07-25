const DestinosTuristicos = [
    { ciudad: "Cartagena", atraccionesDisponibles: 12, impuestoTurista: 50000, calificacionGuia: 4.7 },
    { ciudad: "Medellín", atraccionesDisponibles: 18, impuestoTurista: 30000, calificacionGuia: 4.9 },
    { ciudad: "San Andrés", atraccionesDisponibles: 8, impuestoTurista: 80000, calificacionGuia: 4.5 },
    { ciudad: "Santa Marta", atraccionesDisponibles: 15, impuestoTurista: 40000, calificacionGuia: 4.6 },
    { ciudad: "Bogotá", atraccionesDisponibles: 20, impuestoTurista: 20000, calificacionGuia: 4.2 }
];

let mejorDestino = DestinosTuristicos[0];

let calcular_puntaje_instrucciones = (destino) => {
    let factorAtracciones = destino.atraccionesDisponibles * 100;
    let factorImpuesto = destino.impuestoTurista * 0.001;
    let factorCalificacion = destino.calificacionGuia * 200;
    return factorAtracciones - factorImpuesto + factorCalificacion;
};

if (DestinosTuristicos.length === 0) {
    console.log("No hay destinos turísticos registrados para seguir las instrucciones de evaluación.");
} else {
    DestinosTuristicos.forEach((destino) => {
        if (calcular_puntaje_instrucciones(destino) > calcular_puntaje_instrucciones(mejorDestino)) {
            mejorDestino = destino;
        }
    });
    console.log(`El destino turístico seleccionado al seguir estrictamente las instrucciones es ${mejorDestino.ciudad}`);
}