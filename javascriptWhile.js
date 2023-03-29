
//funcion flecha
const sumarTres = (x) => x+3;
console.log (sumarTres(2));


let colores ={
    "verde": "#10e04b",
    "azul": "#1b50e0",
    "negro": "#000000",
    "blanco": "#ffffff"
};

Object.freeze(colores);

console.log(delete colores.verde);

 CONST
function calcularAreaCirculo(radio){
    const PI = 3.14;

    if (radio < 0){
        return undefined;
    }

    return PI * (radio **2);
}

console.log(calcularAreaCirculo(2));

operadoresTernarios
function compararNumeros(a,b){
    return a==b ? "a y b son iguales" 
        : a>b ? "a es mayor que b"
        : "b es mayor que a";
}

console.log(compararNumeros(3,7));

var contactos =[
    {
            "nombre": "Nora",
            "apellido": "Nav",
            "numero": "0543236543",
            "gustos": ["Pizza", "Programacion"]
    },
    {
            "nombre": "Harry",
            "apellido": "Potter",
            "numero": "0994372684",
            "gustos": ["Hogwarts", "Magia"]
    },
    {
            "nombre": "Sherlock",
            "apellido": "Holmes",
            "numero": "0487345643",
            "gustos": ["Casos interesantes", "Violin"]
    }
];

function buscarPerfil(nombre,propiedad){
   for(var i =0; i<contactos.length; i++){
            if (contactos[i].nombre === nombre){
                return contactos[i][propiedad] || "no se encontro la propiedad";
                
            }
            }
    return "el contacto no existe";
}

console.log(buscarPerfil("Harry","direccion"));


var miArreglo = [[1,2,3], [4,5,6],[7,8,9]];

for (var i = 0; i<miArreglo.length; i++){
    var arregloAnidado = miArreglo[i];
    console.log(miArreglo[i]);
    for(var j = 0; j<arregloAnidado.length; j++){
        console.log(arregloAnidado[j]);
    }
}


/*function contarPares(arreglo){
    var total = 0;

    for (var i=0; i<arreglo.length; i++){
        if(arreglo[i]%2==0){
            total++;
        }
    }
    return total;
}

var numeros = [1,3,5,];
console.log(contarPares(numeros));


var lenguajes = ["Javascript", "Pyhon", "Java", "C++"];

for(var i =0; i<lenguajes.length; i++){
    console.log(lenguajes[i]);
    console.log(lenguajes[i].toUpperCase());
}


var miArreglo =[];

for( var i=0; i<26; i++){
    if (i%2 == 0){
        miArreglo.push(i);
        i++;
    }else{
        i++;
    }
}

console.log(miArreglo);



var numeros = [2,3,4,5,6,7,8,9,34];

while(numeros.length>4){
    numeros.pop();
}

console.log(numeros);



 var miArreglo = [];
var i=0;
console.log(miArreglo);

while (i<10){
    miArreglo.push("seidy");
    i++;
}
console.log(miArreglo);*/