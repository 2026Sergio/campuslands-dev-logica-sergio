# Logica matematica 046 - conversion de unidades

## Analisis

- Entrada: Una velocidad en km/h.
- Proceso: Convertir km/h a m/s.
- Salida: La velocidad en m/s.

## Reglas identificadas

1. Multiplicar los km/h por 1000 para obtener metros por hora.
2. Dividir el resultado entre 3600 para obtener metros por segundo.

## Pruebas

### Caso normal

Entrada: velocidad: 120 km/h

Resultado esperado: 33.33 m/s

### Caso borde

Entrada: velocidad: 0 km/h

Resultado esperado: 0 m/s

## Explicacion final

La función convierte km/h a m/s multiplicando por 1000 y dividiendo entre 3600.