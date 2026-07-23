# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con sustancias químicas almacenadas.
  - Cada elemento contiene fórmula, cantidad disponible y cantidad mínima requerida.

- Proceso:
  - Recorrer el inventario de sustancias.
  - Comparar la cantidad disponible con el límite mínimo.
  - Clasificar cada sustancia según su estado de inventario.

- Salida:
  - Fórmula química.
  - Cantidad disponible.
  - Estado del inventario.

## Reglas identificadas

1. Si la cantidad es igual a cero, la sustancia está agotada.
2. Si la cantidad es menor o igual al mínimo permitido, tiene stock bajo.
3. Si supera el límite mínimo, está disponible.

## Pruebas

### Caso normal

Entrada:

- H2O:
  - Cantidad: 50
  - Mínimo: 10

- NaCl:
  - Cantidad: 5
  - Mínimo: 10

- CO2:
  - Cantidad: 0
  - Mínimo: 5

Resultado esperado:

- H2O: Disponible
- NaCl: Stock bajo
- CO2: Agotado

### Caso borde

Entrada:

- Fórmula:
  - O2
  - Cantidad: 10
  - Mínimo: 10

Resultado esperado:

- O2: Stock bajo

## Explicacion final

La solución funciona porque simula un sistema de inventario químico aplicando reglas de clasificación. Recorre cada sustancia, compara la cantidad disponible con los valores establecidos y determina si el producto está disponible, tiene poco stock o está agotado.