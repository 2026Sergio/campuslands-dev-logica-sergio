# Plantilla de solucion

## Analisis

- Entrada:
  - Un arreglo con proyectos de animación 3D.
  - Cada proyecto contiene nombre y presupuesto inicial.

- Proceso:
  - Recorrer cada proyecto.
  - Evaluar si aplica un descuento según el presupuesto.
  - Calcular el valor del descuento.
  - Obtener el presupuesto final después de aplicar la reducción.

- Salida:
  - Nombre del proyecto.
  - Presupuesto original.
  - Descuento aplicado.
  - Presupuesto final.

## Reglas identificadas

1. Los proyectos con presupuesto mayor o igual a 10000 reciben un 15% de descuento.
2. Los proyectos con presupuesto entre 5000 y 9999 reciben un 10% de descuento.
3. Los proyectos menores a 5000 no reciben descuento.

## Pruebas

### Caso normal

Entrada:

- Cortometraje 3D: 12000
- Personaje animado: 7000
- Modelo básico: 3000

Resultado esperado:

- Cortometraje 3D:
  - Descuento: 1800
  - Presupuesto final: 10200

- Personaje animado:
  - Descuento: 700
  - Presupuesto final: 6300

- Modelo básico:
  - Descuento: 0
  - Presupuesto final: 3000

### Caso borde

Entrada:

- Proyecto:
  - Animación corta
  - Presupuesto: 5000

Resultado esperado:

- Descuento: 500
- Presupuesto final: 4500

## Explicacion final

La solución funciona porque evalúa cada presupuesto mediante condiciones que determinan el descuento correspondiente. Después calcula el valor reducido y genera un nuevo resultado con la información financiera actualizada de cada proyecto de animación 3D.