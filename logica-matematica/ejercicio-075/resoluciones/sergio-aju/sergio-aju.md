# Plantilla de solucion

## Analisis

- **Entrada:** La `velocidad` y el `tiempo` de renderizado en dibujo digital, un valor de `ajuste` y una `penalizacion`.
- **Proceso:** 
  1. Validar que la velocidad y el tiempo sean mayores a cero para evitar cálculos erróneos.
  2. Calcular la distancia base mediante la fórmula de física ($\text{velocidad} \times \text{tiempo}$).
  3. Sumar el ajuste y restar la penalización al resultado obtenido.
  4. Determinar la clasificación según la distancia final.
- **Salida:** Un objeto con la `distancia_final`, la `clasificacion` y una `explicacion` breve.

## Reglas identificadas

1. **Cálculo cinemático:** La distancia se obtiene multiplicando la velocidad por el tiempo.
2. **Modificadores de proceso:** El ajuste y la penalización modifican el resultado final de distancia.
3. **Validación de límites:** La distancia final no debe arrojar valores negativos.

## Pruebas

### Caso normal

**Entrada:**
```text
velocidad: 10
tiempo: 5
ajuste: 2
penalizacion: 1