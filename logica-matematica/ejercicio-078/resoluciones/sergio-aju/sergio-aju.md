# Plantilla de solucion

## Analisis

- Entrada: 
  - `participantes`: Arreglo de puntajes obtenidos en las pruebas de control de calidad de soldadura.
  - `bono`: Puntos adicionales por precisión.
  - `penalizacion`: Puntos restados por defectos en el cordón de soldadura.

- Proceso: 
  1. Validar que la lista de participantes contenga elementos.
  2. Calcular el puntaje promedio base de los participantes mediante acumuladores.
  3. Normalizar el puntaje sumando el bono y restando la penalización.
  4. Determinar la clasificación del resultado final.

- Salida: 
  - `puntaje_final`: Valor numérico normalizado.
  - `clasificacion`: Categoría obtenida (ej. "competitivo" u "optimizado").
  - `explicacion`: Detalle de la aplicación del bono y la penalización sobre el promedio de soldadura.

## Reglas identificadas

1. **Cálculo de Base**: Se promedian los puntajes iniciales de los participantes de soldadura.
2. **Normalización**: Se ajusta el promedio con el bono y la penalización establecidos.
3. **Validación**: Se asegura que el arreglo no esté vacío para evitar errores de división.

## Pruebas

### Caso normal

Entrada:
```javascript
{
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3
}