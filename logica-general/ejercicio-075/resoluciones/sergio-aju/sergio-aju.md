# Plantilla de solucion

## Autor:

Sergio Ajú

## Analisis

- **Entrada:** Un arreglo de cadenas de texto (`items`) relacionadas con un escenario de dibujo digital (ej. `"aprobado"`, `"pendiente"`, `"bloqueado"`), una cadena de `prioridad` y una descripción de la `regla`.
- **Proceso:** 
  1. Validar que la lista de elementos no se encuentre vacía.
  2. Normalizar los datos a minúsculas para un análisis homogéneo.
  3. Evaluar de forma condicional las reglas para priorizar la revisión de elementos bloqueados o pendientes.
- **Salida:** Un objeto con la `accion` y el `motivo` correspondiente.

## Reglas identificadas

1. **Prioridad de riesgos:** Los elementos con estado `"bloqueado"` se evalúan de inmediato si la regla lo exige.
2. **Evaluación secuencial:** Se revisan elementos pendientes o aprobados en orden de importancia si no hay bloqueos operativos.
3. **Manejo de vacíos:** Controlar escenarios con listas sin elementos para evitar fallos.

## Pruebas

### Caso normal

**Entrada:**
```text
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta
regla: revisar bloqueados primero