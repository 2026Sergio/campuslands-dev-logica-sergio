// Logica matematica 004 - rangos y maximos
// Inventario de motos

// Entradas
const motos = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

// Validación
if (motos.length === 0) {
    console.log("Error: no hay datos para analizar.");
} else {

    // Buscar el valor máximo
    let maximo = motos[0];

    for (let i = 1; i < motos.length; i++) {
        if (motos[i] > maximo) {
            maximo = motos[i];
        }
    }

    // Calcular puntaje final
    const puntajeFinal = maximo + bono - penalizacion;

    // Clasificación según el puntaje
    let clasificacion;

    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "intermedio";
    } else {
        clasificacion = "basico";
    }

    console.log("=== Caso de prueba 1 ===");
    console.log("Mayor valor:", maximo);
    console.log("Puntaje final:", puntajeFinal);
    console.log("Clasificación:", clasificacion);
    console.log("Explicación: se tomó el valor máximo, se sumó el bono y se restó la penalización.");

    // Caso borde
    const motosBorde = [];

    console.log("\n=== Caso de prueba 2 (caso borde) ===");

    if (motosBorde.length === 0) {
        console.log("Error: la lista está vacía.");
    }
}