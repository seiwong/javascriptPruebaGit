//desestructuracion objetos

const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima: 75
    },
    "hoy": {
        minima: 64,
        maxima:77
    },
    "manana":{
        minima:68,
        maxima:80
    }
};

const{ayer:{minima: ayerMinima,maxima: ayerMaxima}} = PRONOSTICO_LOCAL;
const maximaManana = PRONOSTICO_LOCAL.manana.maxima;

console.log(maximaManana, ayerMaxima);
/*const coordenadas ={
    x:{
        a:"hola",
        b: "soy"
    },
    y:2,
    z:3
};

const{x,y,z}=coordenadas;
const{x:{a}}= coordenadas;
console.log(a);




//operador rest

const sumar = (...args) => {
    return args.reduce ((a,b) => a+b, 0);
};

console.log(sumar(1,2,3,4));
//valor por defecto a un parametro

const incrementar= (num, valor=1) => num+valor;

console.log(incrementar(1,3), "should be 4");


//funcion flecha de varias lineas
const SUMAR = (a,b) =>{
    let num = 6;
    return a+b+num;
}

console.log(SUMAR(2,2));

//metodo concat()

const CONCATENAR = function(arreglo1, arreglo2){
    return arreglo1.concat(arreglo2);
}

const CONCATENAR = (arreglo1,arreglo2) => arreglo1.concat(arreglo2);
console.log(CONCATENAR([1,2,3],[4,5,6]));

var coleccionDeDiscos = {
    7853:{
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin", "Alive"]
        },
    5439:{
        tituloDelAlbum: "ABBA Gold",
        artista:""
    }
};

function actualizarDiscos(discos, id, propiedad, valor){
    if (valor === ""){
        delete discos[id][propiedad];
        console.log("vacio");
     } else if (propiedad === "artista"){
        console.log("consulta");
        discos[id][propiedad] =discos[id][propiedad] || [];
        console.log("agrega");
        discos[id][propiedad].push(valor);
        console.log("despues");
     }else{
        discos[id][propiedad]=valor;
     }
     }
     
console.log(actualizarDiscos(coleccionDeDiscos,5439,"artista","sei"));
console.log(coleccionDeDiscos);*/
 