# Plantilla de solucion - Normalización de Puntajes (Soldadura)

## Analisis

- Entrada:
  - `evaluaciones`: Arreglo de objetos con las propiedades `tecnico` (string) y `puntajeBruto` (número).
  - `escalaMin` y `escalaMax`: Límites deseados para el rango ajustado (por defecto $0$ y $100$).
- Proceso:
  - Recorrer el arreglo para determinar los valores extremales $x_{\min}$ y $x_{\max}$.
  - Aplicar la reestructuración lineal escalada para reajustar los valores originales:
    $$x_{\text{norm}} = \left( \frac{x - x_{\min}}{x_{\max} - x_{\min}} \right) \cdot (S_{\max} - S_{\min}) + S_{\min}$$
  - Controlar el caso borde donde $x_{\max} = x_{\min}$ para evitar indefiniciones matemáticas ($\frac{0}{0}$).
  - Clasificar cada prueba técnica de soldadura según el puntaje ajustado.
- Salida:
  - Resumen del rango original, listado ajustado con clasificación técnica y explicación del proceso.

## Reglas identificadas

1. **Normalización Min-Max:**
   Transforma valores absolutos a una escala relativa homogénea de $[0, 100]$.
2. **Protección contra División por Cero:**
   Si $x_{\max} = x_{\min}$, la diferencia en el denominador es cero. En dicho caso, todos los elementos reciben la puntuación máxima de la escala ($100$).
3. **Control de Calidad en Soldadura:**
   - Si $x_{\text{norm}} \ge 90$: "Aprobado - Cordón Homogéneo (Sin Porosidades)".
   - Si $70 \le x_{\text{norm}} < 90$: "Aprobado - Penetración Aceptable".
   - Si $x_{\text{norm}} < 70$: "Rechazado - Requiere Pulido / Retrabajo".

## Pruebas

### Caso normal

Entrada:
- Puntajes brutos: `[45, 85, 65, 95]`
- Mínimo bruto: `45`, Máximo bruto: `95`

Resultado esperado:
- Muestra A ($45$ pts) $\rightarrow 0$ pts (Rechazado)
- Muestra D ($95$ pts) $\rightarrow 100$ pts (Aprobado - Cordón Homogéneo)
- Muestra B ($85$ pts) $\rightarrow \frac{85 - 45}{95 - 45} \times 100 = 80$ pts (Aprobado - Penetración Aceptable)

### Caso borde

Entrada:
- Puntajes brutos idénticos: `[50, 50]`

Resultado esperado:
- Mínimo bruto = Máximo bruto = `50`
- Puntaje normalizado para todas las muestras: `100` pts.

## Explicacion final

El ejercicio aplica técnicas de escalado numérico utilizadas en análisis de datos e ingeniería de pruebas de materiales. La normalización permite comparar objetivamente diferentes muestras o pruebas de soldadura sometidas a distintas condiciones de calibración.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.