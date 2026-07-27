# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`inventario`) que contiene las motocicletas y un objeto (`criterio`) con los parámetros de filtrado (cilindrada mínima, precio máximo y disponibilidad de stock).
* **Proceso**: Validación de existencia del inventario y del objeto de criterios, iteración mediante el método `filter` evaluando acumulativamente condiciones lógicas opcionales (cilindrada, precio y stock), y cálculo del total de elementos encontrados.
* **Salida**: Un objeto que detalla el `total_encontradas`, la lista de `motos_filtradas` y una `explicacion` (o un objeto con un mensaje de `error` si el inventario o los criterios son inválidos).

## Reglas identificadas

1. **Filtro por Cilindrada Mínima**: Si se especifica en el criterio, la motocicleta debe poseer una cilindrada mayor o igual al valor estipulado.
2. **Filtro por Precio Máximo**: Si se define un límite de precio, el costo de la moto debe ser menor o igual al monto máximo permitido.
3. **Control de Disponibilidad en Stock**: Si el filtro de disponibilidad está activado (`soloDisponibles: true`), la motocicleta debe contar obligatoriamente con un stock mayor a cero (`stock > 0`).

## Pruebas

### Caso normal

* **Entrada**: `inventario = [Yamaha MT-03, Honda Navi, Kawasaki Z400, Suzuki Gixxer 250]`, `criterio = { cilindradaMinima: 250, precioMaximo: 6000, soloDisponibles: true }`
* **Resultado esperado**: `{ total_encontradas: 1, motos_filtradas: [ { modelo: "Yamaha MT-03", cilindrada: 321, precio: 5500, stock: 4 } ], explicacion: "Se aplicaron filtros condicionales de cilindrada, precio máximo y disponibilidad de stock sobre el inventario de motos." }`

### Caso borde

* **Entrada**: `inventario = [Yamaha MT-03, Honda Navi, Kawasaki Z400, Suzuki Gixxer 250]`, `criterio = { cilindradaMinima: 600, precioMaximo: 10000, soloDisponibles: true }`
* **Resultado esperado**: `{ total_encontradas: 0, motos_filtradas: [], explicacion: "Se aplicaron filtros condicionales de cilindrada, precio máximo y disponibilidad de stock sobre el inventario de motos." }`

## Explicacion final

La solución funciona porque implementa un patrón de filtrado acumulativo y modular. Al iniciar cada iteración con una bandera booleana verdadera (`cumpleCriterio = true`) y aplicar validaciones condicionales independientes para cada regla, permite que el sistema evalúe dinámicamente solo los criterios provistos en el objeto de búsqueda. Esto asegura que el resultado contenga estrictamente los elementos que satisfacen de manera simultánea todas las restricciones deseadas sin comprometer la ejecución ante parámetros opcionales.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Evaluación modular por filtros opcionales**: Utiliza una variable de estado booleana acumulativa por cada elemento evaluado, agregando condiciones lógicas paso a paso solo si el parámetro de criterio correspondiente se encuentra definido.