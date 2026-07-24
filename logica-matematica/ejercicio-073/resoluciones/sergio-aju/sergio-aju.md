# Plantilla de solucion

## Analisis

- **Entrada:** Las coordenadas (`coordenadaX`, `coordenadaY`), un valor de `ajuste` y una `penalizacion`.
- **Proceso:** 
  1. Validar que las coordenadas estén definidas.
  2. Calcular la distancia base usando la fórmula de distancia (teorema de Pitágoras / norma euclidiana).
  3. Sumar el ajuste y restar la penalización.
  4. Determinar la clasificación según la distancia final obtenida.
- **Salida:** Un objeto con la `distancia_final`, la `clasificacion` y una `explicacion` breve.

## Reglas identificadas

1. **Cálculo de posición:** Las coordenadas cartesianas determinan el punto de llegada base del paracaidista.
2. **Modificadores de entorno:** El ajuste y la penalización modifican el resultado final de distancia.
3. **Validación de límites:** La distancia final no debe arrojar valores negativos.

## Pruebas

### Caso normal

**Entrada:**
```text
coordenadaX: 3
coordenadaY: 4
ajuste: 2
penalizacion: 1