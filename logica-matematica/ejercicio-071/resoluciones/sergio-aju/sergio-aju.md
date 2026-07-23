# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo con las categorías o cantidades de participantes (`participantes`), un valor numérico de `bono` y un valor numérico de `penalizacion`.
- **Proceso:** 
  1. Validar que la lista de participantes contenga elementos.
  2. Calcular el total acumulado de los participantes mediante una suma.
  3. Aplicar las operaciones aritméticas sumando el bono y restando la penalización para obtener el puntaje final.
  4. Determinar la clasificación según el resultado obtenido.
- **Salida:** Un objeto con el `puntaje_final`, la `clasificacion` y una `explicacion` breve.

## Reglas identificadas

1. **Cálculo base:** Se debe sumar el conjunto de datos de participantes para obtener una base numérica.
2. **Aplicación de bonificaciones y penalizaciones:** Al total se le suma el bono y se le resta la penalización.
3. **Validación de límites:** El sistema debe contemplar escenarios donde la lista de entrada esté vacía para evitar fallos.

## Pruebas

### Caso normal

**Entrada:**
```text
participantes: [12, 18, 25, 30]
bono: 8
penalizacion: 3