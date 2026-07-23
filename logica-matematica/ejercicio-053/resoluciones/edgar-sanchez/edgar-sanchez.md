    ## Analisis

Para resolver este problema se pensó en un modelo geométrico en un plano cartesiano bi-dimensional ($X, Y$) aplicado a un salto de paracaidismo. Al comparar el punto de aterrizaje real del paracaidista respecto a la zona objetivo (target), se requiere calcular la separación física directa (distancia euclidiana), la distancia sobre los ejes coordenados (distancia manhattan) y determinar la orientación o dirección cardinal del viento/desviación respecto al punto de destino.

- Entrada:
  - `punto_objetivo`: Una tupla/lista de dos componentes numéricas `[x1, y1]` que indican la posición exacta de la zona de aterrizaje programada.
  - `salto_paracaidista`: Una tupla/lista de dos componentes numéricas `[x2, y2]` que indican las coordenadas de aterrizaje real del paracaidista.

- Proceso:
  1. Validar que ambas entradas existan, sean colecciones de exactamente dos elementos y contengan únicamente valores numéricos.
  2. Calcular el desplazamiento en cada eje: $\Delta x = x_2 - x_1$ y $\Delta y = y_2 - y_1$.
  3. Calcular la distancia euclidiana aplicando el teorema de Pitágoras: $d = \sqrt{(\Delta x)^2 + (\Delta y)^2}$.
  4. Calcular la distancia Manhattan sumando los valores absolutos de los desplazamientos: $d_m = |\Delta x| + |\Delta y|$.
  5. Evaluar los signos de $\Delta x$ y $\Delta y$ para determinar la dirección relativa en cuadrantes cardinales (Norte, Sur, Este, Oeste, Noreste, Noroeste, Sureste, Suroeste o En la zona de impacto).
  6. Redondear los resultados numéricos a dos decimales para mantener consistencia.

- Salida:
  - Un diccionario/objeto con las distancias calculadas, desviaciones en cada eje y la dirección cardinal de desviación. Si las entradas son inválidas, se retorna `None`.

## Reglas identificadas

1. **Geometría Euclidiana y Pitágoras:** La distancia en línea recta entre dos puntos $(x_1, y_1)$ y $(x_2, y_2)$ sigue la regla $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.
2. **Determinación Cardinal de Cuadrantes:**
   - Si $\Delta x > 0$ y $\Delta y > 0 \rightarrow$ Noreste
   - Si $\Delta x < 0$ y $\Delta y > 0 \rightarrow$ Noroeste
   - Si $\Delta x > 0$ y $\Delta y < 0 \rightarrow$ Sureste
   - Si $\Delta x < 0$ y $\Delta y < 0 \rightarrow$ Suroeste
   - Caso de alineación exacta en algún eje ($\Delta x = 0$ o $\Delta y = 0$), se asigna la dirección sobre el eje correspondiente.
3. **Validación de Tipos e Integridad:** Cualquier entrada que no sea una colección de exactamente dos números enteros o flotantes provocará un retorno seguro (`None`).

## Pruebas

### Caso normal

Entrada:
- `punto_objetivo`: `[10.0, 20.0]`
- `salto_paracaidista`: `[13.0, 24.0]`

Resultado esperado:
```json
{
  "distancia_euclidiana": 5.0,
  "distancia_manhattan": 7.0,
  "desviacion_x": 3.0,
  "desviacion_y": 4.0,
  "direccion": "Noreste"
}