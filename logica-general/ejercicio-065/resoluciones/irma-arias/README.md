
# Ejercicio 065 - Ordenamiento de Prioridades (Taller Mecánico)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que un taller mecánico requiere organizar la atención de los vehículos de manera eficiente basándose en el nivel de urgencia (prioridad alta, media o baja). Antes de ordenar, es fundamental aplicar filtros de validación para garantizar que cada orden posea datos clave como el nombre del cliente, la placa del automóvil y un tiempo de reparación estimado verídico.

## 2. Reglas aplicadas
* **Validación inicial:** Comprobar que la colección de órdenes sea un arreglo válido y no esté vacía.
* **Control de datos obligatorios:** Rechazar registros que carezcan de nombre de cliente, placa o tengan valores numéricos negativos en sus horas estimadas.
* **Criterio de ordenamiento lógico:** Asignar un peso numérico a las prioridades (alta = 1, media = 2, baja = 3) y aplicar un algoritmo de ordenamiento secuencial para estructurar la cola de trabajo del taller de forma descendente en urgencia.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js