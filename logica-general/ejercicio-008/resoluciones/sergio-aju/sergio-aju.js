const catalogoPeliculas = [
    { titulo: "Wall-E", tipo: "animado", edadMinima: 0 },
    { titulo: "Blade Runner 2049", tipo: "cyberpunk", edadMinima: 16 },
    { titulo: "Inception", tipo: "filosofico", edadMinima: 13 },
    { titulo: "Ghost in the Shell", tipo: "cyberpunk", edadMinima: 16 },
    { titulo: "Interstellar", tipo: "filosofico", edadMinima: 13 }
];

function obtenerRecomendaciones(edad, prefiereEfectos) {
    // 1. Validación de datos de entrada
    if (typeof edad !== 'number' || edad < 0) {
        return { error: "Edad inválida. Debe ser un número positivo." };
    }

    // 2. Definir preferencia de género
    const generoPreferido = prefiereEfectos ? "cyberpunk" : "filosofico";

    // 3. Filtrar el catálogo
    const sugerencias = catalogoPeliculas.filter(pelicula => {
        const esApta = edad >= pelicula.edadMinima;
        const coincideGenero = pelicula.tipo === generoPreferido || pelicula.tipo === "animado";
        return esApta && coincideGenero;
    });

    // 4. Retornar resultado
    return {
        usuario: { edad, prefiereEfectos },
        totalEncontradas: sugerencias.length,
        resultados: sugerencias.map(p => p.titulo)
    };
}

// --- Pruebas de funcionamiento ---
console.log("--- Caso 1: Adulto fan de efectos ---");
console.log(obtenerRecomendaciones(25, true));

console.log("\n--- Caso 2: Menor de edad ---");
console.log(obtenerRecomendaciones(8, true));

console.log("\n--- Caso 3: Error de entrada ---");
console.log(obtenerRecomendaciones("veinte", false));