# Plantilla de solucion

## Analisis

- **Entrada:** `edad` (Number) y `prefiereEfectos` (Boolean).
- **Proceso:** Uso de métodos de array (`filter` y `map`) para procesar una base de datos de películas y aplicar reglas de negocio.
- **Salida:** Objeto JSON con el reporte de películas disponibles para el perfil del usuario.

## Reglas identificadas

1. **Restricción de Edad:** El usuario solo puede ver películas cuya `edadMinima` sea menor o igual a su edad.
2. **Priorización de Estilo:** El booleano `prefiereEfectos` define el género principal de búsqueda en el catálogo.
3. **Seguridad para menores:** Usuarios menores de 13 años ven automáticamente contenido clasificado como "animado".

## Pruebas

### Caso normal

**Entrada:** `edad = 25, prefiereEfectos = true`

**Resultado esperado:** `{ totalEncontradas: 2, resultados: ["Blade Runner 2049", "Ghost in the Shell"] }`

### Caso borde

**Entrada:** `edad = 8, prefiereEfectos = false`

**Resultado esperado:** `{ totalEncontradas: 1, resultados: ["Wall-E"] }`

## Explicacion final

El código implementa un motor de búsqueda sobre una lista de objetos. Al aplicar `.filter()`, evaluamos dos condiciones simultáneamente para cada película: que la edad sea apta y que el género coincida con el gusto del usuario. Esta estructura permite que el programa sea escalable y fácil de probar.

## Sugerencia

Puedes extender esta lógica creando una función `agregarPelicula()` que permita meter nuevos elementos al catálogo dinámicamente antes de realizar la búsqueda.