# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo de fórmulas químicas.
  - Cada fórmula contiene nombre, cantidad de elementos y cantidad de átomos.

- Proceso:
  - Recorrer cada fórmula registrada.
  - Verificar que tenga elementos y átomos mayores a cero.
  - Clasificar la fórmula como válida o inválida.

- Salida:
  - Nombre de la fórmula.
  - Estado de validación.

## Reglas identificadas

1. Una fórmula debe tener al menos un elemento químico.
2. Una fórmula debe contener al menos un átomo.
3. Si alguna cantidad es cero o negativa, la fórmula es inválida.

## Pruebas

### Caso normal

Entrada:

- H2O:
  - Elementos: 2
  - Átomos: 3

- CO2:
  - Elementos: 2
  - Átomos: 3

Resultado esperado:

- H2O: Válida
- CO2: Válida

### Caso borde

Entrada:

- Fórmula:
  - X
  - Elementos: 0
  - Átomos: 0

Resultado esperado:

- X: Inválida

## Explicacion final

La solución funciona porque valida cada fórmula aplicando reglas numéricas básicas. Mediante un ciclo recorre todas las fórmulas y utiliza condiciones para comprobar si cumplen los requisitos mínimos antes de clasificarlas como válidas o inválidas.