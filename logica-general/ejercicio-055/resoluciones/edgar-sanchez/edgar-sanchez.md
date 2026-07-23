## Analisis
El problema consiste en aplicar una lógica de negocio para la tarificación de servicios digitales. Se procesan tres variables independientes que, al combinarse, definen el costo total del producto final.

- Entrada: Resolucion (baja/media/alta), Estilo (lineart/color/renderizado), Urgencia (booleano).
- Proceso: Asignación de valores base según resolución, incremento por estilo seleccionado y recargo fijo por urgencia.
- Salida: Valor numérico total o mensaje de error en caso de datos inválidos.

## Reglas identificadas

1. Precios base por resolución: baja (20), media (40), alta (70).
2. Adicionales por estilo: lineart (0), color (30), renderizado (60).
3. La urgencia aplica un recargo fijo de 50.
4. El sistema debe validar que la entrada de resolución y estilo existan.

## Pruebas

### Caso normal

Entrada: "media", "color", true

Resultado esperado: 120

### Caso borde

Entrada: "baja", "lineart", false

Resultado esperado: 20

## Explicacion final por que tu solucion funciona.
La solución emplea una estructura de acumulación de precio base inicial. Se utilizan validaciones simples para asegurar la integridad de las entradas y se aplica el recargo de urgencia únicamente si la condición es verdadera, garantizando que el cálculo final sea consistente con las reglas de negocio descritas.