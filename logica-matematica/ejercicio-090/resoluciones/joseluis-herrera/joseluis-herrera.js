        const DestinosTuristicos = [
    { ciudad: "Cartagena", costoPorDia: 350000.75, calificacion: 4.8, diasEstadia: 5 },
    { ciudad: "Medellín", costoPorDia: 280000.40, calificacion: 4.6, diasEstadia: 4 },
    { ciudad: "San Andrés", costoPorDia: 450000.90, calificacion: 4.9, diasEstadia: 7 },
    { ciudad: "Santa Marta", costoPorDia: 300000.20, calificacion: 4.5, diasEstadia: 6 },
    { ciudad: "Bogotá", costoPorDia: 250000.10, calificacion: 4.2, diasEstadia: 3 }
];

let mejorDestino = DestinosTuristicos[0];

let calcular_costo_total = (destino) => {
    let costoTotal = destino.costoPorDia * destino.diasEstadia;
    return Math.round(costoTotal * 100) / 100;
};

let calcular_puntaje_turismo = (destino) => {
    let costoRedondeado = calcular_costo_total(destino);
    let valoracionFinal = destino.calificacion * 1000;
    return valoracionFinal - (costoRedondeado * 0.001);
};

if (DestinosTuristicos.length === 0) {
    console.log("No hay destinos turísticos registrados para calcular el redondeo y la precisión.");
} else {
    DestinosTuristicos.forEach((destino) => {
        if (calcular_puntaje_turismo(destino) > calcular_puntaje_turismo(mejorDestino)) {
            mejorDestino = destino;
        }
    });
    console.log(`El destino turístico con mejor puntaje tras aplicar el redondeo y la precisión es ${mejorDestino.ciudad}`);
}