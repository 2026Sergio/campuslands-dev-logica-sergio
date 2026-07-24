# Logica general 077 - sistema de evaluación de materiales arquitectónicos mediante tablas de decisión

## Motor de Selección de Materiales por Reglas Combinadas

Este script implementa una tabla de decisión lógica para seleccionar de manera automática el material arquitectónico óptimo en modelos 3D y su respectiva recomendación técnica, basándose en múltiples variables del entorno y del proyecto (zona sísmica, presupuesto y ubicación exterior/interior).

* **Descripción del proceso:**
* **Definición de Valores por Defecto**: Inicializa el material como `"Estandar"` y la recomendación para renders conceptuales básicos.
* **Desestructuración de Parámetros**: Extrae las propiedades claves del objeto de entrada (`zonaSismica`, `presupuestoAlto`, `esExterior`).
* **Evaluación de la Tabla de Decisión**:
* **Caso 1**: Si está en zona sísmica y es exterior $\rightarrow$ **Hormigón Armado Reforzado**.
* **Caso 2**: Si no es zona sísmica, es exterior y cuenta con presupuesto alto $\rightarrow$ **Vidrio Templado Estructural**.
* **Caso 3**: Si está en zona sísmica pero es interior $\rightarrow$ **Acero Estructural Flexible**.
* **Caso Por Defecto (`else`)** $\rightarrow$ **Paneles de Yeso / Madera Liviana** para espacios interiores seguros y estándar.


* **Retorno del Dictamen**: Devuelve un objeto consolidado con el material seleccionado y el diagnóstico técnico correspondiente.


* **Tecnologías:**
* JavaScript (estructuras de control condicional en cadena `if-else if`, desestructuración de objetos, lógica booleana multivariable).



---

### Explicación técnica

1. **Modelado de Tablas de Decisión**: El uso de una estructura condicional en cascada permite implementar matrices de decisión complejas de forma limpia, donde cada ruta de código representa una combinación única de requerimientos de ingeniería.
2. **Asignación de Estado Predictivo**: Garantiza que siempre se obtenga una respuesta válida y acotada, previniendo estados nulos o indefinidos ante configuraciones de proyecto variadas.

### Lógica del Código

```javascript
const evaluarMaterialArquitectonico = (datosModelo) => {
    let tipoMaterial = "Estandar";
    let recomendacion = "Apto para renders conceptuales básicos.";

    const { zonaSismica, presupuestoAlto, esExterior } = datosModelo;

    // Tabla de decisión aplicando reglas de arquitectura 3D
    if (zonaSismica && esExterior) {
        tipoMaterial = "Hormigón Armado Reforzado";
        recomendacion = "Alta resistencia requerida para exteriores en zona sísmica.";
    } else if (!zonaSismica && esExterior && presupuestoAlto) {
        tipoMaterial = "Vidrio Templado Estructural";
        recomendacion = "Ideal para fachadas estéticas de alta gama en exteriores.";
    } else if (zonaSismica && !esExterior) {
        tipoMaterial = "Acero Estructural Flexible";
        recomendacion = "Soporte interno adecuado para interiores en zonas de movimiento.";
    } else {
        tipoMaterial = "Paneles de Yeso / Madera Liviana";
        recomendacion = "Suficiente para interiores estándar sin riesgos sísmicos altos.";
    }

    return {
        material_seleccionado: tipoMaterial,
        diagnostico: recomendacion
    };
};

```

### Salida Esperada

```json
{
  "material_seleccionado": "Hormigón Armado Reforzado",
  "diagnostico": "Alta resistencia requerida para exteriores en zona sísmica."
}
{
  "material_seleccionado": "Paneles de Yeso / Madera Liviana",
  "diagnostico": "Suficiente para interiores estándar sin riesgos sísmicos altos."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-077/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco