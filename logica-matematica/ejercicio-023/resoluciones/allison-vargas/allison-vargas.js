function analizarPuntajesTorneo(puntajes) {
    // 1. Validar entradas
    if (!Array.isArray(puntajes) || puntajes.length === 0) {
        return {
            promedio: 0,
            mediana: 0,
            clasificacion: "inválido",
            explicacion: "La lista de puntajes debe ser un arreglo no vacío."
        };
    }

    // Verificar que todos los datos sean números válidos
    for (let i = 0; i < puntajes.length; i++) {
        const p = puntajes[i];
        if (typeof p !== 'number' || isNaN(p) || p < 0) {
            return {
                promedio: 0,
                mediana: 0,
                clasificacion: "inválido",
                explicacion: "Se encontraron puntajes inválidos en la lista."
            };
        }
    }

    // 2. Calcular el promedio
    const sumaTotal = puntajes.reduce((acum, val) => acum + val, 0);
    const promedio = Number((sumaTotal / puntajes.length).toFixed(2));

    // 3. Calcular la mediana
    const ordenados = [...puntajes].sort((a, b) => a - b);
    const total = ordenados.length;
    const mitad = Math.floor(total / 2);
    let mediana = 0;

    if (total % 2 === 0) {
        mediana = (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    } else {
        mediana = ordenados[mitad];
    }
    mediana = Number(mediana.toFixed(2));

    // 4. Clasificar según la mediana
    let clasificacion = "";
    if (mediana >= 75) {
        clasificacion = "consistente";
    } else if (mediana >= 50) {
        clasificacion = "en progreso";
    } else {
        clasificacion = "irregular";
    }

    return {
        promedio: promedio,
        mediana: mediana,
        clasificacion: clasificacion,
        explicacion: `Se analizaron ${total} partidas. Promedio: ${promedio}, Mediana: ${mediana}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarPuntajesTorneo([45, 80, 70, 90, 85]);
console.log(caso1);

console.log("\n=== Caso Borde (Lista vacía o inválida) ===");
const caso2 = analizarPuntajesTorneo([]);
console.log(caso2);