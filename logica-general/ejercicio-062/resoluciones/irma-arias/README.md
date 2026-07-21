
# Ejercicio 062 - Validación de Datos (Ranking de Fútbol Sala)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que un sistema de validación de datos actúa como una barrera de seguridad lógica. Antes de procesar estadísticas o construir un ranking deportivo (fútbol sala), es imperativo someter cada atributo a filtros de tipo de dato, rangos numéricos permitidos y consistencia general para evitar fallos en cálculos posteriores.

## 2. Reglas aplicadas
* **Validación inicial de estructura:** Comprobar que la colección recibida sea un arreglo con elementos y no esté vacía.
* **Integridad de cadenas:** Verificar que el nombre del equipo sea un texto válido y no una cadena vacía.
* **Restricciones numéricas y de estado:** Rechazar puntajes o goles negativos, valores no numéricos y equipos cuyo estatus administrativo no esté activo.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js