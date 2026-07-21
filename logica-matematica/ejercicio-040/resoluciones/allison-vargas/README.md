# Plantilla de solucion - Simulaciones con Fórmulas (Comida Urbana)

## Analisis

- Entrada:
  - `pedidosPorHora`: Lista de números enteros con la cantidad de platillos vendidos en cada hora de trabajo.
  - `costoPromedioPlato`: Precio de venta promedio por cada plato de comida urbana.
- Proceso:
  - Validar que los datos ingresados correspondan a listas no vacías y montos válidos.
  - Sumar los pedidos de todas las horas para obtener el volumen total vendido.
  - Determinar la hora pico con mayor número de pedidos.
  - Multiplicar el total de platillos por el precio unitario para simular los ingresos totales.
  - Calcular el promedio de pedidos por hora y categorizar el rendimiento del negocio.
- Salida:
  - Horas simuladas, total de platillos, ingresos totales, promedio por hora, hora pico, clasificación y mensaje explicativo.

## Reglas identificadas

1. **Cálculo de ingresos:** Ingresos Totales = Total de Platos Vendidos × Costo Promedio por Plato.
2. **Promedio por hora:** Promedio = Total de Platos / Cantidad de Horas Registradas.
3. **Clasificación por demanda:**
   - Promedio mayor o igual a 20 pedidos/hora: "Alta Demanda (Puesto Exitoso / Flujo Constante)".
   - Promedio entre 10 y 19.99 pedidos/hora: "Demanda Moderada (Ventas Estables)".
   - Promedio menor a 10 pedidos/hora: "Baja Demanda (Requiere Estrategia de Ventas)".

## Pruebas

### Caso normal

Entrada:
- Pedidos por hora: `[12, 25, 30, 18, 15]`
- Costo promedio plato: `$8.5`

Resultado esperado:
- Total de platos: `100`
- Ingresos totales: `$850`
- Promedio por hora: `20`
- Hora pico: `Hora 3 con 30 pedidos`
- Clasificación: `Alta Demanda (Puesto Exitoso / Flujo Constante)`

### Caso borde

Entrada:
- Pedidos por hora: `[10]`
- Costo promedio plato: `$5.0`

Resultado esperado:
- Total de platos: `10`
- Ingresos totales: `$50`
- Promedio por hora: `10`
- Hora pico: `Hora 1 con 10 pedidos`
- Clasificación: `Demanda Moderada (Ventas Estables)`

## Explicacion final

La solución funciona porque proyecta las ventas de un puesto de comida urbana analizando hora por hora el comportamiento de los clientes. Recorre la lista de datos para acumular el total de unidades preparadas, ubicar la hora de mayor congestión y proyectar la recaudación financiera del día.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo.