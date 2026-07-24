// ejercicio logica - velocidad tiempo distancia - Ejercicio 075

const calcularRendimientoRender = (trazosTotales, tiempoMinutos) => {
    if (tiempoMinutos <= 0) {
        return { error: "El tiempo en minutos debe ser mayor a cero." };
    }

    // Calculamos velocidad de trazo por minuto
    const velocidadTrazo = trazosTotales / tiempoMinutos;
    
    // Estimación de tiempo restante para completar un lienzo complejo de 1000 trazos
    const trazosObjetivo = 1000;
    const tiempoRestanteMinutos = (trazosObjetivo - trazosTotales) / velocidadTrazo;

    return {
        velocidad_por_minuto: parseFloat(velocidadTrazo.toFixed(2)),
        tiempo_estimado_restante: tiempoRestanteMinutos > 0 ? parseFloat(tiempoRestanteMinutos.toFixed(2)) : 0,
        explicacion: `Se calculó la velocidad basada en ${trazosTotales} trazos realizados en ${tiempoMinutos} minutos.`
    };
};

console.log(calcularRendimientoRender(250, 10));
console.log(calcularRendimientoRender(500, 20));