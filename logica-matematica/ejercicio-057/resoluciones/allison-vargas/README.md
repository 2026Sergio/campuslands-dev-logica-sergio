# Plantilla de solucion - Estadísticas de Ranking (Arquitectura 3D)

## Analisis

- Entrada:
  - `proyectos`: Arreglo de objetos donde cada objeto contiene `nombre` (string) y `puntaje` (número entre $0$ y $100$).
- Proceso:
  - Validar que la lista de entrada no esté vacía y que todos los objetos tengan datos correctos.
  - Calcular la suma acumulada de puntajes para determinar la media aritmética:
    $$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$$
  - Identificar el proyecto con la máxima puntuación y el de la mínima.
  - Ordenar los proyectos de mayor a menor puntaje y asignar posiciones consecutivas (manejando empates en el ranking).
  - Categorizar cada diseño según el nivel de calidad del renderizado o modelado.
- Salida:
  - Total de proyectos evaluados, promedio general, mejor proyecto, peor proyecto, tabla con ranking ordenado y explicación.

## Reglas identificadas

1. **Rango de Puntaje Válido:**
   $$0 \le \text{puntaje} \le 100$$
2. **Escala de Calificación:**
   - Si $\text{puntaje} \ge 90$: "Sobresaliente / Render Realista".
   - Si $75 \le \text{puntaje} < 90$: "Aceptable / Render Estándar".
   - Si $\text{puntaje} < 75$: "Bajo / Requiere Optimización".
3. **Gestión de Empates:**
   - Proyectos con el mismo puntaje comparten la misma posición dentro del ranking.

## Pruebas

### Caso normal

Entrada:
- Proyectos: `[ { "Fachada Rascacielos A": 92 }, { "Render Interior Loft": 78 }, { "Modelado Estructura Viento": 65 }, { "Plaza Urbana VR": 92 } ]`

Resultado esperado:
- Total: `4`
- Promedio: $\frac{92 + 78 + 65 + 92}{4} = 81.75$
- Posición 1 (Empate): `Fachada Rascacielos A` y `Plaza Urbana VR` ($92$ pts)
- Posición 3: `Render Interior Loft` ($78$ pts)
- Posición 4: `Modelado Estructura Viento` ($65$ pts)

### Caso borde

Entrada:
- Proyectos: `[ { "Complejo Residencial": 85 } ]`

Resultado esperado:
- Total: `1`
- Promedio: `85`
- Mejor y Peor proyecto: `Complejo Residencial`
- Posición 1: `Complejo Residencial` (Aceptable / Render Estándar)

## Explicacion final

La solución permite jerarquizar y analizar estadísticamente un conjunto de entregas en un entorno de modelado arquitectónico 3D. A través de la iteración y ordenamiento de arreglos, se obtiene una visión clara del rendimiento técnico del equipo y los estándares de calidad del proyecto.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.