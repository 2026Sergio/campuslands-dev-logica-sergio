# Logica matematica 044 - rangos y maximos

## Analisis

- Entrada: Un arreglo de números (participantes) y un número límite.
- Proceso: Encontrar el número más grande del arreglo y verificar si está dentro del rango permitido.
- Salida: El número máximo y si está dentro del rango.

## Reglas identificadas

1. Recorrer el arreglo y encontrar el número más grande.
2. Verificar si el máximo es mayor o igual al límite.
3. Si es mayor o igual, está "dentro del rango", si no "fuera del rango".

## Pruebas

### Caso normal

Entrada: participantes: [12, 18, 25, 30], limite: 20

Resultado esperado: maximo: 30, estado: dentro del rango

### Caso borde

Entrada: participantes: [], limite: 10

Resultado esperado: maximo: 0, estado: fuera del rango

## Explicacion final

La función recorre el arreglo para encontrar el número más grande, luego compara con el límite. Si no hay datos, devuelve 0.