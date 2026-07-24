# Plantilla de solucion

## Analisis

- Entrada: 
  - `inventario_reactivos`: Arreglo de objetos con el nombre del reactivo químico, cantidad disponible y estado (ej. "disponible", "bajo_stock", "agotado").
  - `umbral_minimo`: Valor numérico límite para considerar un reactivo en stock bajo.

- Proceso: 
  1. Validar que la lista de reactivos químicos no esté vacía.
  2. Recorrer el inventario usando un ciclo para buscar reactivos cuyo estado sea "agotado" o con cantidad menor al umbral.
  3. Aplicar la regla de prioridad para reportar primero los faltantes críticos.
  4. Determinar la acción requerida y estructurar el resultado.

- Salida: 
  - `accion`: Tarea prioritaria a realizar (ej. "reabastecer reactivo crítico").
  - `reactivo`: Nombre del compuesto químico afectado.
  - `motivo`: Explicación de la regla de inventario aplicada.

## Reglas identificadas

1. **Prioridad de Stock Crítico**: Los reactivos químicos "agotados" se reportan antes que los de bajo stock.
2. **Evaluación de Umbrales**: Si no hay agotados, se revisan aquellos por debajo del umbral mínimo.
3. **Validación**: Retorna error si el inventario está vacío.

## Pruebas

### Caso normal

Entrada:
```javascript
{
  inventario_reactivos: [
    { compuesto: "NaCl", cantidad: 50, estado: "disponible" },
    { compuesto: "H2SO4", cantidad: 0, estado: "agotado" }
  ],
  umbral_minimo: 10
}