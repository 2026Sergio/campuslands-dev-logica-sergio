# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`catalogo`) que contiene los modelos de autos hiperdeportivos con sus especificaciones, y un texto (`modeloBuscado`) que representa el término a buscar.
* **Proceso**: Validación de existencia y tipo de datos tanto del catálogo como del término de búsqueda, normalización del texto de entrada y de los elementos del catálogo (conversión a minúsculas y eliminación de espacios en blanco), ejecución de una búsqueda exacta mediante el método `find`, y estructuración del reporte de éxito o ausencia.
* **Salida**: Un objeto que detalla si fue `encontrado`, el `detalle_auto` o un `mensaje` de no registro, junto con una `explicacion` (o un objeto con un mensaje de `error` si los parámetros de entrada no son válidos).

## Reglas identificadas

1. **Validación de Integridad del Catálogo y Parámetros**: El catálogo debe ser obligatoriamente un arreglo válido no vacío, y el modelo buscado debe ser una cadena de texto utilizable.
2. **Normalización para Coincidencias Robustas**: Tanto la consulta como los nombres registrados en el catálogo deben normalizarse mediante `toLowerCase()` y `trim()` para evitar fallos por mayúsculas o espacios sobrantes.
3. **Manejo de Ausencia de Elementos**: Si el método de búsqueda no encuentra ninguna coincidencia, el sistema debe retornar un objeto indicando explícitamente que el vehículo no está registrado.

## Pruebas

### Caso normal

* **Entrada**: `catalogo = [Bugatti Chiron, Koenigsegg Jesko, Rimac Nevera]`, `modeloBuscado = "Koenigsegg Jesko"`
* **Resultado esperado**: `{ encontrado: true, detalle_auto: { modelo: "Koenigsegg Jesko", caballosDeFuerza: 1600, velocidadMaxKmh: 480 }, explicacion: "Se aplicó una búsqueda exacta por nombre de modelo dentro del catálogo de hiperdeportivos siguiendo las reglas de la lógica general." }`

### Caso borde

* **Entrada**: `catalogo = [Bugatti Chiron, Koenigsegg Jesko, Rimac Nevera]`, `modeloBuscado = "Ferrari F40"`
* **Resultado esperado**: `{ encontrado: false, modelo_buscado: "Ferrari F40", mensaje: "El vehículo hiperdeportivo no se encuentra registrado en el catálogo actual." }`

## Explicacion final

La solución funciona porque implementa un proceso de búsqueda robusto y defensivo. Primero, valida estrictamente las entradas para prevenir fallos de ejecución. Luego, normaliza los textos eliminando diferencias tipográficas superficiales (como mayúsculas o espacios extra), lo que garantiza una comparación limpia y precisa. Finalmente, utiliza funciones declarativas de arreglos para localizar el elemento y entrega una respuesta estructurada tanto para los casos de éxito como para los de ausencia.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de normalización de cadenas**: Asegúrate de aplicar transformaciones uniformes (`toLowerCase` y `trim`) tanto al dato de entrada como a los elementos de tu fuente de búsqueda para evitar falsos negativos causados por formato tipográfico.