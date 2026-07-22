function calcularPuntajeFormulasQuimicas(reactivosMezclados, bonoPureza, penalizacionContaminacion) {
    if (reactivosMezclados.length === 0) {
        return 0;
    }

    let totalReactivos = reactivosMezclados.length;
    let puntajeFinal = totalReactivos + bonoPureza - penalizacionContaminacion;

    return puntajeFinal;
}

// prueba flujo normal
let ensayoLaboratorio = [12, 18, 25, 30];
console.log("Resultado Fórmulas Químicas:", calcularPuntajeFormulasQuimicas(ensayoLaboratorio, 8, 3)); // esperado: 27

// prueba caso brde
let matrazVacio = [];
console.log("Resultado Fórmulas Químicas Caso Borde:", calcularPuntajeFormulasQuimicas(matrazVacio, 12, 4)); // esperado: 0

