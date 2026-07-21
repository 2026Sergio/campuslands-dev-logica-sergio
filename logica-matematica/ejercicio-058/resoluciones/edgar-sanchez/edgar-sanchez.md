## Analisis

Para resolver este problema se concibió un algoritmo de escalamiento Min-Max aplicado a la evaluación técnica de un taller de soldadura. En pruebas de control de calidad de soldadura (resistencia, penetración, acabado visual), los puntajes absolutos varían según el tipo de prueba o estándar utilizado. Para comparar objetivamente a los soldadores, se requiere mapear los puntajes crudos a una escala estándar de $0$ a $100$, donde el peor desempeño relativo sea $0$ y el mejor sea $100$.

- Entrada:
  - `evaluaciones`: Una lista de diccionarios/objetos donde cada elemento contiene el nombre del soldador (`soldador`) y la calificación numérica obtenida en la prueba (`puntaje`).

- Proceso:
  1. Validar la estructura general de la lista de entrada.
  2. Filtrar y sanitizar los registros: descartar elementos que no sean diccionarios, nombres vacíos/espacios en blanco, valores booleanos o puntajes negativos.
  3. Encontrar el puntaje mínimo ($\text{Min}$) y el puntaje máximo ($\text{Max}$) entre todas las evaluaciones válidas.
  4. Calcular el rango de dispersión: $\text{Rango} = \text{Max} - \text{Min}$.
  5. Aplicar la fórmula de normalización Min-Max para cada puntaje $x$:
     - Si $\text{Rango} > 0$: $x_{\text{normalizado}} = \frac{x - \text{Min}}{\text{Max} - \text{Min}} \times 100$
     - Si $\text{Rango} == 0$ (todos los soldadores tienen la misma calificación): asignar $100.0$ por defecto a todos para evitar división entre cero.
  6. Redondear los puntajes a dos decimales.

- Salida:
  - Una lista de diccionarios/objetos con el nombre del soldador sanitizado, su puntaje original y su puntaje normalizado en la escala $0-100$.

## Reglas identificadas

1. **Fórmula de Normalización Min-Max:** Asigna de forma proporcional un valor relativo dentro del intervalo $[0, 100]$ usando la relación del valor respecto a los extremos de la muestra.
2. **Protección contra División por Cero:** Si todos los puntajes válidos son idénticos ($\text{Max} == \text{Min}$), el rango es $0$, por lo que se asigna $100.0$ a todos los participantes.
3. **Integridad y Sanitización de Datos:** Los nombres con espacios sobrantes deben ser limpiados. Puntajes negativos, nombres nulos/vacíos o datos corruptos se eliminan antes de efectuar cualquier cálculo de mínimos y máximos.

## Pruebas

### Caso normal

Entrada:
```json
[
  {"soldador": "Carlos M.", "puntaje": 85},
  {"soldador": "Ana R.", "puntaje": 40},
  {"soldador": "Luis G.", "puntaje": 100}
]