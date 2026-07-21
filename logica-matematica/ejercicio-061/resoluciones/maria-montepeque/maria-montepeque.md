# Ejercicio 061 - Logica matematica

## Analisis

- Entrada: lista `participantes` (numeros), `bono` y `penalizacion`.
- Proceso: calcular el promedio de `participantes`, redondearlo hacia arriba, sumar el bono y restar la penalizacion. Con ese puntaje se determina una clasificacion segun rangos.
- Salida: objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Reglas identificadas

1. `puntaje_final = Math.ceil(promedio(participantes)) + bono - penalizacion`.
2. Clasificacion segun el puntaje final:
   - `puntaje_final >= 30`: elite
   - `20 <= puntaje_final < 30`: competitivo
   - `10 <= puntaje_final < 20`: intermedio
   - `puntaje_final < 10`: principiante
3. Si `participantes` esta vacio, el puntaje final solo considera `bono - penalizacion` (no hay promedio que calcular).

## Nota sobre el README del ejercicio

El README no especifica los rangos de clasificacion de forma explicita. Se definieron los rangos de arriba para que el unico ejemplo dado (`puntaje_final: 27` -> `competitivo`) se cumpla de forma consistente, dejando margen simetrico para las demas categorias.

## Pruebas

### Caso normal (ejemplo del README)

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

Resultado obtenido: coincide exactamente.

### Caso normal adicional

Entrada:

```text
participantes: [5, 10, 15]
bono: 2
penalizacion: 1
```

Resultado obtenido:

```text
puntaje_final: 11
clasificacion: intermedio
```

### Caso borde - participantes vacio

Entrada:

```text
participantes: []
bono: 5
penalizacion: 2
```

Resultado obtenido:

```text
puntaje_final: 3
clasificacion: principiante
explicacion: no hay participantes, el puntaje final solo considera el bono y la penalizacion.
```

### Caso borde - puntaje negativo

Entrada:

```text
participantes: [1, 2]
bono: 0
penalizacion: 5
```

Resultado obtenido:

```text
puntaje_final: -3
clasificacion: principiante
```

## Explicacion final

El promedio de `participantes` se redondea hacia arriba con `Math.ceil` porque es la unica operacion que reproduce el resultado del ejemplo (`21.25` -> `22`, `22 + 8 - 3 = 27`). La clasificacion se resuelve con una tabla de rangos ordenada de mayor a menor, evitando condicionales anidados. El caso de `participantes` vacio se maneja aparte para no dividir entre cero.

## Como ejecutar

```bash
node -e "
const { procesarReto } = require('./maria-montepeque.js');
console.log(procesarReto({ participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 }));
"
```