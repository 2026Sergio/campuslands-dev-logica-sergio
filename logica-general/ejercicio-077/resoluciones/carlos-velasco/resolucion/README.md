# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `datosModelo` que contiene las propiedades booleanas `zonaSismica`, `presupuestoAlto` y `esExterior`.
* **Proceso**: Desestructuración de los parámetros del modelo, evaluación de múltiples condiciones combinadas mediante una tabla de decisión en cascada (`if-else if`), y selección del material arquitectónico y recomendación técnica adecuada.
* **Salida**: Un objeto que detalla el `material_seleccionado` y un `diagnostico` técnico del proyecto.

## Reglas identificadas

1. **Exteriores en Zona Sísmica**: Si el modelo se ubica en una zona sísmica y es un espacio exterior, se asigna obligatoriamente Hormigón Armado Reforzado.
2. **Exteriores Premium sin Riesgo**: Si el espacio es exterior, no hay riesgo sísmico y se cuenta con presupuesto alto, se selecciona Vidrio Templado Estructural.
3. **Interiores en Zona Sísmica**: Si se trata de un espacio interior ubicado en una zona sísmica, se requiere Acero Estructural Flexible para soporte interno.

## Pruebas

### Caso normal

* **Entrada**: `{ zonaSismica: true, presupuestoAlto: true, esExterior: true }`
* **Resultado esperado**: `{ material_seleccionado: "Hormigón Armado Reforzado", diagnostico: "Alta resistencia requerida para exteriores en zona sísmica." }`

### Caso borde

* **Entrada**: `{ zonaSismica: false, presupuestoAlto: false, esExterior: false }`
* **Resultado esperado**: `{ material_seleccionado: "Paneles de Yeso / Madera Liviana", diagnostico: "Suficiente para interiores estándar sin riesgos sísmicos altos." }`

## Explicacion final

La solución funciona porque implementa con precisión una tabla de decisión lógica estructurada en una cadena de condiciones mutuamente excluyentes. Al desestructurar las propiedades del objeto de entrada, el código evalúa de manera limpia combinaciones complejas de variables (como ubicación, presupuesto y riesgos geográficos) asegurando que cada proyecto reciba una recomendación técnica y un material específico sin caer en ambigüedades.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Validación de reglas cruzadas**: Comprueba de forma independiente que los escenarios con múltiples verdaderos (como zona sísmica y exterior) coincidan exactamente con la primera condición evaluada en la estructura condicional.