
# Ejercicio 064 - Filtros por Condiciones (Inventario de Motos)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que un sistema de inventario comercial requiere filtros estrictos basados en condiciones para asegurar la calidad de los datos. Cada motocicleta debe ser evaluada individualmente para comprobar la veracidad de su nombre (modelo), la validez numérica de sus especificaciones (cilindraje y precio) y su estatus comercial actual antes de ser aprobada para la venta.

## 2. Reglas aplicadas
* **Validación inicial:** Comprobar que la colección recibida sea un arreglo válido y no esté vacía.
* **Integridad descriptiva:** Verificar que el modelo de la moto sea un texto válido y no una cadena vacía.
* **Filtros lógicos y numéricos:** Descartar valores negativos o nulos en cilindraje y precio, así como unidades marcadas como no disponibles.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js