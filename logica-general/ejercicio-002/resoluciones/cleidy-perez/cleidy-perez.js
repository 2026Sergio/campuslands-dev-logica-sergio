const entrada= {
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",

}

const entradaVacio={
    items:[],
    prioridad: "baja"
};

const entredaPendientes={
    items:["aprabado", "pendiente"],
    prioridad:"media"
}

function clasficacionDePrioridad(datos){
    if(!datos || datos.itmes || datos.items.lenght ===0){
        return{
            accion:"ninguna",
            motivo:"no hay items"
        };
    }
    const {items, prioridad}=datos;

    if(prioridad=="alta" && items.incluedes("bloqueado")){
        return {
            accion: "revisar el bloqueo",
            motivo: "Debido  que se debe evitar riesgos"
        };
    }
    if(items.inclues("pendientes")){
        return {
            accion: "revisar el pendiente",
            motivo: "se atiend las tareas en espera"
        };
    }
    return{
        accion: "monitorear",
        motivo: "todos los elementos están aprobados"
    }
}

console.log(clasficacionDePrioridad(entrada));
console.log(clasficacionDePrioridad(entradaVacio));
console.log(clasficacionDePrioridad(entredaPendientes))