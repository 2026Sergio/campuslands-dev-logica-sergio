
// 1. Definición de la entrada (Lista de vehículos en espera)
const vehiculosTaller = [
    { id: 1, placa: "ABC-123", gravedad: 2, tipo: "preventivo", llegada: 1 },
    { id: 2, placa: "XYZ-789", gravedad: 5, tipo: "urgente", llegada: 2 },
    { id: 3, placa: "MNO-456", gravedad: 5, tipo: "preventivo", llegada: 3 },
    { id: 4, placa: "JKL-012", gravedad: 1, tipo: "revision", llegada: 4 }
];

// 2. Función para ordenar según las reglas de prioridad del taller
function ordenarPrioridadesTaller(vehiculos) {
    // Validar datos vacíos o formato incorrecto
    if (!Array.isArray(vehiculos) || vehiculos.length === 0) {
        return "Error: La lista de vehículos está vacía o no es válida.";
    }

    return vehiculos.sort((a, b) => {
        // Regla 1: Mayor gravedad primero (orden descendente)
        if (b.gravedad !== a.gravedad) {
            return b.gravedad - a.gravedad;
        }

        // Regla 2: Si la gravedad es igual, priorizar tipo "urgente" sobre otros
        if (a.tipo === "urgente" && b.tipo !== "urgente") return -1;
        if (b.tipo === "urgente" && a.tipo !== "urgente") return 1;

        // Regla 3: Si hay empate en gravedad y tipo, el que llegó primero (menor número de llegada)
        return a.llegada - b.llegada;
    });
}

// 3. Ejecución y Pruebas
console.log("=== ORDEN DE ATENCIÓN EN EL TALLER MECÁNICO ===");
const resultadoOrdenado = ordenarPrioridadesTaller(vehiculosTaller);
console.table(resultadoOrdenado);

// --- CASO BORDE (Validación de lista vacía o datos límite) ---
console.log("=== PRUEBA DE CASO BORDE ===");
console.log(ordenarPrioridadesTaller([]));