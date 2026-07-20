# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con proyectos de arquitectura 3D.
  - Cada proyecto contiene nombre, presupuesto y área construida.

- Proceso:
  - Recorrer cada proyecto.
  - Evaluar las condiciones establecidas en la tabla de decisión.
  - Asignar un resultado según los valores del presupuesto y el área.

- Salida:
  - Nombre del proyecto.
  - Decisión tomada: aprobado, requiere revisión o rechazado.

## Reglas identificadas

1. Si el presupuesto es mayor a 50000 y el área es mayor a 200, el proyecto es aprobado.
2. Si el presupuesto es mayor a 30000 y el área es mayor a 100, el proyecto requiere revisión.
3. Si no cumple ninguna condición anterior, el proyecto es rechazado.

## Pruebas

### Caso normal

Entrada:

- Torre moderna:
  - Presupuesto: 80000
  - Área: 300

- Casa inteligente:
  - Presupuesto: 40000
  - Área: 150

- Diseño pequeño:
  - Presupuesto: 20000
  - Área: 80

Resultado esperado:

- Torre moderna: Aprobado
- Casa inteligente: Requiere revisión
- Diseño pequeño: Rechazado

### Caso borde

Entrada:

- Proyecto:
  - Nombre: Oficina
  - Presupuesto: 50000
  - Área: 200

Resultado esperado:

- Oficina: Requiere revisión

## Explicacion final

La solución funciona porque implementa una tabla de decisión mediante condiciones ordenadas. Cada proyecto es evaluado según sus características y se asigna un estado final dependiendo de las reglas de aprobación establecidas.