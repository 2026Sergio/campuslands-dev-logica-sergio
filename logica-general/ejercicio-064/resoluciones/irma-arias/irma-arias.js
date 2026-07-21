
const inventarioMotos = [
    { id: 1, modelo: "Yamaha MT-03", cilindrajeCC: 321, precioUSD: 4500, disponibleVenta: true },
    { id: 2, modelo: "Honda CB 190R", cilindrajeCC: 184, precioUSD: 3100, disponibleVenta: true },
    { id: 3, modelo: "Suzuki Gixxer 250", cilindrajeCC: 250, precioUSD: -3800, disponibleVenta: true }, // Inconsistencia: Precio negativo
    { id: 4, modelo: "", cilindrajeCC: 150, precioUSD: 2500, disponibleVenta: true },                  // Inconsistencia: Nombre de modelo vacío
    { id: 5, modelo: "Kawasaki Ninja 400", cilindrajeCC: 400, precioUSD: 5500, disponibleVenta: false } // Inconsistencia: No disponible
];

// Función para aplicar filtros por condiciones en el inventario de motos
function filtrarInventarioMotos(lista) {
    // Paso 1: Validación general de entrada (Caso borde de la estructura principal)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista del inventario de motos está vacía o no es válida." };
    }

    let motosDisponibles = [];
    let motosConFiltrosRechazados = [];

    // Paso 2: Ciclo para recorrer y evaluar las condiciones de cada motocicleta
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        let motivosFiltro = [];

        // Regla 1: Validar que el modelo de la moto exista y no esté vacío
        if (!item.modelo || typeof item.modelo !== "string" || item.modelo.trim() === "") {
            motivosFiltro.push("El modelo de la moto está vacío, no es texto o no está definido.");
        }

        // Regla 2: Validar que el cilindraje sea un número positivo
        if (typeof item.cilindrajeCC !== "number" || isNaN(item.cilindrajeCC) || item.cilindrajeCC <= 0) {
            motivosFiltro.push("El cilindraje en CC es inválido (debe ser mayor a 0).");
        }

        // Regla 3: Validar que el precio en USD sea un número positivo
        if (typeof item.precioUSD !== "number" || isNaN(item.precioUSD) || item.precioUSD <= 0) {
            motivosFiltro.push("El precio en USD es inválido (debe ser mayor a 0).");
        }

        // Regla 4: Validar que la moto se encuentre disponible para la venta
        if (item.disponibleVenta !== true) {
            motivosFiltro.push("La motocicleta no se encuentra disponible para la venta.");
        }

        // Paso 3: Clasificar el elemento según los filtros aplicados
        if (motivosFiltro.length === 0) {
            motosDisponibles.push({
                modelo: item.modelo.trim(),
                cilindrajeCC: item.cilindrajeCC,
                precioUSD: item.precioUSD,
                estadoFiltro: "Aprobado para exhibición y venta"
            });
        } else {
            motosConFiltrosRechazados.push({
                modeloRegistrado: item.modelo || "Desconocido",
                estadoFiltro: "Rechazado por condiciones de inventario",
                motivos: motivosFiltro
            });
        }
    }

    // Paso 4: Retornar resultado estructurado con el resumen del filtro
    return {
        estadoSistema: "Proceso de Filtros por Condiciones Completado",
        totalItemsEvaluados: lista.length,
        totalMotosAprobadas: motosDisponibles.length,
        motosAprobadas: motosDisponibles,
        motosRechazadas: motosConFiltrosRechazados
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Evaluar el inventario de motos con casos mixtos (válidos e inválidos)
console.log("--- PRUEBA NORMAL (Filtros por Condiciones - Inventario de Motos) ---");
console.log(JSON.stringify(filtrarInventarioMotos(inventarioMotos), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía para comprobar la protección del sistema
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(filtrarInventarioMotos([]));