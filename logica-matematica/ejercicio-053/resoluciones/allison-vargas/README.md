# Plantilla de solucion - Coordenadas y Distancia (Paracaidismo)

## Analisis

- Entrada:
  - `zonaObjetivo`: Objeto conteniendo las coordenadas cartesianas del punto de destino `{x, y}`.
  - `puntoAterrizaje`: Objeto conteniendo las coordenadas reales donde tocó tierra el paracaidista `{x, y}`.
- Proceso:
  - Validar que ambos parámetros sean objetos con propiedades numéricas válidas para `x` e `y`.
  - Aplicar la fórmula de la **Distancia Euclidiana** en el plano bidimensional:
    $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
  - Redondear la distancia calculada a dos decimales de precisión.
  - Clasificar el desempeño de la maniobra según el margen de desviación respecto al punto blanco.
- Salida:
  - Coordenadas de origen y llegada, desvíos por eje ($\Delta x$, $\Delta y$), distancia euclidiana en metros, clasificación y explicación.

## Reglas identificadas

1. **Distancia Euclidiana:**  
   $$d = \sqrt{\Delta x^2 + \Delta y^2} = \sqrt{(x_{\text{aterrizaje}} - x_{\text{objetivo}})^2 + (y_{\text{aterrizaje}} - y_{\text{objetivo}})^2}$$
2. **Clasificación por Rango de Desviación:**
   - Si $d = 0$ m: "Aterrizaje Perfecto (Centro Exacto)".
   - Si $0 < d \le 15$ m: "Aterrizaje Excelente (Zona Verde)".
   - Si $15 < d \le 50$ m: "Aterrizaje Aceptable (Zona Amarilla)".
   - Si $d > 50$ m: "Fuera de Zona de Seguridad (Zona Roja)".

## Pruebas

### Caso normal

Entrada:
- Zona objetivo: `{ x: 0, y: 0 }`
- Punto aterrizaje: `{ x: 9, y: 12 }`

Resultado esperado:
- $\Delta x = 9$, $\Delta y = 12$
- Distancia: $\sqrt{9^2 + 12^2} = \sqrt{81 + 144} = \sqrt{225} = 15$ m
- Clasificación: `Aterrizaje Excelente (Zona Verde)`

### Caso borde

Entrada:
- Zona objetivo: `{ x: 50, y: 100 }`
- Punto aterrizaje: `{ x: 50, y: 100 }`

Resultado esperado:
- $\Delta x = 0$, $\Delta y = 0$
- Distancia: $0$ m
- Clasificación: `Aterrizaje Perfecto (Centro Exacto)`

## Explicacion final

El algoritmo calcula el vector de desplazamiento entre dos puntos en el plano cartesiano mediante geometría analítica. Determinar la distancia euclidiana permite cuantificar con exactitud la desviación sufrida por corrientes de aire o maniobras durante el salto de paracaidismo.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.