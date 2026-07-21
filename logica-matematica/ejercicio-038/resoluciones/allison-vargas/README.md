# Plantilla de solucion - Normalización de Puntajes (Soldadura)

## Analisis

- Entrada:
  - `puntajes`: Lista con las calificaciones obtenidas en las inspecciones de soldadura.
  - `puntajeMaximoPosible`: Valor límite superior de la escala original utilizada.
- Proceso:
  - Validar que los datos ingresados sean válidos y estén dentro del rango permitido.
  - Convertir cada puntaje a una escala uniforme de 0 a 100 dividiendo la nota entre el máximo y multiplicando por 100.
  - Calcular el promedio general de las notas ya normalizadas.
  - Categorizar la resistencia o calidad del trabajo de soldadura evaluado.
- Salida:
  - Lista de puntajes normalizados, promedio general en escala de 100, categoría y mensaje explicativo.

## Reglas identificadas

1. **Fórmula de normalización:**
   $$\text{Puntaje Normalizado} = \left( \frac{\text{Puntaje Obtenido}}{\text{Puntaje Máximo}} \right) \times 100$$
2. **Validación:** No se permiten arreglos vacíos ni notas que superen el puntaje máximo o sean menores a cero.
3. **Clasificación del resultado:**
   - Promedio mayor o igual a 85: "Soldadura de Alta Calidad (Resistencia Estructural)".
   - Promedio entre 70 y 84.99: "Soldadura Aceptable (Uso Estándar)".
   - Promedio menor a 70: "Soldadura Deficiente (Requiere Inspección y Pulido)".

## Pruebas

### Caso normal

Entrada:
- Puntajes obtenidos: `[40, 45, 30, 50]`
- Puntaje máximo de escala: `50`

Resultado esperado:
- Puntajes normalizados: `[80, 90, 60, 100]`
- Promedio normalizado: `82.5`
- Clasificación: `Soldadura Aceptable (Uso Estándar)`

### Caso borde

Entrada:
- Puntajes obtenidos: `[100]`
- Puntaje máximo de escala: `100`

Resultado esperado:
- Puntajes normalizados: `[100]`
- Promedio normalizado: `100`
- Clasificación: `Soldadura de Alta Calidad (Resistencia Estructural)`

## Explicacion final

La solución funciona porque transforma diferentes escalas de calificación de pruebas de soldadura a un estándar único de 0 a 100. Esto permite comparar los resultados de manera transparente e imparcial, asegurando que todos los trabajos se evalúen bajo las mismas reglas antes de dar un veredicto de calidad.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.