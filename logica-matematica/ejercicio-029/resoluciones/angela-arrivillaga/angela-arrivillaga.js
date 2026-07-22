function calcularPuntajePeliculasMiedo(sustosPorMinuto, bonoSonido, penalizacionCliche) {
    if (sustosPorMinuto.length === 0) {
        return 0;
    }

    let totalEscenas = sustosPorMinuto.length;
    let puntajeFinal = totalEscenas + bonoSonido - penalizacionCliche;

    return puntajeFinal;
}

// prueba flujo normal
let metrajeTerror = [12, 18, 25, 30];
console.log("Resultado Películas de Miedo:", calcularPuntajePeliculasMiedo(metrajeTerror, 8, 3)); // Esperado: 27

// preueba caso borde
let proyectoCancelado = [];
console.log("Resultado Películas de Miedo Caso Borde:", calcularPuntajePeliculasMiedo(proyectoCancelado, 20, 10)); // Esperado: 0
