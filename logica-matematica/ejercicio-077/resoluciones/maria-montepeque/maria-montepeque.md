# Ejercicio 077 - Logica matematica: estadisticas de ranking

## Analisis

- Entrada: un arreglo `participantes` con los puntajes obtenidos, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono, se le resta la penalizacion y el resultado se redondea hacia arriba.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = Math.ceil(promedio(participantes) + bono - penalizacion)`.
2. La clasificacion se define por rangos ordenados sobre el `puntaje_final`:
   - 30 o mas: `elite`
   - 20 a 29: `competitivo`
   - 10 a 19: `en desarrollo`
   - menor a 10: `inicial`
3. Si `participantes` esta vacio, no se calculan estadisticas y se devuelve `clasificacion: sin datos`.

## Verificacion de la formula

Con el ejemplo del enunciado:

```text
participantes: [12, 18, 25, 30] -> promedio = 21.25
21.25 + 8 - 3 = 26.25
Math.ceil(26.25) = 27
```

Resultado: `puntaje_final: 27`, `clasificacion: competitivo`, igual al esperado en el README del ejercicio.

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

### Caso borde

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

## Explicacion final

El promedio resume el desempeno general de los participantes. El bono y la penalizacion ajustan ese promedio segun reglas externas al grupo, y el redondeo hacia arriba evita perjudicar al participante por decimales intermedios. La clasificacion final se obtiene comparando el puntaje contra una tabla de rangos ordenados de mayor a menor, en lugar de usar condicionales anidados, lo que facilita agregar o modificar rangos en el futuro.