# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con los puntajes obtenidos por los participantes.

- Proceso:
  - Validar que el arreglo no esté vacío.
  - Encontrar el puntaje más alto.
  - Recorrer nuevamente el arreglo.
  - Calcular el puntaje normalizado utilizando la fórmula:
    - puntaje normalizado = (puntaje / puntaje máximo) × 100
  - Redondear cada resultado a dos decimales.

- Salida:
  - Lista de puntajes normalizados en una escala de 0 a 100.

## Reglas identificadas

1. Debe existir al menos un puntaje para realizar la normalización.
2. El puntaje más alto será la referencia para calcular los demás.
3. Todos los puntajes normalizados deben mostrarse con dos decimales.

## Pruebas

### Caso normal

Entrada:

Puntajes:

- 70
- 85
- 100
- 90

Resultado esperado:

Puntajes normalizados:

- 70.00
- 85.00
- 100.00
- 90.00

### Caso borde

Entrada:

Puntajes:

[]

Resultado esperado:

No hay puntajes para normalizar.

## Explicacion final

La solución funciona porque primero identifica el puntaje máximo, que sirve como referencia para la normalización. Luego recorre cada puntaje, calcula su equivalente porcentual respecto al mayor valor y presenta los resultados con dos decimales, permitiendo comparar todos los puntajes en una misma escala.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.