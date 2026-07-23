# Logica matematica 074 - sistema de cálculo de área y perímetro de diseños

## Motor de Geometría Aplicada (Cálculo de Áreas y Perímetros)

Este script automatiza el cálculo de las propiedades geométricas (área y perímetro/circunferencia) de diferentes formas predeterminadas (como rectángulos y círculos), facilitando el diseño y la estimación de espacios en lienzos de tatuaje.

* **Descripción del proceso:**
* **Identificación de la Forma**: Utiliza una estructura condicional para determinar qué fórmulas aplicar según el tipo de geometría especificado (`rectangulo` o `circulo`).
* **Cálculo de Rectángulos**:
* Área: $\text{ancho} \times \text{alto}$
* Perímetro: $2 \times (\text{ancho} + \text{alto})$


* **Cálculo de Círculos**:
* Área: $\pi \times \text{radio}^2$
* Perímetro (circunferencia): $2 \times \pi \times \text{radio}$


* **Normalización de Salida**: Redondea los resultados numéricos a dos cifras decimales con `toFixed(2)` y los reconvierte a número mediante `parseFloat()`.
* **Manejo de Errores**: Retorna un objeto de error en caso de que la forma ingresada no esté contemplada en el sistema.


* **Tecnologías:**
* JavaScript (estructuras de control condicional, constantes matemáticas `Math.PI`, potencias con `Math.pow`, formato numérico).



---

### Explicación técnica

1. **Modularidad Geométrica**: El uso de bloques condicionales independientes permite aislar la lógica matemática de cada figura, facilitando la incorporación futura de nuevas formas (como triángulos o óvalos) sin alterar el funcionamiento global.
2. **Formato Estandarizado**: Al procesar operaciones con `Math.PI`, los valores decimales pueden extenderse indefinidamente. El uso combinado de `toFixed(2)` y `parseFloat` garantiza que los datos devueltos sean limpios y aptos para reportes técnicos o interfaces de usuario.

### Lógica del Código

```javascript
const calcularGeometriaTatuaje = (forma, dimensiones) => {
    let area = 0;
    let perimetro = 0;

    // 1. Seleccionar fórmulas según la forma geométrica
    if (forma === "rectangulo") {
        const { ancho, alto } = dimensiones;
        area = ancho * alto;
        perimetro = 2 * (ancho + alto);
    } else if (forma === "circulo") {
        const { radio } = dimensiones;
        area = Math.PI * Math.pow(radio, 2);
        perimetro = 2 * Math.PI * radio;
    } else {
        return { error: "Forma geométrica no soportada para el diseño de tatuaje." };
    }

    // 2. Retornar propiedades calculadas y normalizadas
    return {
        forma: forma,
        area: parseFloat(area.toFixed(2)),
        perimetro: parseFloat(perimetro.toFixed(2)),
        explicacion: `Se calculó el área y perímetro para un diseño de tipo ${forma} aplicando fórmulas geométricas estándar.`
    };
};

```

### Salida Esperada

```json
{
  "forma": "rectangulo",
  "area": 50,
  "perimetro": 30,
  "explicacion": "Se calculó el área y perímetro para un diseño de tipo rectangulo aplicando fórmulas geométricas estándar."
}
{
  "forma": "circulo",
  "area": 50.27,
  "perimetro": 25.13,
  "explicacion": "Se calculó el área y perímetro para un diseño de tipo circulo aplicando fórmulas geométricas estándar."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-074/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco