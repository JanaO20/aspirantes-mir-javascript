let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies:["programar", "squash", "piano"],
    estatura: 1.8,
    saluda: function () {
        console.log("Hola, me llamo " + this.nombre);
        }
}
delete pedro.activo
console.log(pedro ["edad"])
console.log(pedro ["activo"])
console.log(pedro ["nombre"])
console.log(pedro ["hobbies"])
console.log(pedro ["estatura"])
pedro.saluda ()