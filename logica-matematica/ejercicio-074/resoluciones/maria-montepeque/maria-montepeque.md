# Ejercicio 074 - Logica matematica

## Analisis

- Entrada: un arreglo `participantes` con puntuaciones numericas, un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se le suma el bono, se le resta la penalizacion y se redondea hacia arriba. Con ese puntaje final se determina una clasificacion segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y `explicacion`.

## Nota sobre el README del ejercicio

El titulo del README indica "areas y perimetros", pero el ejemplo de entrada/salida no tiene relacion con esa tematica: usa `participantes`, `bono`, `penalizacion` y `puntaje_final`. Siguiendo el ejemplo como especificacion autoritativa, esta entrega resuelve el calculo de puntaje y clasificacion, no un problema geometrico.

## Reglas identificadas

1. El promedio de `participantes` se calcula como la suma de sus valores dividida entre la cantidad de elementos. Si el arreglo esta vacio, el promedio es 0 (se evita la division entre cero).
2. `puntaje_final = Math.ceil(promedio + bono - penalizacion)`.
3. La clasificacion se obtiene con una tabla de rangos ordenada de mayor a menor:
   - `>= 30`: elite
   - `>= 20`: competitivo
   - `>= 10`: intermedio
   - resto: principiante

## Reverse-engineering de la formula

Con `participantes: [12, 18, 25, 30]`, `bono: 8`, `penalizacion: 3`:

- Promedio: `(12 + 18 + 25 + 30) / 4 = 21.25`
- `21.25 + 8 - 3 = 26.25`
- `Math.ceil(26.25) = 27` -> coincide con el `puntaje_final: 27` del ejemplo.
- Con `puntaje_final: 27`, la clasificacion cae en el rango `>= 20`, es decir "competitivo", igual que el ejemplo.

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

### Caso borde: participantes vacio

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
```

### Caso adicional: puntaje negativo

Entrada:

```text
participantes: [5, 6]
bono: 1
penalizacion: 10
```

Resultado obtenido:

```text
puntaje_final: -3
clasificacion: principiante
```

## Explicacion final

El promedio resume el desempeno del grupo de participantes en un solo numero. Sumar el bono y restar la penalizacion ajusta ese numero segun reglas externas del reto, y `Math.ceil` asegura que el puntaje final sea siempre un entero redondeado hacia arriba, tal como exige el ejemplo (26.25 -> 27). La clasificacion usa una tabla de rangos ordenada en lugar de condicionales anidados, lo que facilita agregar o modificar categorias sin tocar la logica de calculo.

## Como ejecutar

```bash
node -e "console.log(require('./maria-montepeque.js').evaluarParticipantes([12, 18, 25, 30], 8, 3))"
```