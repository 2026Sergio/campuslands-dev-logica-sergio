# Plantilla de solucion - Redondeo y precision (Viajes y Turismo)

## Analisis del problema

En las agencias de viajes y cotizaciones de turismo, los presupuestos suelen involucrar impuestos, propinas y divisiones de gastos entre varios viajeros. Esto genera montos con múltiples decimales que deben ser redondeados con precisión a dos dígitos decimales (formato de moneda) para evitar pérdidas o inconsistencias financieras en el cobro final.

## Reglas aplicadas

1. **Validación de Entradas (Caso Borde):**
   - Si el costo total del paquete o la cantidad de viajeros son valores menores o iguales a cero, la función retorna la clasificación `"invalido"`.
   - Si se incluye un porcentaje de impuestos o propina negativo, también se considera inválido.
2. **Cálculo de Presupuesto con Precisión:**
   - **Monto de impuestos/tarifas:** $\text{Costo Base} \times \left(\frac{\text{Impuesto \%}}{100}\right)$
   - **Costo Total Agrupado:** $\text{Costo Base} + \text{Monto Impuesto}$
   - **Cuota por persona:** $\frac{\text{Costo Total}}{\text{Viajeros}}$
   - **Redondeo:** Todos los cálculos monetarios finales se ajustan a exactamente 2 decimales usando `toFixed(2)`.
3. **Clasificación del Paquete:**
   - **Lujo:** Cuota por persona $\ge \$500.00$.
   - **Estándar:** Cuota por persona entre $\$150.00$ y $\$499.99$.
   - **Económico:** Cuota por persona menor a $\$150.00$.

## Solucion implementada

```javascript
/**
 * Ejercicio 030 - Logica Matematica: Redondeo y Precision (Viajes y Turismo)
 */

function cotizarViaje(datos) {
    // 1. Validar entradas
    if (!datos || 
        typeof datos.costoBase !== 'number' || datos.costoBase <= 0 ||
        typeof datos.viajeros !== 'number' || datos.viajeros <= 0) {
        return {
            costo_total: 0,
            cuota_por_persona: 0,
            clasificacion: "invalido",
            explicacion: "El costo base y el numero de viajeros deben ser valores positivos mayores a cero."
        };
    }

    const { costoBase, viajeros, impuestoPorcentaje = 0 } = datos;

    if (typeof impuestoPorcentaje !== 'number' || impuestoPorcentaje < 0) {
        return {
            costo_total: 0,
            cuota_por_persona: 0,
            clasificacion: "invalido",
            explicacion: "El porcentaje de impuestos no puede ser negativo."
        };
    }

    // 2. Calcular montos con precision de 2 decimales
    const montoImpuesto = costoBase * (impuestoPorcentaje / 100);
    const costoTotalBruto = costoBase + montoImpuesto;
    const cuotaBruta = costoTotalBruto / viajeros;

    // Aplicar redondeo numerico a 2 decimales
    const costoTotal = Number(costoTotalBruto.toFixed(2));
    const cuotaPorPersona = Number(cuotaBruta.toFixed(2));

    // 3. Clasificar segun la cuota individual
    let clasificacion = "";
    if (cuotaPorPersona >= 500) {
        clasificacion = "lujo";
    } else if (cuotaPorPersona >= 150) {
        clasificacion = "estandar";
    } else {
        clasificacion = "economico";
    }

    return {
        costo_total: costoTotal,
        cuota_por_persona: cuotaPorPersona,
        clasificacion: clasificacion,
        explicacion: `Costo total con impuesto: $${costoTotal}. Cada uno de los ${viajeros} viajeros paga$${cuotaPorPersona}.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal ===");
const caso1 = cotizarViaje({
    costoBase: 1250.75,
    viajeros: 3,
    impuestoPorcentaje: 12
});
console.log(caso1);

console.log("\n=== Caso Borde (Datos invalidos) ===");
const caso2 = cotizarViaje({
    costoBase: -500,
    viajeros: 2
});
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `{ costoBase: 1250.75, viajeros: 3, impuestoPorcentaje: 12 }`
- **Proceso:**
  - Impuesto = $1250.75 \times 0.12 = 150.09$.
  - Costo Total Bruto = $1250.75 + 150.09 = 1400.84$.
  - Cuota por persona bruta = $1400.84 / 3 = 466.94666...$
  - Aplicando `toFixed(2)` $\rightarrow$ Cuota = $\$466.95$.
  - Como $\$466.95$ está entre $\$150.00$ y $\$499.99 \rightarrow$ **estandar**.
- **Resultado obtenido:**
  ```json
  {
    "costo_total": 1400.84,
    "cuota_por_persona": 466.95,
    "clasificacion": "estandar",
    "explicacion": "Costo total con impuesto: $1400.84. Cada uno de los 3 viajeros paga $466.95."
  }
  ```

### Caso borde
- **Entrada:** `{ costoBase: -500, viajeros: 2 }`
- **Resultado obtenido:**
  ```json
  {
    "costo_total": 0,
    "cuota_por_persona": 0,
    "clasificacion": "invalido",
    "explicacion": "El costo base y el numero de viajeros deben ser valores positivos mayores a cero."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-030/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Creamos un programa que calcula la cotización de un paquete de viaje dividiendo el costo total con impuestos entre los viajeros. Redondea los resultados exactamente a dos decimales para que las cuentas queden claras y determina la categoría del viaje.