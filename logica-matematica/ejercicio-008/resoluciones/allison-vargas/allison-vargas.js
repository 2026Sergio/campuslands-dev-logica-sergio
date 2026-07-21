function calcularPuntajePelicula(puntuaciones, bono, penalizacion) {
    // 1. Validar caso borde: lista vacía o nula
    if (!puntuaciones || puntuaciones.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "inválido",
            explicacion: "La lista de puntuaciones está vacía o no es válida."
        };
    }

    // 2. Calcular el promedio de las puntuaciones
    const suma = puntuaciones.reduce((acc, curr) => acc + curr, 0);
    const promedio = suma / puntuaciones.length;

    // 3. Aplicar reglas de bono y penalización
    const puntajeFinal = Math.round(promedio + bono - penalizacion);

    // 4. Determinar clasificación según el puntaje final
    let clasificacion = "";
    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "estándar";
    } else {
        clasificacion = "básico";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se calculó el promedio (${promedio.toFixed(1)}), se sumó el bono (${bono}) y se restó la penalización (${penalizacion}).`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = calcularPuntajePelicula([12, 18, 25, 30], 8, 3);
console.log(caso1);

console.log("\n=== Caso Borde (Lista Vacía) ===");
const caso2 = calcularPuntajePelicula([], 8, 3);
console.log(caso2);