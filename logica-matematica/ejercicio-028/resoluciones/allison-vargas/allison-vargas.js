function analizarPuntuacionPelicula(evaluaciones) {
    // 1. Validar si la entrada es un arreglo
    if (!Array.isArray(evaluaciones) || evaluaciones.length === 0) {
        return {
            promedio: 0,
            nota_maxima: 0,
            nota_minima: 0,
            clasificacion: "inválido",
            explicacion: "La lista de evaluaciones debe ser un arreglo no vacío."
        };
    }

    // 2. Filtrar puntuaciones válidas (entre 1 y 10)
    const validas = [];
    for (let i = 0; i < evaluaciones.length; i++) {
        const nota = evaluaciones[i];
        if (typeof nota === 'number' && !isNaN(nota) && nota >= 1 && nota <= 10) {
            validas.push(nota);
        }
    }

    if (validas.length === 0) {
        return {
            promedio: 0,
            nota_maxima: 0,
            nota_minima: 0,
            clasificacion: "inválido",
            explicacion: "No se encontraron calificaciones válidas dentro del rango de 1 a 10."
        };
    }

    // 3. Procesar datos (suma, máximo y mínimo)
    let suma = 0;
    let max = validas[0];
    let min = validas[0];

    for (let i = 0; i < validas.length; i++) {
        const nota = validas[i];
        suma += nota;
        if (nota > max) max = nota;
        if (nota < min) min = nota;
    }

    const promedio = Number((suma / validas.length).toFixed(2));
    const diferencia = max - min;

    // 4. Determinar clasificación
    let clasificacion = "";
    if (diferencia > 4) {
        clasificacion = "controvertida";
    } else if (promedio >= 8.5) {
        clasificacion = "obra maestra";
    } else if (promedio >= 7.0) {
        clasificacion = "de culto";
    } else {
        clasificacion = "en desarrollo";
    }

    return {
        promedio: promedio,
        nota_maxima: max,
        nota_minima: min,
        clasificacion: clasificacion,
        explicacion: `Se analizaron ${validas.length} opiniones válidas. Promedio: ${promedio}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = analizarPuntuacionPelicula([9, 8.5, 9.5, 10, 8]);
console.log(caso1);

console.log("\n=== Caso Borde (Puntuaciones fuera de rango) ===");
const caso2 = analizarPuntuacionPelicula([-5, 15, 0]);
console.log(caso2);