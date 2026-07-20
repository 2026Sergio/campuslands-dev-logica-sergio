# Ejercicio 075 - Logica matematica

## Analisis

- Entrada: una lista de `participantes` (numeros), un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono, se le resta la penalizacion y se redondea hacia arriba para obtener el puntaje final. Con ese puntaje se determina una clasificacion segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Nota sobre el README del ejercicio

El titulo del ejercicio menciona "velocidad tiempo distancia", pero tanto el contexto como el ejemplo de entrada/salida describen un calculo de puntaje con participantes, bono y penalizacion. Se tomo el ejemplo literal como especificacion valida, tal como lo indica el criterio de validacion del reto.

## Reglas identificadas

1. El promedio de los participantes se calcula como la suma de sus valores dividida entre la cantidad de participantes.
2. Al promedio se le suma el bono y se le resta la penalizacion.
3. El resultado se redondea hacia arriba con `Math.ceil` para obtener el `puntaje_final`.
4. La clasificacion se asigna segun el puntaje final: 30 o mas es "excelente", de 20 a 29 es "competitivo", de 10 a 19 es "regular" y menos de 10 es "bajo".
5. Si la lista de participantes esta vacia, el promedio se toma como 0 para evitar division entre cero.

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
puntaje_final: 3
clasificacion: bajo
```

## Explicacion final

El promedio del caso normal es (12+18+25+30)/4 = 21.25. Sumando el bono (8) y restando la penalizacion (3) da 26.25, que al redondear hacia arriba resulta en 27, tal como pide el ejemplo del ejercicio. Ese puntaje cae dentro del rango de 20 a 29, por lo que la clasificacion es "competitivo". El caso borde valida que una lista vacia de participantes no rompa el calculo, tratando el promedio como 0.

## Como ejecutar

```bash
node maria-montepeque.js
```