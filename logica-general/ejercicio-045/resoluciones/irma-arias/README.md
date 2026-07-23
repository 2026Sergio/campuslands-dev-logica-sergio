
# Reto 045: Ordenamiento de Prioridades - Taller Mecánico

## Como pensé el problema
Primero identifiqué que un taller mecánico no atiende por orden de llegada estricto, sino evaluando la criticidad del daño (gravedad), el tipo de servicio y, finalmente, el orden de llegada en caso de empate.

## Qué reglas apliqué
1. **Gravedad descendente:** Los vehículos con mayor nivel de daño se ubican al inicio de la cola.
2. **Tipo de servicio crítico:** A igual gravedad, los casos catalogados como "urgente" se atienden antes.
3. **Orden de llegada (FIFO):** Si coinciden en gravedad y tipo, se respeta quién llegó primero.

## Cómo ejecutar o revisar tu solución
1. Asegúrate de tener Node.js instalado.
2. Abre tu terminal en la carpeta del proyecto.
3. Ejecuta el comando:
   ```bash
   node irma-arias.js