# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `proyecto` que contiene las propiedades `resolucionDPI` (number), `usoComercial` (boolean), `capas` (number), `formato` (string) y `perfilColor` (string).
* **Proceso**: Evaluación independiente de múltiples normativas de calidad y negocio mediante declaraciones `if` sucesivas que acumulan incidencias en un arreglo de errores, determinando si el proyecto requiere revisión o puede ser aprobado para exportación.
* **Salida**: Un objeto que detalla el `estado_proyecto` y un arreglo de `advertencias` que lista las fallas encontradas o un mensaje de cumplimiento total.

## Reglas identificadas

1. **Restricción de Resolución Comercial**: Si un proyecto es para uso comercial, su resolución debe ser de al menos 300 DPI.
2. **Compatibilidad de Capas y Formato**: El formato JPG no es compatible con más de 50 capas debido a la pérdida de datos.
3. **Estándar de Perfil de Color**: Se exige un perfil de color CMYK para proyectos de carácter comercial e impreso.

## Pruebas

### Caso normal

* **Entrada**: `{ resolucionDPI: 300, usoComercial: true, capas: 15, formato: "PSD", perfilColor: "CMYK" }`
* **Resultado esperado**: `{ estado_proyecto: "Aprobado para exportación", advertencias: ["Cumple con todas las normativas de calidad y negocio."] }`

### Caso borde

* **Entrada**: `{ resolucionDPI: 72, usoComercial: true, capas: 60, formato: "JPG", perfilColor: "RGB" }`
* **Resultado esperado**: `{ estado_proyecto: "Revisión de reglas de negocio requerida", advertencias: ["El DPI es inferior a 300 para un proyecto de uso comercial.", "El formato JPG no soporta la cantidad de capas utilizadas sin pérdida de datos.", "Se recomienda perfil CMYK para proyectos comerciales impresos."] }`

## Explicacion final

La solución funciona mediante la técnica de acumulación de advertencias en un arreglo dinámico (`errores`). Al evaluar cada regla de negocio de forma independiente con estructuras `if` separadas, el algoritmo es capaz de detectar y reportar múltiples fallas simultáneamente en una sola ejecución. Posteriormente, el estado del proyecto se ajusta de manera automática dependiendo de si la longitud del arreglo de errores es mayor a cero, garantizando un control de calidad completo y transparente antes de cualquier exportación.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Validación de reglas cruzadas**: Comprueba manualmente que la combinación de `resolucionDPI < 300` junto con `usoComercial === true` active correctamente la primera advertencia sin interferir con las validaciones de capas o perfiles de color.