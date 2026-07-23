# Logica matematica 058 - normalizacion de puntajes

## Analisis

- Entrada: Un arreglo de números (puntajes) y un valor máximo posible.
- Proceso: Normalizar cada puntaje dividiéndolo entre el máximo y multiplicando por 100.
- Salida: Los puntajes normalizados.

## Reglas identificadas

1. Dividir cada puntaje entre el máximo.
2. Multiplicar cada resultado por 100.
3. Redondear a 2 decimales.

## Pruebas

### Caso normal

Entrada: puntajes: [12, 18, 25, 30], maximo: 30

Resultado esperado: [40, 60, 83.33, 100]

### Caso borde

Entrada: puntajes: [0, 0, 0], maximo: 10

Resultado esperado: [0, 0, 0]

## Explicacion final

La función recorre los puntajes, los divide por el máximo y multiplica por 100 para obtener el porcentaje.
