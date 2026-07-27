# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto de configuración (`mision`) que contiene los parámetros de seguridad y estado de la expedición (`energia`, `escudosActivos` e `iaAutorizada`).
* **Proceso**: Validación de existencia del objeto de misión, ejecución secuencial de validaciones paso a paso en orden estricto (primero nivel de energía frente a un umbral de 50, segundo estado de los escudos protectores, y tercero autorización de la inteligencia artificial central), registro progresivo de los eventos en una bitácora y retorno anticipado ante cualquier fallo.
* **Salida**: Un objeto que detalla si la `mision_exitosa` es verdadera o falsa, el `paso_fallido` (en caso de error), la `bitacora` con el historial de evaluaciones y una `explicacion` (o un objeto con un mensaje de `error` si los datos de la misión están vacíos).

## Reglas identificadas

1. **Paso 1 - Validación de Energía Mínima**: La nave debe contar obligatoriamente con un nivel de energía mayor o igual a 50 para aprobar el salto hiperespacial.
2. **Paso 2 - Verificación de Escudos Protectores**: Los escudos de la nave deben encontrarse activos obligatoriamente (`escudosActivos: true`) para soportar la radiación cósmica.
3. **Paso 3 - Autorización de la IA Central**: La inteligencia artificial central debe otorgar el permiso correspondiente (`iaAutorizada: true`) para autorizar el acceso al sector dimensional.

## Pruebas

### Caso normal

* **Entrada**: `{ energia: 85, escudosActivos: true, iaAutorizada: true }`
* **Resultado esperado**: `{ mision_exitosa: true, bitacora: [ { paso: 1, accion: "Verificación de energía", estado: "Aprobado" }, { paso: 2, accion: "Análisis de escudos", estado: "Aprobado" }, { paso: 3, accion: "Validación de IA central", estado: "Aprobado" } ], explicacion: "Se completaron exitosamente todos los flujos paso a paso requeridos para autorizar la expedición de ciencia ficción." }`

### Caso borde

* **Entrada**: `{ energia: 40, escudosActivos: true, iaAutorizada: true }`
* **Resultado esperado**: `{ mision_exitosa: false, paso_fallido: 1, bitacora: [ { paso: 1, accion: "Verificación de energía", estado: "Crítico" } ], explicacion: "La misión se detuvo en el paso 1: nivel de energía insuficiente para el salto hiperespacial." }`

## Explicacion final

La solución funciona porque implementa un flujo de control secuencial con interrupción anticipada (*fail-fast*). Cada paso actúa como un filtro obligatorio que evalúa las condiciones en un orden estricto, registrando de forma progresiva su estado en una bitácora dinámica. Si alguna regla de seguridad no se cumple, el algoritmo detiene inmediatamente el proceso, evitando validaciones innecesarias y devolviendo un reporte preciso sobre el punto exacto de fallo.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Prueba de escritorio para secuencias de validación**: Simula manualmente el flujo paso a paso evaluando cada compuerta condicional con diferentes combinaciones de éxito y fallo para garantizar que las interrupciones tempranas y las bitácoras devuelvan la trazabilidad esperada antes de programar.