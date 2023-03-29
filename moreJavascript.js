//getter and setter propiedades privadas
class Libro{
    constructor(autor){
        this._autor = autor;
    }

    get autor(){
        console.log("getter");
        return this._autor;
    }

    set autor(nuevoAutor){
        console.log("setter");
        this._autor = nuevoAutor;
    }
};

var nuevoLibro = new Libro("seidy");
console.log(nuevoLibro);
nuevoLibro._autor= "pablo";
console.log(nuevoLibro);

//clase

/*class MiMascota {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
};

var perro = new MiMascota("boby", "domestico");
var gato = new MiMascota("misingo", "domestico");
console.log(perro.nombre);
console.log(gato.tipo);

class TransbordadorEspacial {
    constructor(planeta){
        this.planeta = planeta;
    }
};

var zeus = new TransbordadorEspacial("Jupiter");
var apollo = new TransbordadorEspacial("Marte");
console.log(zeus);
console.log(apollo);

//declarar funcion dentro de un objeto
const persona ={
    nombre: "Isa",
    presentarse() {
        return `"Hola mi nombre es ${this.nombre}`;
    //presentarse: function(){
    //    return `"Hola mi nombre es ${this.nombre}`;
    //}
    }
};

console.log(persona.presentarse());


// CREAR OBJETOS RAPIDO

var crearObjetos=(nombre,apellido,edad)=>{
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
};
//otra forma de escribir mas conciso

var crearObjetos = (nombre,apellido,edad) =>({nombre,apellido,edad});

console.log(crearObjetos("seidy","wong", 43));
console.log(crearObjetos("pablo","murillo",44));

//plantilla de cadena o literal
var persona = {
    nombre: "seidy",
    edad: 43
};

const SALUDO = `Hola mi nombre es ${persona.nombre} y tengo ${persona.edad} anios`;
console.log(SALUDO);

var arregloNum = [9,8,7,6,5];

function eliminaTresElementos (arreglo){
    var [ , , ,...nuevoArreglo]=arreglo;
    return nuevoArreglo;
}

console.log(eliminaTresElementos(arregloNum));

//desestructuracion operador rest
var  a;
var  b;
var arr;

[a, b, ...arr]=[1,2,3,4,5,6];

console.log(a);
console.log (b);
console.log(arr);


//desestructuracion de Objetos

[a,,,b] = [1,2,3,4];

console.log(b);

*/