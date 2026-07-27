# Logica matematica 094 - cálculo de áreas, perímetros y costos de diseño para tatuajes

## Motor Matemático de Geometría Plana y Presupuesto de Tatuajes

Este script procesa un arreglo de objetos que representan distintas figuras geométricas que componen un diseño de tatuaje, calculando de manera iterativa el área y el perímetro de cada una. Posteriormente, integra estos valores con tarifas unitarias por centímetro cuadrado y centímetro de contorno para determinar el costo total estimado y clasificar la magnitud del trabajo artístico.

* **Descripción del proceso:**
* **Validación de Integridad Global**: Comprueba si la lista de figuras geométricas no existe, no es un arreglo o se encuentra vacía, y verifica que los costos por unidad sean de tipo numérico.
* **Iteración Geométrica (`for`)**: Recorre cada figura del diseño para identificar su tipo (rectángulo, círculo o triángulo) aplicando las fórmulas matemáticas correspondientes:
* **Rectángulo**: Área = $\text{base} \times \text{altura}$; Perímetro = $2 \times (\text{base} + \text{altura})$.
* **Círculo**: Área = $\pi \times r^2$; Perímetro = $2 \times \pi \times r$.
* **Triángulo**: Área = $\frac{\text{base} \times \text{altura}}{2}$; Perímetro = $\text{base} + \text{ladoA} + \text{ladoB}$.


* **Acumulación y Estandarización**: Suma las áreas y perímetros parciales para obtener los totales globales, estandarizando los resultados a dos decimales con `toFixed(2)` y `parseFloat`.
* **Cálculo de Costos y Clasificación**: Multiplica el área total por el costo por $\text{cm}^2$ y el perímetro total por el costo por centímetro de contorno, sumando ambos valores para obtener el presupuesto final. Además, categoriza el tamaño del tatuaje según su área acumulada:
* **Tatuaje Grande / Manga Completa**: $\ge 300\text{ cm}^2$.
* **Tatuaje Mediano**: $\ge 100\text{ cm}^2$ y $< 300\text{ cm}^2$.
* **Tatuaje Pequeño / Minimalista**: $< 100\text{ cm}^2$.


* **Retorno del Reporte**: Devuelve un objeto estructurado que detalla el área total, el perímetro total, el costo estimado, la categoría del tatuaje, el desglose por figura y la explicación del proceso.


* **Tecnologías:**
* JavaScript (ciclos iterativos `for`, funciones matemáticas del objeto `Math`, validación de tipos, redondeo y parseo numérico).



---

### Explicación técnica

1. **Modelado Geométrico Modular**: El algoritmo utiliza una estructura condicional basada en el tipo de figura para aplicar fórmulas trigonométricas y geométricas exactas, asegurando un cálculo robusto independientemente de la complejidad de la composición artística.
2. **Presupuesto Dual Integrado**: Combina de manera eficiente dos variables métricas distintas (superficie en dos dimensiones y longitud perimetral en una dimensión) para generar un presupuesto comercial realista y parametrizado por costos unitarios.

### Lógica del Código

```javascript
const calcularDimensionesTatuaje = (figurasTatuaje, costoPorCm2, costoPorCmContorno) => {
    // 1. Validar que la lista de figuras exista y sea un arreglo válido
    if (!figurasTatuaje || !Array.isArray(figurasTatuaje) || figurasTatuaje.length === 0) {
        return { error: "La lista de figuras del diseño del tatuaje está vacía o no es válida." };
    }

    // 2. Validar que los costos sean numéricos
    if (typeof costoPorCm2 !== 'number' || typeof costoPorCmContorno !== 'number') {
        return { error: "Los costos de área y perímetro no son válidos." };
    }

    let areaTotal = 0;
    let perimetroTotal = 0;
    let detalleFiguras = [];

    // 3. Iterar y calcular área y perímetro por cada figura geométrica
    for (let i = 0; i < figurasTatuaje.length; i++) {
        const figura = figurasTatuaje[i];
        let tipo = figura.tipo ? figura.tipo.toLowerCase() : "rectangulo";
        let areaFigura = 0;
        let perimetroFigura = 0;

        if (tipo === "rectangulo") {
            let base = figura.base > 0 ? figura.base : 0;
            let altura = figura.altura > 0 ? figura.altura : 0;
            areaFigura = base * altura;
            perimetroFigura = 2 * (base + altura);
        } else if (tipo === "circulo") {
            let radio = figura.radio > 0 ? figura.radio : 0;
            areaFigura = Math.PI * (radio * radio);
            perimetroFigura = 2 * Math.PI * radio;
        } else if (tipo === "triangulo") {
            let base = figura.base > 0 ? figura.base : 0;
            let altura = figura.altura > 0 ? figura.altura : 0;
            let ladoA = figura.ladoA > 0 ? figura.ladoA : base;
            let ladoB = figura.ladoB > 0 ? figura.ladoB : base;
            areaFigura = (base * altura) / 2;
            perimetroFigura = base + ladoA + ladoB;
        }

        areaTotal += areaFigura;
        perimetroTotal += perimetroFigura;

        detalleFiguras.push({
            figura_index: i + 1,
            tipo: tipo,
            area_cm2: parseFloat(areaFigura.toFixed(2)),
            perimetro_cm: parseFloat(perimetroFigura.toFixed(2))
        });
    }

    // 4. Calcular el costo total basado en área y perímetro
    const costoArea = areaTotal * costoPorCm2;
    const costoPerimetro = perimetroTotal * costoPorCmContorno;
    const costoTotalEstimado = costoArea + costoPerimetro;

    // 5. Clasificar el tamaño del tatuaje según la superficie total
    let categoriaTatuaje = "Tatuaje Pequeño / Minimalista";
    if (areaTotal >= 300) {
        categoriaTatuaje = "Tatuaje Grande / Manga Completa";
    } else if (areaTotal >= 100) {
        categoriaTatuaje = "Tatuaje Mediano";
    }

    // 6. Retornar el reporte consolidado de dimensiones y costos
    return {
        area_total_cm2: parseFloat(areaTotal.toFixed(2)),
        perimetro_total_cm: parseFloat(perimetroTotal.toFixed(2)),
        costo_total_estimado: parseFloat(costoTotalEstimado.toFixed(2)),
        categoria_tatuaje: categoriaTatuaje,
        detalle_figuras: detalleFiguras,
        explicacion: "Se calcularon las áreas y perímetros de las figuras geométricas que componen el diseño del tatuaje, aplicando tarifas por cm2 y cm de contorno según las reglas del reto."
    };
};

```

### Salida Esperada

```json
{
  "area_total_cm2": 228.54,
  "perimetro_total_cm": 81.42,
  "costo_total_estimado": 407.95,
  "categoria_tatuaje": "Tatuaje Mediano",
  "detalle_figuras": [
    {
      "figura_index": 1,
      "tipo": "rectangulo",
      "area_cm2": 150,
      "perimetro_cm": 50
    },
    {
      "figura_index": 2,
      "tipo": "circulo",
      "area_cm2": 78.54,
      "perimetro_cm": 31.42
    }
  ],
  "explicacion": "Se calcularon las áreas y perímetros de las figuras geométricas que componen el diseño del tatuaje, aplicando tarifas por cm2 y cm de contorno según las reglas del reto."
}
{
  "area_total_cm2": 4,
  "perimetro_total_cm": 8,
  "costo_total_estimado": 16,
  "categoria_tatuaje": "Tatuaje Pequeño / Minimalista",
  "detalle_figuras": [
    {
      "figura_index": 1,
      "tipo": "rectangulo",
      "area_cm2": 4,
      "perimetro_cm": 8
    }
  ],
  "explicacion": "Se calcularon las áreas y perímetros de las figuras geométricas que componen el diseño del tatuaje, aplicando tarifas por cm2 y cm de contorno según las reglas del reto."
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-094/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco