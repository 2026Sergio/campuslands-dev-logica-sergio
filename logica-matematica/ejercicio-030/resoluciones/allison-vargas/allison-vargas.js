function cotizarViaje(datos) {
    // 1. Validar entradas
    if (!datos || 
        typeof datos.costoBase !== 'number' || datos.costoBase <= 0 ||
        typeof datos.viajeros !== 'number' || datos.viajeros <= 0) {
        return {
            costo_total: 0,
            cuota_por_persona: 0,
            clasificacion: "inválido",
            explicacion: "El costo base y el número de viajeros deben ser valores positivos mayores a cero."
        };
    }

    const { costoBase, viajeros, impuestoPorcentaje = 0 } = datos;

    if (typeof impuestoPorcentaje !== 'number' || impuestoPorcentaje < 0) {
        return {
            costo_total: 0,
            cuota_por_persona: 0,
            clasificacion: "inválido",
            explicacion: "El porcentaje de impuestos no puede ser negativo."
        };
    }

    // 2. Calcular montos con precisión de 2 decimales
    const montoImpuesto = costoBase * (impuestoPorcentaje / 100);
    const costoTotalBruto = costoBase + montoImpuesto;
    const cuotaBruta = costoTotalBruto / viajeros;

    // Aplicar redondeo numérico a 2 decimales
    const costoTotal = Number(costoTotalBruto.toFixed(2));
    const cuotaPorPersona = Number(cuotaBruta.toFixed(2));

    // 3. Clasificar según la cuota individual
    let clasificacion = "";
    if (cuotaPorPersona >= 500) {
        clasificacion = "lujo";
    } else if (cuotaPorPersona >= 150) {
        clasificacion = "estándar";
    } else {
        clasificacion = "económico";
    }

    return {
        costo_total: costoTotal,
        cuota_por_persona: cuotaPorPersona,
        clasificacion: clasificacion,
        explicacion: `Costo total con impuesto: $${costoTotal}. Cada uno de los ${viajeros} viajeros paga $${cuotaPorPersona}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = cotizarViaje({
    costoBase: 1250.75,
    viajeros: 3,
    impuestoPorcentaje: 12
});
console.log(caso1);

console.log("\n=== Caso Borde (Datos inválidos) ===");
const caso2 = cotizarViaje({
    costoBase: -500,
    viajeros: 2
});
console.log(caso2);