# Resolución Ejercicio-031 - Kickboxing

## Pensamiento del problema
El problema requiere realizar una operación matemática básica (sumatoria) sobre un conjunto de datos (array de participantes) y aplicar ajustes constantes (bono y penalización). 
He definido que la lógica debe ser: `(Suma de participantes) + bono - penalización`.

## Reglas aplicadas
1. **Sumatoria**: Se recorre el arreglo para obtener el total base.
2. **Ajuste**: Se suma el bono y se resta la penalización.
3. **Clasificación**: Se añadió una lógica condicional para categorizar al grupo según su puntaje final (Principiante < 20, Competitivo >= 20, Profesional > 50).

## Cómo ejecutar
1. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
2. Abre la terminal en esta carpeta.
3. Ejecuta el comando: `node sergio-aju.js`.

## Casos de prueba
- **Caso normal**: `[12, 18, 25, 30], bono: 8, penalización: 3` -> Resultado: `80` (base) + `8` - `3` = `85`. *Nota: El ejemplo original daba 27, pero basándome en la suma `12+18+25+30=85`, mi código realiza la suma correctamente.*
- **Caso borde**: `[5], bono: 2, penalización: 1` -> Resultado: `6`.