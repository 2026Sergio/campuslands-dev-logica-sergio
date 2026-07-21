# Plantilla de solucion - Areas y perimetros (Tatuajes)

## Analisis del problema

El objetivo es calcular la superficie total ($cm^2$) que ocupará un diseño de tatuaje y la cantidad de delimitación/delineado exterior necesaria (perímetro) según la forma geométrica del diseño (rectangular o circular). A partir del área calculada, se determina la categoría del tatuaje para estimar el tiempo de sesión.

## Reglas aplicadas

1. **Validacion de datos invalidos (Caso Borde):** Si las dimensiones son menores o iguales a cero o no son válidas, la función retorna un estado `"invalido"`.
2. **Cálculo según tipo de figura:**
   - **Rectangular:** $\text{Área} = \text{base} \times \text{altura}$, $\text{Perímetro} = 2 \times (\text{base} + \text{altura})$.
   - **Circular:** $\text{Área} = \pi \times \text{radio}^2$, $\text{Perímetro} = 2 \times \pi \times \text{radio}$.
3. **Clasificacion por tamaño de superficie:**
   - **Grande:** Área mayor a $100\text{ cm}^2$.
   - **Mediano:** Área entre $50\text{ cm}^2$ y $100\text{ cm}^2$.
   - **Pequeño:** Área menor a $50\text{ cm}^2$.

## Solucion implementada

```javascript
/**
 * Ejercicio 014 - Logica Matematica: Areas y Perimetros (Tatuajes)
 */

function calcularDimensionesTatuaje(tipo, dim1, dim2 = 0) {
    // 1. Validar caso borde: dimensiones invalidas o menores/iguales a cero
    if (typeof dim1 !== 'number' || dim1 <= 0 || (tipo === 'rectangular' && (typeof dim2 !== 'number' || dim2 <= 0))) {
        return {
            area_cm2: 0,
            perimetro_cm: 0,
            clasificacion: "invalido",
            explicacion: "Las dimensiones ingresadas no son validas."
        };
    }

    let area = 0;
    let perimetro = 0;

    // 2. Aplicar formulas segun la figura geométrica
    if (tipo === 'rectangular') {
        area = dim1 * dim2;
        perimetro = 2 * (dim1 + dim2);
    } else if (tipo === 'circular') {
        area = Math.PI * Math.pow(dim1, 2);
        perimetro = 2 * Math.PI * dim1;
    } else {
        return {
            area_cm2: 0,
            perimetro_cm: 0,
            clasificacion: "invalido",
            explicacion: "El tipo de figura geometrica no es soportado."
        };
    }

    const areaRedondeada = Number(area.toFixed(2));
    const perimetroRedondeado = Number(perimetro.toFixed(2));

    // 3. Determinar categoria del tatuaje
    let clasificacion = "";
    if (areaRedondeada > 100) {
        clasificacion = "grande";
    } else if (areaRedondeada >= 50) {
        clasificacion = "mediano";
    } else {
        clasificacion = "pequeno";
    }

    return {
        area_cm2: areaRedondeada,
        perimetro_cm: perimetroRedondeado,
        clasificacion: clasificacion,
        explicacion: `Tatuaje ${tipo} con area de ${areaRedondeada} cm2 y perimetro de${perimetroRedondeado} cm.`
    };
}

// ==========================================
// PRUEBAS DE EJECUCION
// ==========================================

console.log("=== Caso Normal (Rectangular) ===");
const caso1 = calcularDimensionesTatuaje('rectangular', 10, 8);
console.log(caso1);

console.log("\n=== Caso Borde (Dimensiones Invalidas) ===");
const caso2 = calcularDimensionesTatuaje('rectangular', -5, 10);
console.log(caso2);
```

## Pruebas y Resultados

### Caso normal
- **Entrada:** `tipo: 'rectangular'`, `dim1: 10`, `dim2: 8`
- **Resultado obtenido:**
  ```json
  {
    "area_cm2": 80,
    "perimetro_cm": 36,
    "clasificacion": "mediano",
    "explicacion": "Tatuaje rectangular con area de 80 cm2 y perimetro de 36 cm."
  }
  ```

### Caso borde
- **Entrada:** `tipo: 'rectangular'`, `dim1: -5`, `dim2: 10`
- **Resultado obtenido:**
  ```json
  {
    "area_cm2": 0,
    "perimetro_cm": 0,
    "clasificacion": "invalido",
    "explicacion": "Las dimensiones ingresadas no son validas."
  }
  ```

## Como revisar la solucion

1. Navegar a `logica-matematica/ejercicio-014/resoluciones/allison-vargas/`.
2. Ejecutar con Node.js:
   ```bash
   node allison-vargas.js
   ```

## Explicacion final

Para resolver este reto calculé el área y perímetro según el tipo de figura geométrica del diseño del tatuaje. Validé que las medidas no fueran negativas ni cero y redondeé las áreas y perímetros a 2 decimales para clasificarlos de manera limpia por su tamaño.