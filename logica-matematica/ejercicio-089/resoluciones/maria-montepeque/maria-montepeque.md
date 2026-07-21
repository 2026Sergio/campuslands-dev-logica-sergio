# Ejercicio 089 - Logica matematica: modulos y divisibilidad

## Analisis

- Entrada: una lista de `participantes` (numeros), un `bono` y una `penalizacion`.
- Proceso: se calcula el promedio de los participantes, se redondea hacia arriba, y se le suma el bono y se le resta la penalizacion. Con ese puntaje se determina una clasificacion segun rangos.
- Salida: un objeto con `puntaje_final`, `clasificacion` y una `explicacion`.

## Reglas identificadas

1. `puntaje_final = Math.ceil(promedio(participantes)) + bono - penalizacion`.
2. Si `participantes` esta vacio, el promedio se omite y `puntaje_final = bono - penalizacion`.
3. La clasificacion se obtiene comparando `puntaje_final` contra rangos ordenados de mayor a menor:
   - `>= 30`: elite
   - `>= 20`: competitivo
   - `>= 10`: regular
   - resto: bajo

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

El promedio de los participantes representa el desempeno base del grupo. Se redondea con `Math.ceil` para que cualquier fraccion favorezca al grupo antes de aplicar los ajustes. El bono y la penalizacion se aplican despues, de forma directa y sin redondeos adicionales, para que su efecto sea siempre exacto y predecible. La clasificacion usa una tabla de rangos ordenada de mayor a menor, lo que evita condicionales anidados y facilita agregar nuevos rangos en el futuro. El caso borde de una lista vacia se maneja evitando la division entre cero: en ese caso el puntaje depende unicamente del bono y la penalizacion.

## Nota sobre el README del ejercicio

El ejemplo de entrada y salida del README original no menciona explicitamente operaciones de modulo o divisibilidad, aunque la tematica del ejercicio si lo indica. Se tomo el ejemplo numerico como especificacion autoritativa: la formula `Math.ceil(promedio) + bono - penalizacion` es la unica que reproduce exactamente `puntaje_final: 27` de forma consistente y con sentido semantico para los datos de entrada (participantes, bono, penalizacion).