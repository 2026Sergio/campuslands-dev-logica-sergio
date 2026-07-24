# Plantilla de solucion

## Analisis

- Entrada: 
  - `participantes`: Arreglo con los valores numéricos correspondientes a pesos moleculares o concentraciones en fórmulas químicas.
  - `bono`: Valor de ajuste positivo a sumar.
  - `penalizacion`: Valor de ajuste negativo a restar.

- Proceso: 
  1. Validar que la lista de participantes y mediciones químicas no esté vacía.
  2. Calcular el valor base promediando los elementos del arreglo.
  3. Aplicar las validaciones numéricas sumando el bono y restando la penalización.
  4. Clasificar el resultado según los rangos establecidos de pureza o rendimiento.

- Salida: 
  - `puntaje_final`: Resultado numérico ajustado.
  - `clasificacion`: Categoría obtenida (ej. "competitivo" o "estandar").
  - `explicacion`: Detalle de cómo se aplicaron las operaciones matemáticas.

## Reglas identificadas

1. **Promedio Base**: Se calcula la media aritmética de los valores de entrada.
2. **Ajuste Numérico**: Se suma el bono y se resta la penalización al promedio.
3. **Validación de Rangos**: Se verifica que el resultado cumpla con los límites lógicos de las fórmulas químicas.

## Pruebas

### Caso normal

Entrada:
```javascript
{
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3
}