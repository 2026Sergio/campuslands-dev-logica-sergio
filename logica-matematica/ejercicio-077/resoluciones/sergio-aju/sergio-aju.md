# Plantilla de solucion

## Analisis

- Entrada: 
  - `participantes`: Arreglo de números que representan los puntajes de los proyectos de arquitectura 3D.
  - `bono`: Puntos adicionales a sumar.
  - `penalizacion`: Puntos a restar.

- Proceso: 
  1. Validar que la lista de participantes no esté vacía.
  2. Calcular el promedio o valor base usando acumuladores y ciclos.
  3. Aplicar bonificaciones y penalizaciones según las reglas.
  4. Determinar la clasificación del puntaje final.

- Salida: 
  - `puntaje_final`: Resultado numérico calculado.
  - `clasificacion`: Categoría del resultado (ej. "competitivo").
  - `explicacion`: Detalle de la aplicación del bono y la penalización.

## Reglas identificadas

1. **Cálculo Base**: Se toma como base el promedio de los puntajes de los participantes.
2. **Bonificación y Penalización**: Se suma el bono y se resta la penalización al valor base.
3. **Clasificación**: Si el puntaje final supera un umbral, se cataloga como competitivo.

## Pruebas

### Caso normal

Entrada:
```javascript
{
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3
}