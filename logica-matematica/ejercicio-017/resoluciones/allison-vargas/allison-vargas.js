function analizarRankingArquitectura(puntuaciones) {
    // 1. Validar caso borde: arreglo vacío, no válido o con datos no numéricos
    if (!Array.isArray(puntuaciones) || puntuaciones.length === 0 || 
        !puntuaciones.every(p => typeof p === 'number' && !isNaN(p) && p >= 0)) {
        return {
            promedio: 0,
            puntaje_maximo: 0,
            puntaje_minimo: 0,
            clasificacion: "inválido",
            explicacion: "El listado de puntuaciones debe ser un arreglo no vacío con números válidos."
        };
    }

    // 2. Calcular acumulador, máximo y mínimo
    let suma = 0;
    let maximo = puntuaciones[0];
    let minimo = puntuaciones[0];

    for (let i = 0; i < puntuaciones.length; i++) {
        const nota = puntuaciones[i];
        suma += nota;

        if (nota > maximo) maximo = nota;
        if (nota < minimo) minimo = nota;
    }

    const promedio = Number((suma / puntuaciones.length).toFixed(2));

    // 3. Determinar nivel de rendimiento general
    let clasificacion = "";
    if (promedio >= 85) {
        clasificacion = "alto_rendimiento";
    } else if (promedio >= 60) {
        clasificacion = "rendimiento_medio";
    } else {
        clasificacion = "bajo_rendimiento";
    }

    return {
        promedio: promedio,
        puntaje_maximo: maximo,
        puntaje_minimo: minimo,
        clasificacion: clasificacion,
        explicacion: `Se evaluaron ${puntuaciones.length} proyectos. Promedio: ${promedio}, nota máxima: ${maximo}, nota mínima: ${minimo}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Alto Rendimiento) ===");
const caso1 = analizarRankingArquitectura([88, 92, 79, 95, 90]);
console.log(caso1);

console.log("\n=== Caso Borde (Arreglo Vacío) ===");
const caso2 = analizarRankingArquitectura([]);
console.log(caso2);