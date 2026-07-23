# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de cadenas de texto (`items`) que representan los estados de elementos en una sesión de kickboxing (ej. `"aprobado"`, `"pendiente"`, `"bloqueado"`), una cadena de `prioridad` (ej. `"alta"`) y una descripción de la `regla` a aplicar.
- **Proceso:** 
  1. Validar que la entrada sea un arreglo y que no se encuentre vacío para prevenir errores en tiempo de ejecución.
  2. Normalizar los datos a minúsculas para asegurar que la evaluación de texto sea robusta.
  3. Evaluar de forma condicional y secuencial las reglas de negocio, dando máxima prioridad a los elementos `"bloqueado"`, seguidos de `"pendiente"` y finalmente `"aprobado"`.
  4. Generar y retornar un objeto con la acción a tomar y una justificación clara basada en el motivo.
- **Salida:** Un objeto estructurado que contiene las propiedades `accion` y `motivo`, reflejando el resultado verificable de la lógica aplicada.

## Reglas identificadas

1. **Prioridad de riesgos:** Los elementos con estado `"bloqueado"` deben ser detectados y atendidos de inmediato frente a cualquier otro estado debido al factor de riesgo en el kickboxing.
2. **Evaluación secuencial:** Si el riesgo principal no está presente, el flujo desciende de manera ordenada hacia los estados `"pendiente"` y `"aprobado"`.
3. **Manejo de casos vacíos:** El sistema debe contemplar y gestionar de forma segura listas vacías o entradas inválidas mediante validaciones previas.

## Pruebas

### Caso normal

**Entrada:**
```text
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta
regla: revisar bloqueados primero