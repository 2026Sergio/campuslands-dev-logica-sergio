# Plantilla de solucion

## Analisis

- Entrada:
  - Velocidad de desplazamiento.
  - Tiempo empleado en el recorrido.

- Proceso:
  - Validar que la velocidad y el tiempo sean mayores que cero.
  - Aplicar la fórmula:
    - distancia = velocidad × tiempo.
  - Mostrar el resultado obtenido.

- Salida:
  - Distancia recorrida.

## Reglas identificadas

1. La velocidad debe ser mayor que cero.
2. El tiempo debe ser mayor que cero.
3. La distancia se obtiene multiplicando la velocidad por el tiempo.

## Pruebas

### Caso normal

Entrada:

Velocidad: 60 km/h

Tiempo: 3 horas

Resultado esperado:

Distancia: 180 km

### Caso borde

Entrada:

Velocidad: 0 km/h

Tiempo: 5 horas

Resultado esperado:

La velocidad y el tiempo deben ser mayores que cero.

## Explicacion final

La solución funciona porque primero valida que los datos ingresados sean válidos. Si la velocidad y el tiempo son mayores que cero, aplica la fórmula de movimiento uniforme para calcular la distancia recorrida. Si alguno de los valores es inválido, informa al usuario mediante un mensaje de error.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.