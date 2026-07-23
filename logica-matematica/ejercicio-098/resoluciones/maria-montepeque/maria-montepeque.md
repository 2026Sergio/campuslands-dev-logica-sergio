# Ejercicio 098 - Normalizacion de puntajes

## Analisis

- Entrada: un arreglo `participantes` con puntajes numericos, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se redondea hacia arriba, se suma el bono y se resta la penalizacion. Con el resultado se determina una clasificacion segun rangos.
- Salida: un objeto con `puntajeFinal`, `clasificacion` y una `explicacion` del calculo.

## Reglas identificadas

1. El promedio de los participantes se redondea siempre hacia arriba (`Math.ceil`), ya que fue la unica operacion que reprodujo el resultado del ejemplo (`27`).
2. Al promedio redondeado se le suma el bono y se le resta la penalizacion para obtener el puntaje final.
3. El puntaje final se clasifica segun rangos: `elite` (30 o mas), `competitivo` (20 a 29), `regular` (10 a 19) y `bajo` (menos de 10).

## Nota sobre el README original

El README del ejercicio no especifica los rangos de clasificacion ni el metodo de redondeo. Ambos se dedujeron a partir del ejemplo dado (`participantes: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3` → `puntaje_final: 27`, `clasificacion: competitivo`), probando distintas combinaciones de redondeo hasta encontrar la unica que produce el resultado esperado.

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
puntajeFinal: 27
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
puntajeFinal: 0
clasificacion: sin_datos
```

## Explicacion final

El promedio por si solo no reproducia el resultado esperado con ningun metodo de redondeo directo. Al aplicar `Math.ceil` sobre el promedio antes de sumar el bono y restar la penalizacion, el resultado coincide exactamente con el ejemplo del README (27). Se valido tambien el caso de un arreglo vacio para evitar una division por cero, retornando una clasificacion especial (`sin_datos`) en lugar de un error.

## Como ejecutar

```bash
node maria-montepeque.js
```