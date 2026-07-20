//Reto 004: Filtros por Condiciones - Inventario de Motos

function filtrarInventarioMotos(inventarioEntrada) {
    // 1. Guardrail / Caso Borde Estructural
    if (!inventarioEntrada || !Array.isArray(inventarioEntrada.motos) || inventarioEntrada.motos.length === 0) {
        return { motosFiltradas: [], resultado: "sin resultados", motivo: "El inventario proporcionado se encuentra vacío o es inválido." };
    }

    const { motos, filtros = {} } = inventarioEntrada;
    const ccMaximo = filtros.ccMaximo ?? Infinity;
    const soloDisponibles = filtros.soloDisponibles ?? true;

    // 2. Pipeline Declarativo Lineal O(N): Filtra y mapea limpiamente
    const motosFiltradas = motos
        .filter(m => m.cilindraje <= ccMaximo && (!soloDisponibles || m.stock > 0))
        .map(m => ({
            modelo: m.modelo, cilindraje: m.cilindraje, precio: m.precio,
            categoria: m.precio > 15000 ? "Premium" : m.precio < 4000 ? "Económica" : "Estándar"
        }));

    // 3. Retorno Dinámico Unificado
    const exito = motosFiltradas.length > 0;
    return {
        motosFiltradas,
        resultado: exito ? "filtro exitoso" : "no coinciden criterios",
        motivo: exito 
            ? `Se encontraron ${motosFiltradas.length} motocicletas que cumplen con las condiciones solicitadas.`
            : "Ninguna motocicleta del inventario cumple con los filtros especificados."
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 004 ---");

const pruebas = [
    {
        tipo: "Caso Normal - Filtro y Etiquetado",
        datos: {
            motos: [
                { modelo: "Scooter Urbana 125", cilindraje: 125, precio: 2500, stock: 10 },
                { modelo: "Deportiva Pista 600", cilindraje: 600, precio: 18000, stock: 3 },
                { modelo: "Aventura Trail 250", cilindraje: 250, precio: 5500, stock: 0 },
                { modelo: "Trabajo Clásica 150", cilindraje: 150, precio: 3200, stock: 5 }
            ],
            filtros: { ccMaximo: 400, soloDisponibles: true }
        }
    },
    {
        tipo: "Caso de Negocio - Sin Coincidencias",
        datos: {
            motos: [{ modelo: "Superbike 1000", cilindraje: 1000, precio: 25000, stock: 2 }],
            filtros: { ccMaximo: 250, soloDisponibles: true }
        }
    },
    {
        tipo: "Caso Borde - Inventario Vacío",
        datos: { motos: [], filtros: { ccMaximo: 500 } }
    }
];

pruebas.forEach(({ tipo, datos }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(filtrarInventarioMotos(datos), null, 2));
});