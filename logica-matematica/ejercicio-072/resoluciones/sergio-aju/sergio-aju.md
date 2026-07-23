# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de cadenas de texto (`items`) relacionadas con opciones de pingpong (ej. `"aprobado"`, `"pendiente"`, `"bloqueado"`), una cadena de `prioridad` y una descripción de la `regla`.
- **Proceso:** 
  1. Validar que la lista no esté vacía.
  2. Normalizar los datos a minúsculas.
  3. Evaluar de forma condicional las reglas para priorizar elementos bloqueados o pendientes.
- **Salida:** Un objeto con la `accion` y el `motivo` resultante.

## Reglas identificadas

1. **Prioridad de riesgos:** Los elementos `"bloqueado"` se evalúan primero si la regla lo indica.
2. **Evaluación secuencial:** Se revisan elementos pendientes o aprobados de forma ordenada si no hay bloqueos.
3. **Manejo de vacíos:** Controlar listas sin elementos para evitar errores.

## Pruebas

### Caso normal

**Entrada:**
```text
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta
regla: revisar bloqueados primero