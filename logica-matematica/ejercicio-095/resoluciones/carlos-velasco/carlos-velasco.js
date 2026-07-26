const calcularRendimientoTrazosDibujo = (trazos) => {
    if (!trazos || !Array.isArray(trazos) || trazos.length === 0) {
        return { error: "La lista de trazos de dibujo digital está vacía o no es válida." };
    }

    let distanciaTotalPx = 0;
    let tiempoTotalSeg = 0;
    let detalleTrazos = [];

    for (let i = 0; i < trazos.length; i++) {
        let trazo = trazos[i];
        let distancia = trazo.distanciaPx > 0 ? trazo.distanciaPx : 0;
        let tiempo = trazo.tiempoSeg > 0 ? trazo.tiempoSeg : 0.1; 

        distanciaTotalPx += distancia;
        tiempoTotalSeg += tiempo;

        let velocidadPxPorSeg = distancia / tiempo;

        detalleTrazos.push({
            trazo_id: i + 1,
            distancia_px: parseFloat(distancia.toFixed(2)),
            tiempo_seg: parseFloat(tiempo.toFixed(2)),
            velocidad_px_s: parseFloat(velocidadPxPorSeg.toFixed(2))
        });
    }

    const velocidadPromedio = tiempoTotalSeg > 0 ? (distanciaTotalPx / tiempoTotalSeg) : 0;

    let estiloTrazo = "Estándar / Equilibrado";
    if (velocidadPromedio > 150) {
        style = "Trazos Rápidos / Gestuales";
        estiloTrazo = "Trazos Rápidos / Gestuales";
    } else if (velocidadPromedio < 50) {
        estiloTrazo = "Trazos Lentos / Alta Precisión (Lineart Fino)";
    }

    return {
        distancia_total_px: parseFloat(distanciaTotalPx.toFixed(2)),
        tiempo_total_seg: parseFloat(tiempoTotalSeg.toFixed(2)),
        velocidad_promedio_px_s: parseFloat(velocidadPromedio.toFixed(2)),
        estilo_clasificacion: estiloTrazo,
        detalle_trazos: detalleTrazos,
        explicacion: "Se aplicaron las fórmulas de velocidad, tiempo y distancia sobre los trazos de dibujo digital para determinar el ritmo y estilo de ejecución del artista según las reglas del reto."
    };
};

const trazosNormales = [
    { distanciaPx: 300, tiempoSeg: 2.5 },
    { distanciaPx: 150, tiempoSeg: 1.0 },
    { distanciaPx: 600, tiempoSeg: 5.0 }
];

const trazosBorde = [
    { distanciaPx: 20, tiempoSeg: 0.1 }
];

console.log(calcularRendimientoTrazosDibujo(trazosNormales));
console.log(calcularRendimientoTrazosDibujo(trazosBorde));