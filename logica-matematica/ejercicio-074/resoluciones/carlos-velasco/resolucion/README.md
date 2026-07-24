# Plantilla de solucion

## Analisis

* **Entrada**: Un string `forma` que define la geometría y un objeto `dimensiones` que contiene las propiedades necesarias (como `ancho` y `alto` para rectángulos, o `radio` para círculos).
* **Proceso**: Selección condicional de fórmulas matemáticas según la figura ingresada, cálculo del área y del perímetro (o circunferencia), y normalización de los resultados a un máximo de dos decimales.
* **Salida**: Un objeto que detalla la `forma`, el `area` calculada, el `perimetro` y una `explicacion` del proceso realizado (o un objeto con un mensaje de `error` si la forma no es soportada).

## Reglas identificadas

1. **Geometría de Rectángulo**: El área se obtiene multiplicando ancho por alto ($ancho \times alto$), y el perímetro mediante la suma de sus lados multiplicada por dos ($2 \times (ancho + alto)$).
2. **Geometría de Círculo**: El área se calcula multiplicando $\pi$ por el radio al cuadrado ($\pi \times radio^2$), y el perímetro (circunferencia) multiplicando dos por $\pi$ y por el radio ($2 \times \pi \times radio$).
3. **Manejo de Formas Desconocidas**: Si el parámetro de forma no coincide con las opciones permitidas, el sistema debe interrumpir la ejecución y retornar un mensaje de error descriptivo.

## Pruebas

### Caso normal

* **Entrada**: `"rectangulo", { ancho: 5, alto: 10 }`
* **Resultado esperado**: `{ forma: "rectangulo", area: 50, perimetro: 30, explicacion: "Se calculó el área y perímetro para un diseño de tipo rectangulo aplicando fórmulas geométricas estándar." }`

### Caso borde

* **Entrada**: `"circulo", { radio: 4 }`
* **Resultado esperado**: `{ forma: "circulo", area: 50.27, perimetro: 25.13, explicacion: "Se calculó el área y perímetro para un diseño de tipo circulo aplicando fórmulas geométricas estándar." }`

## Explicacion final

La solución funciona porque utiliza una estructura condicional clara para derivar la ejecución hacia las fórmulas matemáticas específicas de cada figura geométrica. Al aislar las operaciones dentro de bloques condicionales, se evita la contaminación de variables. Además, el uso de `toFixed(2)` junto con `parseFloat` asegura que los resultados con decimales complejos (comunes al trabajar con constantes como $\pi$) se mantengan limpios y estructurados, ofreciendo una respuesta profesional y estandarizada.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Cálculo manual (Círculo con radio 4)**:
* Área: $\pi \times 4^2 = 3.14159... \times 16 \approx 50.2655 \rightarrow 50.27$.
* Perímetro: $2 \times \pi \times 4 = 8 \times 3.14159... \approx 25.1327 \rightarrow 25.13$.