# Logica general 076 - sistema de cálculo de presupuestos y descuentos para animación

## Motor de Presupuestos y Aplicación de Descuentos

Este script automatiza la generación de cotizaciones para proyectos de animación 3D, calculando el costo total basado en las horas de render y aplicando una estructura escalonada de descuentos por volumen de horas y beneficios por membresía de socio.

* **Descripción del proceso:**
* **Evaluación de Volumen**: Determina un porcentaje de descuento base según las `horasRender` contratadas:
* Más de 50 horas otorgan un **20%** de descuento.
* Entre 20 y 50 horas otorgan un **10%** de descuento.
* Menos de 20 horas no reciben descuento por volumen.


* **Bonificación por Socio**: Si el cliente `esSocio` es verdadero, se acumula un **5%** adicional al porcentaje de descuento existente.
* **Cálculo Financiero**:
* Obtiene el `subtotal` multiplicando el costo base por hora por el total de horas de render.
* Calcula el monto monetario a deducir aplicando el porcentaje total de descuento.
* Determina el `total_a_pagar` restando el descuento del subtotal.


* **Normalización de Reporte**: Redondea los valores monetarios a dos decimales y retorna un objeto detallando el desglose financiero de la cotización.


* **Tecnologías:**
* JavaScript (estructuras condicionales anidadas, operaciones aritméticas porcentuales, manipulación de formato numérico).



---

### Explicación técnica

1. **Acumulación de Beneficios**: La lógica permite sumar el descuento corporativo por volumen con la bonificación por membresía (`descuento += 0.05`), reflejando una ventaja comercial combinada de forma limpia.
2. **Precisión Monetaria**: El uso de métodos de redondeo numérico previene desvíos en los centavos derivados de operaciones con puntos flotantes, asegurando totales claros y transparentes para la facturación.

### Lógica del Código

```javascript
const calcularPresupuestoAnimacion = (costoBase, horasRender, esSocio) => {
    let descuento = 0;

    // 1. Evaluar descuento escalonado por horas de render
    if (horasRender > 50) {
        descuento = 0.20; // 20% de descuento
    } else if (horasRender >= 20) {
        descuento = 0.10; // 10% de descuento
    }

    // 2. Sumar descuento adicional si el cliente es socio
    if (esSocio) {
        descuento += 0.05; // 5% extra
    }

    // 3. Procesar cálculos financieros
    const subtotal = costoBase * horasRender;
    const montoDescuento = subtotal * descuento;
    const totalFinal = subtotal - montoDescuento;

    // 4. Retornar reporte detallado del presupuesto
    return {
        subtotal: parseFloat(subtotal.toFixed(2)),
        porcentaje_descuento: `${descuento * 100}%`,
        total_a_pagar: parseFloat(totalFinal.toFixed(2)),
        explicacion: `Se aplicó un descuento total del ${descuento * 100}% basado en ${horasRender} horas de render y estatus de socio.`
    };
};

```

### Salida Esperada

```json
{
  "subtotal": 900,
  "porcentaje_descuento": "25%",
  "total_a_pagar": 675,
  "explicacion": "Se aplicó un descuento total del 25% basado en 60 horas de render y estatus de socio."
}
{
  "subtotal": 200,
  "porcentaje_descuento": "0%",
  "total_a_pagar": 200,
  "explicacion": "Se aplicó un descuento total del 0% basado en 10 horas de render y estatus de socio."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-076/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco