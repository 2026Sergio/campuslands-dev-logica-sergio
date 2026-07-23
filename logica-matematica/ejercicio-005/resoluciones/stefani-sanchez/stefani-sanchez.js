// Logica matematica 005 - Minimos y limites
// Taller mecanico

// Entradas
const reparaciones = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

// Validación
if (reparaciones.length === 0) {
    console.log("Error: no hay datos para analizar.");
} else {

    // Buscar el valor mínimo
    let minimo = reparaciones[0];

    for (let i = 1; i < reparaciones.length; i++) {
        if (reparaciones[i] < minimo) {
            minimo = reparaciones[i];
        }
    }

    // Calcular puntaje
    const puntajeFinal = minimo + bono - penalizacion;

    // Clasificación
    let clasificacion;

    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "intermedio";
    } else {
        clasificacion = "basico";
    }

    console.log("=== Caso normal ===");
    console.log("Valor mínimo:", minimo);
    console.log("Puntaje final:", puntajeFinal);
    console.log("Clasificación:", clasificacion);
    console.log("Explicación: se tomó el valor mínimo, se sumó el bono y se restó la penalización.");

    // Caso borde
    const listaVacia = [];

    console.log("\n=== Caso borde ===");

    if (listaVacia.length === 0) {
        console.log("Error: la lista está vacía.");
    }
}