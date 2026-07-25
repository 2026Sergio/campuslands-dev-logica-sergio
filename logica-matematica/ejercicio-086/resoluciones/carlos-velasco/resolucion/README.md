# Plantilla de solucion

## Analisis

* **Entrada**: Un valor numérico (`valorVelocidad`) que representa la rapidez y una cadena de texto (`unidadOrigen`) que especifica el formato métrico o inglés (`kmh` o `mph`).
* **Proceso**: Validación defensiva de los tipos de datos y rangos de entrada, normalización de la unidad de origen, aplicación de fórmulas aritméticas de conversión bidireccional usando el factor estándar ($1.60934$), clasificación del rendimiento mediante umbrales en kilómetros por hora, y redondeo numérico a dos decimales.
* **Salida**: Un objeto que detalla la `velocidad_kmh`, la `velocidad_mph`, la `categoria_rendimiento` y una `explicacion` (o un objeto con un mensaje de `error` si los parámetros son inválidos o desconocidos).

## Reglas identificadas

1. **Validación de Parámetros de Velocidad y Unidad**: La velocidad debe ser un número válido mayor o igual a cero, y la unidad de origen debe ser una cadena de texto utilizable.
2. **Conversión Aritmética Bidireccional**: Si la unidad es km/h se divide entre el factor ($1.60934$) para hallar las mph; si la unidad es mph, se multiplica por dicho factor para obtener los km/h.
3. **Clasificación por Umbrales de Rendimiento**: El hiperdeportivo se categoriza jerárquicamente en "Hiperdeportivo Extremo (Récord)" ($\ge$ 400 km/h), "Alta Velocidad" ($\ge$ 300 km/h) o "Velocidad Crucero" por debajo de ese límite.

## Pruebas

### Caso normal

* **Entrada**: `valorVelocidad = 420`, `unidadOrigen = "kmh"`
* **Resultado esperado**: `{ velocidad_kmh: 420, velocidad_mph: 261, categoria_rendimiento: "Hiperdeportivo Extremo (Récord)", explicacion: "Se realizó la conversión matemática precisa entre kilómetros por hora y millas por hora según las reglas del rendimiento del hiperdeportivo." }`

### Caso borde

* **Entrada**: `valorVelocidad = 250`, `unidadOrigen = "mph"`
* **Resultado esperado**: `{ velocidad_kmh: 402.34, velocidad_mph: 250, categoria_rendimiento: "Hiperdeportivo Extremo (Récord)", explicacion: "Se realizó la conversión matemática precisa entre kilómetros por hora y millas por hora según las reglas del rendimiento del hiperdeportivo." }`

## Explicacion final

La solución funciona porque estandariza de forma unificada los datos de entrada mediante validaciones defensivas y normalizaciones de texto. Al convertir siempre el resultado de referencia a una unidad base común (`velocidadKmh`), permite que las reglas condicionales de umbrales evalúen el rendimiento con total precisión, garantizando conversiones matemáticas exactas y reportes perfectamente estructurados sin importar si el dato original venía en millas o kilómetros.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para factores de conversión**: Realiza las operaciones aritméticas de multiplicación y división utilizando el factor exacto de conversión antes de aplicarlas en las estructuras condicionales del código.