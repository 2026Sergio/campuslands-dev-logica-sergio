function calcularRendimientoTrazo(calcular, valor1, valor2) {
    // 1. Validar caso borde: valores no numéricos o menores/iguales a cero
    if (typeof valor1 !== 'number' || valor1 <= 0 || typeof valor2 !== 'number' || valor2 <= 0) {
        return {
            distancia_px: 0,
            velocidad_px_s: 0,
            tiempo_s: 0,
            clasificacion: "inválido",
            explicacion: "Los valores ingresados deben ser números mayores a cero."
        };
    }

    let distancia = 0;
    let velocidad = 0;
    let tiempo = 0;

    // 2. Aplicar fórmulas según la variable solicitada
    switch (calcular) {
        case 'distancia':
            velocidad = valor1; // px/s
            tiempo = valor2;    // s
            distancia = velocidad * tiempo;
            break;
        case 'velocidad':
            distancia = valor1; // px
            tiempo = valor2;    // s
            velocidad = distancia / tiempo;
            break;
        case 'tiempo':
            distancia = valor1; // px
            velocidad = valor2; // px/s
            tiempo = distancia / velocidad;
            break;
        default:
            return {
                distancia_px: 0,
                velocidad_px_s: 0,
                tiempo_s: 0,
                clasificacion: "inválido",
                explicacion: "Tipo de cálculo no válido. Use 'distancia', 'velocidad' o 'tiempo'."
            };
    }

    distancia = Number(distancia.toFixed(2));
    velocidad = Number(velocidad.toFixed(2));
    tiempo = Number(tiempo.toFixed(2));

    // 3. Determinar la clasificación del trazo según la velocidad
    let clasificacion = "";
    if (velocidad > 500) {
        clasificacion = "rápido";
    } else if (velocidad >= 200) {
        clasificacion = "moderado";
    } else {
        clasificacion = "lento_detallado";
    }

    return {
        distancia_px: distancia,
        velocidad_px_s: velocidad,
        tiempo_s: tiempo,
        clasificacion: clasificacion,
        explicacion: `Trazo de ${distancia} px realizado a ${velocidad} px/s durante ${tiempo} segundos.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal (Calcular Distancia) ===");
const caso1 = calcularRendimientoTrazo('distancia', 350, 4);
console.log(caso1);

console.log("\n=== Caso Borde (Valores Inválidos) ===");
const caso2 = calcularRendimientoTrazo('velocidad', -100, 5);
console.log(caso2);