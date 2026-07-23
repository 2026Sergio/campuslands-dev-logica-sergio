# Plantilla de solucion - Velocidad, Tiempo y Distancia (Dibujo Digital)

## Analisis

- Entrada:
  - `velocidadPxSeg`: Velocidad a la que se mueve el pincel en píxeles por segundo.
  - `tiempoSeg`: Tiempo en segundos que dura el trazo sobre la tableta digital.
- Proceso:
  - Validar que los datos sean números mayores a cero.
  - Multiplicar la velocidad por el tiempo para calcular la distancia total del trazo.
  - Clasificar el tipo de trazo según la distancia obtenida (corto, mediano o largo).
- Salida:
  - Distancia total en píxeles, clasificación del trazo y mensaje explicativo.

## Reglas identificadas

1. **Fórmula física básica:** Distancia = Velocidad × Tiempo ($d = v \times t$).
2. **Validación:** Si la velocidad o el tiempo son iguales o menores a 0, se muestra un mensaje de error.
3. **Clasificación del trazo:**
   - Si la distancia es menor o igual a 100px: "Trazo Corto (Punto o Detalle)".
   - Si la distancia está entre 101px y 500px: "Trazo Mediano (Línea o Contorno)".
   - Si la distancia es mayor a 500px: "Trazo Largo (Fondo o Trazo Rápido)".

## Pruebas

### Caso normal

Entrada:
- Velocidad: `50 px/s`
- Tiempo: `6 s`

Resultado esperado:
- Distancia: `300 px`
- Clasificación: `Trazo Mediano (Línea o Contorno)`

### Caso borde

Entrada:
- Velocidad: `10 px/s`
- Tiempo: `2 s`

Resultado esperado:
- Distancia: `20 px`
- Clasificación: `Trazo Corto (Punto o Detalle)`

## Explicacion final

La solución funciona porque utiliza la regla matemática de multiplicar la velocidad del movimiento por el tiempo transcurrido para saber qué tan largo fue el dibujo en la pantalla. Además, revisa que los datos ingresados sean correctos antes de hacer el cálculo y categoriza el resultado para que sea fácil de entender.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.