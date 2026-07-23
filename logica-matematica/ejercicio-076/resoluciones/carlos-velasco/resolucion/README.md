# Plantilla de solucion

## Analisis

* **Entrada**: Tres parámetros numéricos y booleanos: `costoBase` (number), `horasRender` (number) y `esSocio` (boolean).
* **Proceso**: Evaluación escalonada de descuentos por volumen de horas, acumulación de una bonificación adicional por membresía de socio, cálculo del subtotal, aplicación del descuento monetario y normalización de los montos financieros a dos decimales.
* **Salida**: Un objeto que detalla el `subtotal`, el `porcentaje_descuento`, el `total_a_pagar` y una `explicacion` de la cotización.

## Reglas identificadas

1. **Descuento por Volumen (Más de 50 horas)**: Si las horas de render superan las 50, se asigna un descuento base del 20%.
2. **Descuento por Volumen (De 20 a 50 horas)**: Si las horas de render se encuentran entre 20 y 50, se asigna un descuento base del 10%.
3. **Bonificación por Membresía**: Si el cliente es socio (`esSocio` es verdadero), se incrementa un 5% adicional al porcentaje de descuento acumulado.

## Pruebas

### Caso normal

* **Entrada**: `15, 60, true` (costoBase: 15, horasRender: 60, esSocio: true)
* **Resultado esperado**: `{ subtotal: 900, porcentaje_descuento: "25%", total_a_pagar: 675, explicacion: "Se aplicó un descuento total del 25% basado en 60 horas de render y estatus de socio." }`

### Caso borde

* **Entrada**: `20, 10, false` (costoBase: 20, horasRender: 10, esSocio: false)
* **Resultado esperado**: `{ subtotal: 200, porcentaje_descuento: "0%", total_a_pagar: 200, explicacion: "Se aplicó un descuento total del 0% basado en 10 horas de render y estatus de socio." }`

## Explicacion final

La solución funciona mediante una combinación estructurada de condicionales secuenciales e incrementales. Primero, el algoritmo evalúa las horas de render para establecer un porcentaje base y, de manera independiente, verifica el estatus de socio para sumar un 5% extra si corresponde. Esta acumulación lógica garantiza que los beneficios comerciales se combinen correctamente. Posteriormente, opera con fórmulas aritméticas precisas para obtener el subtotal y descontar el monto proporcional, cerrando con un formato numérico limpio que previene errores de redondeo monetario.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Cálculo manual (15 de costo base, 60 horas, socio true)**:
* Subtotal: $15 \times 60 = 900$.
* Descuento: 20% (por más de 50 horas) + 5% (por socio) = 25% total.
* Monto de descuento: $900 \times 0.25 = 225$.
* Total a pagar: $900 - 225 = 675$.