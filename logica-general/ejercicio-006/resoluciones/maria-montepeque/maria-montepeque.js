//Reto 006: Búsqueda de Elementos - Autos Hiperdeportivos


function buscarHiperdeportivo(consultaGaraje) {
    // 1. Caso Borde Estructural
    if (!consultaGaraje || !Array.isArray(consultaGaraje.hiperdeportivos) || consultaGaraje.hiperdeportivos.length === 0 || !consultaGaraje.criterio) {
        return { autoEncontrado: null, resultado: "busqueda abortada", motivo: "El catálogo de hiperdeportivos o los criterios de búsqueda no fueron proporcionados." };
    }

    const { hiperdeportivos, criterio: { buscarPor, valor } } = consultaGaraje;

    // 2. Guardrail de Criterios
    const camposPermitidos = ['id', 'modelo', 'marca'];
    if (!camposPermitidos.includes(buscarPor) || valor === undefined || valor === null || String(valor).trim() === "") {
        return { autoEncontrado: null, resultado: "criterio invalido", motivo: "El campo o el valor de búsqueda especificado no es válido para el sistema del garaje." };
    }

    // 3. Optimización O(1) de la Consulta: Normalizamos el valor buscado UNA sola vez antes de entrar al bucle
    const esStringBuscar = typeof valor === 'string';
    const valorBuscadoFormateado = esStringBuscar ? valor.toLowerCase().trim() : valor;

    // 4. Búsqueda Declarativa Nativa
    const auto = hiperdeportivos.find(h => {
        const actual = h[buscarPor];
        return esStringBuscar && typeof actual === 'string' 
            ? actual.toLowerCase().trim() === valorBuscadoFormateado
            : actual === valorBuscado;
    });

    // 5. Retorno Dinámico y Estructuración de inmutabilidad
    if (!auto) {
        return {
            autoEncontrado: null,
            resultado: "no encontrado",
            motivo: `No se localizó ningún hiperdeportivo en el garaje cuyo campo '${buscarPor}' coincida con '${valor}'.`
        };
    }

    return {
        autoEncontrado: { ...auto },
        resultado: "busqueda exitosa",
        motivo: `Se ha localizado con éxito el hiperdeportivo modelo ${auto.modelo} de la marca ${auto.marca}.`
    };
}

console.log("--- EJECUTANDO PRUEBAS - EJERCICIO 006 ---");

const garajeCampus = [
    { id: "HPD-01", marca: "Bugatti", modelo: "Chiron Super Sport", vMaxKmH: 490 },
    { id: "HPD-02", marca: "Koenigsegg", modelo: "Jesko Absolut", vMaxKmH: 531 },
    { id: "HPD-03", marca: "Hennessey", modelo: "Venom F5", vMaxKmH: 500 }
];

const pruebas = [
    { tipo: "Caso Normal - Búsqueda Existente", criterio: { buscarPor: "marca", valor: "koenigsegg" } },
    { tipo: "Caso de Negocio - Elemento Ausente", criterio: { buscarPor: "modelo", valor: "Aventador SVJ" } },
    { tipo: "Caso Borde - Valor de Búsqueda Vacío", criterio: { buscarPor: "id", valor: "" } }
];

pruebas.forEach(({ tipo, criterio }) => {
    console.log(`\n[${tipo}]`);
    console.log(JSON.stringify(buscarHiperdeportivo({ hiperdeportivos: garajeCampus, criterio }), null, 2));
});