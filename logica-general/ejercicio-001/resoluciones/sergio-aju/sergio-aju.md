# Resolución: Clasificación de Estados en Videojuegos Competitivos

**Autor:** 

Sergio Ajù

## Razonamiento
El problema se abordó como una jerarquía de estados. Identifiqué que el estado "bloqueado" actúa como una excepción que debe interrumpir el flujo normal.

## Reglas aplicadas
1. **Prioridad Crítica:** Si el array contiene "bloqueado", se retorna acción de desbloqueo inmediato.
2. **Prioridad Operativa:** Si no hay bloqueos, se busca procesar "pendiente".
3. **Estado Neutro:** "aprobado" se clasifica como sin acción necesaria.


