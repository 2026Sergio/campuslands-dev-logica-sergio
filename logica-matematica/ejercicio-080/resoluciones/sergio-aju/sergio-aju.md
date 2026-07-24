# Plantilla de solucion

## Analisis

- Entrada: 
  - `participantes`: Arreglo con los valores numéricos correspondientes a ventas o tiempos de preparación en el puesto de comida urbana.
  - `bono`: Valor de ajuste positivo a sumar por eficiencia.
  - `penalizacion`: Valor de ajuste negativo a restar por retrasos.

- Proceso: 
  1. Validar que la lista de participantes y mediciones de comida urbana no esté vacía.
  2. Calcular el valor base promediando los elementos del arreglo.
  3. Aplicar las simulaciones con fórmulas sumando el bono y restando la penalización.
  4. Clasificar el resultado según los rangos establecidos de rendimiento del negocio.

- Salida: 
  - `puntaje_final`: Resultado numérico ajustado.
  - `clasificacion`: Categoría obtenida (ej. "competitivo" o "estandar").
  - `explicacion`: Detalle de cómo se aplicaron las operaciones matemáticas de simulación.

## Reglas identificadas

1. **Promedio Base**: Se calcula la media aritmética de los valores de entrada de los puestos de comida urbana.
2. **Ajuste por Fórmulas**: Se suma el bono y se resta la penalización al promedio simulado.
3. **Validación de Rangos**: Se verifica que el resultado cumpla con los límites lógicos establecidos para el reto.

## Pruebas

### Caso normal

Entrada:
```javascript
{
  participantes: [12, 18, 25, 30],
  bono: 8,
  penalizacion: 3
}