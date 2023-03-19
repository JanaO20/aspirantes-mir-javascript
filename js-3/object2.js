let persona = {
    nombre: "Janna",
    edad: 23,
    ciudad: "Bogotá",
    profesion: "Bailarina",
    hobbies: ["leer", "bailar", "ejercitar"]

};
function presentacion (persona) {
  return persona.nombre + ", " + persona.edad + ", " + persona.profesion;
}; 
let mensaje = presentacion(persona);

for ( var i= 0; i < persona["hobbies"].length; i++){
console.log(persona['hobbies'][i]); 
};

console.log (persona);
console.log(persona ["hobbies"]);
console.log (mensaje);
