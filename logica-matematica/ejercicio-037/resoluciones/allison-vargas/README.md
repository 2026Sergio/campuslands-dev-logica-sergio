# Plantilla de solucion - Estadísticas de Ranking (Arquitectura 3D)

## Analisis

- Entrada:
  - `puntajes`: Lista o arreglo de números que representan las calificaciones de los renders 3D.
- Proceso:
  - Validar que la lista contenga datos válidos y no esté vacía.
  - Recorrer el arreglo para obtener la suma total, el puntaje más alto y el puntaje más bajo.
  - Calcular el promedio general dividiendo la suma entre el número de proyectos.
  - Determinar la categoría del grupo según el promedio obtenido.
- Salida:
  - Cantidad de proyectos, nota máxima, nota mínima, promedio, clasificación y resumen explicativo.

## Reglas identificadas

1. **Validación:** Si el arreglo está vacío o contiene valores no numéricos o negativos, se devuelve un mensaje de error.
2. **Cálculo estadístico:**
   - Promedio = Suma de puntajes / Cantidad de proyectos.
   - Máximo y Mínimo evaluados elemento por elemento.
3. **Clasificación por promedio:**
   - Promedio mayor o igual a 85: "Excelente (Calidad Render Profesional)".
   - Promedio entre 70 y 84.99: "Bueno (Nivel Arquitectónico Estándar)".
   - Promedio menor a 70: "Bajo (Requiere Ajustes de Iluminación y Textura)".

## Pruebas

### Caso normal

Entrada:
- Puntajes: `[88, 92, 75, 90, 80]`

Resultado esperado:
- Total de proyectos: `5`
- Puntaje máximo: `92`
- Puntaje mínimo: `75`
- Promedio: `85`
- Clasificación: `Excelente (Calidad Render Profesional)`

### Caso borde

Entrada:
- Puntajes: `[95]`

Resultado esperado:
- Total de proyectos: `1`
- Puntaje máximo: `95`
- Puntaje mínimo: `95`
- Promedio: `95`
- Clasificación: `Excelente (Calidad Render Profesional)`

## Explicacion final

La solución funciona porque procesa una lista de calificaciones para obtener las métricas principales de un grupo de entregas de arquitectura 3D. Mediante un ciclo recorre todos los valores para encontrar los extremos y calcular el promedio, ofreciendo un resumen claro sobre la calidad general de los renders evaluados.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.