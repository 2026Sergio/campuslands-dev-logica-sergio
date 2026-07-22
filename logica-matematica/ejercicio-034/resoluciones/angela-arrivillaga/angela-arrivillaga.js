function calcularPuntajeTatuajes(disenosTinta, bonoComplejidad, penalizacionPiel) {
    if (disenosTinta.length === 0) {
        return 0;
    }

    let totalDisenos = disenosTinta.length;
    let puntajeFinal = totalDisenos + bonoComplejidad - penalizacionPiel;

    return puntajeFinal;
}

// prueba flujo normal
let catalogoTatuajes = [12, 18, 25, 30];
console.log("Resultado Tatuajes:", calcularPuntajeTatuajes(catalogoTatuajes, 8, 3)); // Esperado: 27

// prueba caso borde
let obraMaestra = [100, 200];
console.log("Resultado Tatuajes Caso Borde:", calcularPuntajeTatuajes(obraMaestra, 50, 5)); // Esperado: 47
