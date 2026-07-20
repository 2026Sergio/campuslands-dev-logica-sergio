# Plantilla de solucion

## Analisis

- Entrada:
  - Un valor numérico que representa una medición utilizada en una fórmula química.

- Proceso:
  - Validar que el dato ingresado sea un número.
  - Verificar que el valor sea mayor que cero.
  - Si ambas condiciones se cumplen, aceptar el valor como válido.
  - En caso contrario, mostrar el mensaje correspondiente.

- Salida:
  - Un mensaje indicando si el valor es válido o el motivo por el cual no puede utilizarse.

## Reglas identificadas

1. El dato ingresado debe ser un número.
2. El valor debe ser mayor que cero.
3. Si alguna validación falla, se debe informar el error al usuario.

## Pruebas

### Caso normal

Entrada:

Valor: 25

Resultado esperado:

Valor válido para la fórmula química.

### Caso borde

Entrada:

Valor: -8

Resultado esperado:

El valor debe ser mayor que cero.

## Explicacion final

La solución funciona porque primero verifica que el dato ingresado sea realmente un número. Después comprueba que sea un valor positivo, ya que muchas mediciones químicas no pueden ser negativas o iguales a cero. Solo cuando ambas condiciones se cumplen el dato se considera válido.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.