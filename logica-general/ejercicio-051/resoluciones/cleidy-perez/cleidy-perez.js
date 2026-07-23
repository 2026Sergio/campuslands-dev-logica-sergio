<<<<<<< HEAD
const competidoresDePingPong=[
    {id:1, competidor: "Juan", habilidad: "agilidad", punteos: [85, 90]},
    {id:2, competidor: "Ester", habilidad: "técnica", punteos: [67, 90]},
    {id:3, competidor: "Maryori", habilidad: "reactividad", punteos:[67,89]},
    {id:4, competidor: "José", habilidad: "técnica", punteos: [56,78]}
];

function seleccionParaTorneo(competidores){
    if(!competidores || competidores.length ===0){
        console.log("No hay competidores para seleccionar al torneo");
        return;

    }

    for (let i=0; i < competidores.length; i++){
        let sumaPunteos=0;

        for(let j=0; j< competidores[i].punteos.length; j++){
            sumaPuntoe+= competidores[i].punteos[j]
        }
        let promedio = sumaPuntoe /sumaCompetidores;

        if(competidores[i].habilidad.toLowerCase()==="agilidad" && promedio >= 80){
            console.log(competidores[i].competidor+ ":Es apto para ir al torneo")
    
        }else if((competidores[i].habilidad.toLowerCase()=== "tecnica" || "reactividad") && promedio >= 70){
            console.log(competidores[i].habilidad+ ":Debe seguir practicado");
        }else[
            console.log(competidores[i].competidor+ ":No es apto para el torneo siga prácticando")
        ]
    }

}

seleccionParaTorneo(competidoresDePingPong);
=======
const equiposKickboxing =[
    {id:1, equipo: "Los lunaticos", punteo: 10 },
    {id:2, equipo: "Las estrellas", punteo: 30},
    {id:3, equipo: "Las maravillas", punteo: 43},
    {id:4, equipo: "Los campeones", punteo: 30}
];

function organizacionDeKickboxing(equipos){
    if(!equipos || equipos.length === 0){
        console.log ("No se puede organizar nada")
        return;
    }

    let punteoGeneral =0;

    for (let i = 0; i < equipos.length; i++ ){
        punteoGenera += equipos[i].punteo
    };
const organizacionDelistas= [...equipos].sort((a,b)=>{
    return a.equipo.localeCampare(b.equip)
})
    console.log("Punteo general de los equipos: ", punteoGeneral+ "pts")
    console.log("Lista ordena alfabeticamente: ", organizacionDelistas)
};

organizacionDeKickboxing(equiposKickboxing);
>>>>>>> dev
