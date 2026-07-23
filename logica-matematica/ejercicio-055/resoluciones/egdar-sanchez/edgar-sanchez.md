## Analisis

Para resolver este problema se pensó en la cinemática del movimiento de un lápiz o cursor sobre un lienzo de dibujo digital. La velocidad con la que se desplaza la puntera ($v$), el tiempo que dura el trazo ($t$) y la longitud o distancia recorrida en píxeles/milímetros ($d$) están relacionados por la ecuación fundamental del movimiento rectilíneo uniforme ($d = v \times t$). Dado que el usuario puede ingresar dos valores cualesquiera y solicitar el cálculo de la variable restante, el sistema debe identificar qué magnitud falta, validar la coherencia física de las entradas y computar la incognita.

- Entrada:
  - `velocidad`: Valor numérico (píxeles por segundo o unidad equivalente) o `None` si es la incógnita.
  - `tiempo`: Valor numérico (segundos) o `None` si es la incógnita.
  - `distancia`: Valor numérico (longitud del trazo) o `None` si es la incógnita.

- Proceso:
  1. Validar que exactamente una de las tres magnitudes sea nula (`None`). Si hay más o menos de un valor nulo, la solicitud es indeterminada.
  2. Verificar que todos los datos numéricos provistos sean tipos de datos válidos (enteros o flotantes) y no sean negativos.
  3. Resolver la incógnita según corresponda:
     - Si falta `velocidad`: $v = \frac{d}{t}$ (requiere $t > 0$).
     - Si falta `tiempo`: $t = \frac{d}{v}$ (requiere $v > 0$; si $v = 0$ y $d = 0$, $t = 0$).
     - Si falta `distancia`: $d = v \times t$.
  4. Redondear todos los parámetros calculados y conocidos a dos decimales.

- Salida:
  - Un diccionario/objeto con los valores finales de `velocidad`, `tiempo` y `distancia`. Si las entradas violan las leyes físicas o el formato requerido, se retorna `None`.

## Reglas identificadas

1. **Ecuación fundamental de trazo:** Las magnitudes deben satisfacer $d = v \times t$, $v = \frac{d}{t}$, o $t = \frac{d}{v}$.
2. **Restricción de magnitud única:** Debe existir exactamente una sola incógnita (`None`) por cada consulta.
3. **Imposibilidad física y división por cero:** Tiempos y velocidades negativas no existen en este contexto. Una velocidad de cero con una distancia mayor a cero no puede producir un tiempo finito de ejecución, por lo que debe rechazarse.

## Pruebas

### Caso normal

Entrada:
- `velocidad`: `None`
- `tiempo`: `2.5`
- `distancia`: `500.0`

Resultado esperado:
```json
{
  "velocidad": 200.0,
  "tiempo": 2.5,
  "distancia": 500.0
}