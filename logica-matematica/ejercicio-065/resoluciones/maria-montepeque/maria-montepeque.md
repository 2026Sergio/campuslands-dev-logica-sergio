# Solucion - Ejercicio 065: minimos y limites

## Analisis

- Entrada: un arreglo `participantes` con puntajes numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se suma el bono, se resta la penalizacion y el resultado se limita entre un minimo (0) y un maximo (100).
- Salida: `puntaje_final` (numero entero), `clasificacion` (texto) y una `explicacion` breve.

## Reglas identificadas

1. El puntaje base es el promedio de todos los participantes.
2. Al promedio se le suma el bono y se le resta la penalizacion.
3. El resultado se limita para que nunca sea menor a 0 ni mayor a 100.
4. El puntaje final se redondea hacia arriba con `Math.ceil`.
5. La clasificacion se define por rangos: elite (>=35), competitivo (>=25), en desarrollo (>=15), principiante (<15).
6. Si `participantes` esta vacio, no se puede calcular y se devuelve un puntaje de 0 con clasificacion "sin datos".

## Pruebas

### Caso normal

Entrada:

```text
participantes: [12, 18, 25, 30]
bono: 8
penalizacion: 3
```

Resultado esperado:

```text
puntaje_final: 27
clasificacion: competitivo
```

### Caso borde (participantes vacio)

Entrada:

```text
participantes: []
bono: 5
penalizacion: 2
```

Resultado esperado:

```text
puntaje_final: 0
clasificacion: sin datos
```

### Caso limite superior

Entrada:

```text
participantes: [95, 98, 100]
bono: 20
penalizacion: 0
```

Resultado esperado:

```text
puntaje_final: 100
clasificacion: elite
```

### Caso limite inferior

Entrada:

```text
participantes: [2, 1, 0]
bono: 0
penalizacion: 10
```

Resultado esperado:

```text
puntaje_final: 0
clasificacion: principiante
```

## Explicacion final

El promedio de `[12, 18, 25, 30]` es 21.25. Sumando el bono (8) y restando la penalizacion (3) se obtiene 26.25, valor que queda dentro del rango 0-100, por lo que no se ajusta. Al redondear hacia arriba con `Math.ceil` se obtiene 27, que corresponde a la clasificacion "competitivo" segun los rangos definidos. Los limites minimo y maximo evitan puntajes negativos o fuera de escala cuando el bono o la penalizacion son muy altos.

## Como ejecutar

```bash
node maria-montepeque.js
```