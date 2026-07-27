# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`motos`) que contiene los modelos y sus respectivos precios.
* **Proceso**: Validación de existencia del inventario, extracción de los precios mediante el método `map`, cálculo del precio máximo y mínimo usando operadores matemáticos de expansión (`Math.max` y `Math.min`), obtención del rango de precios, búsqueda del modelo más costoso, y categorización comercial basada en umbrales de dispersión.
* **Salida**: Un objeto que detalla el `precio_maximo`, el `precio_minimo`, el `rango_precios`, el `modelo_mas_caro`, la `categoria_inventario` y una `explicacion` (o un objeto con un mensaje de `error` si el inventario está vacío).

## Reglas identificadas

1. **Validación de Inventario Vacío**: Si la lista de motocicletas es nula o no contiene elementos, el sistema debe retornar un objeto de error descriptivo de inmediato.
2. **Cálculo de Dispersión Extrema**: El algoritmo debe aislar numéricamente los precios para determinar de forma exacta los límites superior e inferior, calculando la diferencia (rango) entre ambos.
3. **Clasificación Comercial por Rangos o Máximos**: El inventario se categoriza jerárquicamente en "Inventario Variado (Amplio Rango)" (rango $\ge$ 5000), "Gama Alta" (precio máximo $\ge$ 10000) o "Gama Estándar" por defecto.

## Pruebas

### Caso normal

* **Entrada**: `[ { modelo: "Yamaha MT-03", precio: 5500 }, { modelo: "Kawasaki Ninja 400", precio: 6800 }, { modelo: "Honda CB500F", precio: 6200 } ]`
* **Resultado esperado**: `{ precio_maximo: 6800, precio_minimo: 5500, rango_precios: 1300, modelo_mas_caro: "Kawasaki Ninja 400", categoria_inventario: "Gama Estándar", explicacion: "Se analizaron los rangos y valores máximos del inventario de motos para determinar la dispersión de precios y la categoría comercial." }`

### Caso borde

* **Entrada**: `[ { modelo: "Scooter 110cc", precio: 2000 } ]`
* **Resultado esperado**: `{ precio_maximo: 2000, precio_minimo: 2000, rango_precios: 0, modelo_mas_caro: "Scooter 110cc", categoria_inventario: "Gama Estándar", explicacion: "Se analizaron los rangos y valores máximos del inventario de motos para determinar la dispersión de precios y la categoría comercial." }`

## Explicacion final

La solución funciona porque realiza una transformación eficiente de los datos complejos del inventario en arreglos numéricos planos, facilitando el uso de funciones matemáticas estáticas nativas para hallar valores extremos. Al calcular la diferencia entre el máximo y el mínimo, el sistema comprende la dispersión comercial de los productos y asigna la categoría correspondiente mediante umbrales claros, manteniendo además la resiliencia en colecciones unitarias.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Extracción de límites normalizados**: Transforma siempre las propiedades numéricas de tus colecciones de objetos en arreglos planos antes de aplicar funciones de cálculo máximo o mínimo, asegurando un procesamiento matemático fluido y sin errores de tipo.