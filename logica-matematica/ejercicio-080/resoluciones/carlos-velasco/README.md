# Logica matematica 080 - sistema de simulación financiera de ventas para comida urbana

## Motor de Simulación de Ingresos, Costos y Proyección de Clientes

Este script simula el rendimiento financiero y operativo de un puesto de comida urbana a lo largo de un período determinado de días, aplicando fórmulas matemáticas para calcular ingresos, costos operativos, beneficios diarios y acumulados, junto con una fluctuación orgánica en la base de clientes.

* **Descripción del proceso:**
* **Validación de Parámetros**: Comprueba que los días de simulación, el precio base y el costo de insumos posean valores lógicos y válidos, retornando un error en caso de anomalías.
* **Inicialización de Variables**: Configura el arreglo para el historial diario, el acumulador de beneficios en cero y la base de clientes actuales.
* **Simulación por Ciclos (Bucle Diario)**: Itera durante cada día del período de simulación calculando:
* **Ingreso Diario**: Producto de los clientes actuales por el precio base.
* **Costo Diario**: Producto de los clientes actuales por el costo de insumos.
* **Beneficio Diario**: Diferencia entre los ingresos y los costos diarios.


* **Acumulación y Registro**: Suma el beneficio diario al total acumulado y registra un objeto con el detalle del día en el historial.
* **Fluctuación Orgánica de Clientes**: Modifica la cantidad de clientes diarios según una regla de variación (aumenta o disminuye alternadamente) aplicando un límite mínimo de seguridad (`5` clientes).
* **Retorno del Reporte**: Devuelve un resumen consolidado con los días simulados, el beneficio total y el historial completo.


* **Tecnologías:**
* JavaScript (bucles iterativos, control condicional ternario, manipulación de arreglos con `push`, redondeo numérico con `toFixed`).



---

### Explicación técnica

1. **Modelado Financiero Iterativo**: Permite proyectar escenarios económicos dinámicos multiplicando variables operativas base y simulando la respuesta de la demanda en el tiempo.
2. **Control de Límites Operativos**: El manejo del caso borde para la base de clientes evita caídas a valores negativos o irracionales, manteniendo la simulación dentro de umbrales comerciales reales.

### Lógica del Código

```javascript
const simularVentasComidaUrbana = (precioBase, costoInsumos, clientesIniciales, diasSimulacion) => {
    // 1. Validar parámetros de entrada
    if (diasSimulacion <= 0 || precioBase <= 0 || costoInsumos < 0) {
        return { error: "Los valores de entrada para la simulación son inválidos." };
    }

    let historialDiario = [];
    let beneficioAcumulado = 0;
    let clientesActuales = clientesIniciales;

    // 2. Simular el comportamiento financiero día a día
    for (let dia = 1; dia <= diasSimulacion; dia++) {
        const ingresoDiario = clientesActuales * precioBase;
        const costoDiario = clientesActuales * costoInsumos;
        const beneficioDiario = ingresoDiario - costoDiario;

        beneficioAcumulado += beneficioDiario;

        historialDiario.push({
            dia: dia,
            clientes: clientesActuales,
            beneficio: parseFloat(beneficioDiario.toFixed(2))
        });

        // Simular variación orgánica de clientes
        clientesActuales += (dia % 2 === 0 ? 5 : -2);
        if (clientesActuales < 5) clientesActuales = 5; // Mínimo de clientes
    }

    // 3. Retornar el reporte financiero consolidado
    return {
        dias_simulados: diasSimulacion,
        beneficio_total_acumulado: parseFloat(beneficioAcumulado.toFixed(2)),
        historial: historialDiario,
        explicacion: `Se simuló el rendimiento financiero del puesto de comida urbana durante ${diasSimulacion} días aplicando fórmulas de ingresos y costos.`
    };
};

```

### Salida Esperada

```json
{
  "dias_simulados": 5,
  "beneficio_total_acumulado": 1050,
  "historial": [
    { "dia": 1, "clientes": 30, "beneficio": 180 },
    { "dia": 2, "clientes": 28, "beneficio": 168 },
    { "dia": 3, "clientes": 33, "beneficio": 198 },
    { "dia": 4, "clientes": 31, "beneficio": 186 },
    { "dia": 5, "clientes": 36, "beneficio": 216 }
  ],
  "explicacion": "Se simuló el rendimiento financiero del puesto de comida urbana durante 5 días aplicando fórmulas de ingresos y costos."
}
{
  "dias_simulados": 3,
  "beneficio_total_acumulado": 180,
  "historial": [
    { "dia": 1, "clientes": 10, "beneficio": 55 },
    { "dia": 2, "clientes": 8, "beneficio": 44 },
    { "dia": 3, "clientes": 13, "beneficio": 71.5 }
  ],
  "explicacion": "Se simuló el rendimiento financiero del puesto de comida urbana durante 3 días aplicando fórmulas de ingresos y costos."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-080/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco