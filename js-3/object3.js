let receta = {
    nombre : "sandwich",
    ingredientes : [
        {nombre: "Pan", cantidad: 2},
        {nombre: "Queso", cantidad: 1}
        ]
    };
    for (let i=0; i < receta["ingredientes"].length; i++) {
        console.log(receta["ingredientes"][0].nombre);
    };
    let ct = 0
    for (let i=0; i< receta["ingredientes"].length; i++){
        ct += receta["ingredientes"] [i]
        console.log ( receta["ingredientes"][0].cantidad + receta["ingredientes"][1].cantidad);
    }