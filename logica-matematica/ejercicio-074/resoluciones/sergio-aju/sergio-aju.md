# Plantilla de solucion

## Analisis

- **Entrada:** Las dimensiones del diseño (`base`, `altura`), un valor de `ajuste` y una `penalizacion`.
- **Proceso:** 
  1. Validar que la base y la altura sean mayores a cero para evitar dimensiones erróneas en el diseño del tatuaje.
  2. Calcular el área base ($\text{base} \times \text{altura}$) y el perímetro base ($2 \times (\text{base} + \text{altura})$).
  3. Sumar el ajuste y restar la penalización a ambos resultados.
  4. Determinar la clasificación según el área final obtenida.
- **Salida:** Un objeto con el `area_final`, el `perimetro_final`, la `clasificacion` y una `explicacion` breve.

## Reglas identificadas

1. **Cálculo geométrico:** Las fórmulas estándar de área y perímetro determinan las medidas base del tatuaje.
2. **Modificadores de diseño:** El ajuste y la penalización modifican los valores finales obtenidos.
3. **Validación de límites:** Ninguna medida final de área o perímetro debe arrojar valores negativos.

## Pruebas

### Caso normal

**Entrada:**
```text
base: 5
altura: 4
ajuste: 2
penalizacion: 1