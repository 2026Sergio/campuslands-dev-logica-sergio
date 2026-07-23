## Analisis

Para resolver este problema se diseñó un algoritmo de ordenamiento y jerarquización estadística de proyectos de renderizado e infografía en arquitectura 3D. El objetivo central es evaluar el impacto visual y la aceptación de las maquetas digitales calculando una métrica ponderada entre la evaluación técnica (puntaje de 0 a 100) y la popularidad de la comunidad (cantidad de votos), aplicando criterios de desempate multinivel deterministas para construir la tabla final de posiciones (ranking).

- Entrada:
  - `proyectos`: Una lista de diccionarios/objetos donde cada elemento contiene el nombre del proyecto de arquitectura 3D, la cantidad de votos recibidos y el puntaje asignado por el jurado.

- Proceso:
  1. Filtrar y validar cada elemento de la lista de entrada. Descartar proyectos con nombres vacíos, votos negativos o puntajes fuera del rango $[0, 100]$.
  2. Sanitizar el nombre del proyecto eliminando espacios sobrantes al inicio y final.
  3. Calcular el promedio ponderado combinando el rendimiento técnico y la participación: $\text{Promedio} = (\text{Votos} \times 0.4) + (\text{Puntaje} \times 0.6)$.
  4. Ordenar los proyectos de forma descendente considerando las siguientes prioridades jerárquicas:
     - 1º Criterio: Mayor `promedio_ponderado`.
     - 2º Criterio (Desempate 1): Mayor `puntaje` del jurado.
     - 3º Criterio (Desempate 2): Mayor número de `votos`.
     - 4º Criterio (Desempate 3): Orden alfabético por `nombre`.
  5. Asignar las posiciones numéricas del ranking gestionando correctamente las posiciones compartidas en caso de empates absolutos en todas las métricas numéricas.

- Salida:
  - Una lista ordenada de objetos que representan el ranking, donde cada elemento incluye la posición asignada, el nombre limpio, el promedio ponderado redondeado a dos decimales y los datos originales validados.

## Reglas identificadas

1. **Rango y Tipado Estricto:** La cantidad de votos debe ser mayor o igual a 0 ($\text{votos} \ge 0$) y el puntaje del jurado debe estar comprendido estrictamente entre 0 y 100 ($0 \le \text{puntaje} \le 100$).
2. **Ponderación de Calificación:** La métrica principal se calcula otorgando un $40\%$ de peso a los votos de la comunidad y un $60\%$ a la calificación del jurado.
3. **Jerarquía de Desempate Multi-criterio:** Ante la igualdad en el promedio ponderado, la posición superior se decide sucesivamente por el puntaje técnico, luego por la cantidad de votos y finalmente por orden alfabético ascendente en el nombre.
4. **Posicionamiento denso/estándar por empate:** Si dos proyectos comparten exactamente las mismas métricas numéricas, obtienen el mismo puesto en el ranking, saltando las posiciones posteriores en consecuencia.

## Pruebas

### Caso normal

Entrada:
```json
[
  {"nombre": "Edificio Eco3D", "votos": 150, "puntaje": 85.5},
  {"nombre": "Torre Cristal", "votos": 200, "puntaje": 80.0},
  {"nombre": "Puente Futuro", "votos": 150, "puntaje": 85.5}
]