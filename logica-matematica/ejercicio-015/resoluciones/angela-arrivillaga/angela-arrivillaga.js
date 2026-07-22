function calcularPuntajeDibujoDigital(capasUtilizadas, bonoPincel, penalizacionMemoria) {
    if (capasUtilizadas.length === 0) {
        return 0;
    }

    let totalIlustraciones = capasUtilizadas.length;
    let puntajeFinal = totalIlustraciones + bonoPincel - penalizacionMemoria;

    return puntajeFinal;
}

// prueba 
let proyectosIlustracion = [12, 18, 25, 30];
console.log("Resultado Dibujo Digital:", calcularPuntajeDibujoDigital(proyectosIlustracion, 8, 3)); // Esperado: 27

// prueba caso borde
let ilustracionPesada = [150];
console.log("Resultado Dibujo Digital Caso Borde:", calcularPuntajeDibujoDigital(ilustracionPesada, 2, 80)); // Esperado: -77
