/* 
ESTRUCTURA
------------

1) Saludo
2) Ingreso de datos personales (y asignarlos a las variables correspondientes)
3) Cotizador (ciclo con funcion dentro)
4) Mensaje de despedida

*/

// DEFINICION INICIAL DE VARIABLES
let marca;
let modelo;
let anio;
let valor;

const tarifaA = 0.0012;
const tarifaC = 0.0035; /* Las letras A, C y D son nomenclatura de seguros. No es que no exista la cobertura B, pero es raro que se use para autos.*/
const tarifaD = 0.0073;

let fin = 0;

let cobertura;
let seguir;

// DEFINICIÓN DE ARRAY
const registroDeCotiz = [];

// CONSTRUCTOR DE OBJETO (COTIZACIONES)
function Cotizacion (nombre, edad, zonaRiesgo, marca, modelo, anio, sumaAsegurada, producto, valor) {
    this.nombre = nombre;
    this.edad = edad;
    this.zonaRiesgo = zonaRiesgo;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.sumaAsegurada = sumaAsegurada;
    this.producto = producto;
    this.valor = valor;
};

// FUNCIONES

function seleccionarCobertura() {
    cobertura = prompt("¿Qué cobertura te interesa darle a tu vehículo? \n 1| Responsabilidad Civil \n 2| Terceros Completo \n 3| Todo Riesgo");

    if (cobertura == "1"){
        alert("Usted seleccionó la cobertura de 'Responsabilidad Civil'. \n Recuerde que solo cubre daños a terceros");
    } else if (cobertura == "2") {
        alert("Usted seleccionó la cobertura de 'Terceros Completo'");
    } else if (cobertura == "3") {
        alert("Usted seleccionó la cobertura de 'Todo Riesgo', la mejor cobertura para su vehículo.");
    } else {
        alert("La opcion seleccionada es incorrecta. Elija 1, 2 o 3.");
        seleccionarCobertura();
    }
}

function continuar() {
    seguir = prompt("¿Desea continuar utilizando el programa o cotizar otro vehículo? \n 1| SI \n 2| NO");
    if (seguir == 2) {
        fin = 1;
    }
}

function calcularPrima () {
    // Definición de la cobertura y aplicación de tarifa según la cobertura elegida
    let producto;
    let costo;

    if (cobertura == "1") {
        producto = "A - Responsabilidad Civil";
        costo = tarifaA;

    } else if (cobertura == "2") {
        producto = "C - Terceros Completo";
        costo = tarifaC;

    } else if (cobertura == "3") {
        producto = "D - Todo riesgo";
        costo = tarifaD;
    }

    // Construcción del objeto y pusheo al array
    cotizacion = new Cotizacion(nombre.toUpperCase(), edad, localidad.toUpperCase(), marca.toUpperCase(), modelo.toUpperCase(), anio, valor, producto, (valor*costo));
    /* console.log(cotizacion); */

    registroDeCotiz.push(cotizacion);

    // Cartel resumen de lo cotizado
    alert("Sr/a " + cotizacion.nombre + ", Edad: " + cotizacion.edad + ", Localidad: " + cotizacion.zonaRiesgo + "\n\nEl costo del seguro para su " + cotizacion.marca + " " + cotizacion.modelo + " " + cotizacion.anio + " es. \n" + cotizacion.producto + ": $" + cotizacion.valor);
    
    // Muestra del Array por consola para chequeo interno
    console.log(registroDeCotiz);
}

///////////////////////////////////////////////
/* COMIENZO DEL PROGRAMA */
///////////////////////////////////////////////

// SALUDO INICIAL
alert("Bienvenido/a al 'Cotizador de seguros'!")

// SOLICITUD DE DATOS PERSONALES
let nombre = prompt("Primero que nada ¿Cuál es tu nombre completo?");
let edad = prompt("¿Qué edad tenés?");
let localidad = prompt("¿De qué localidad sos?");

while (fin == 0) {
    let seleccion = prompt("¿En qué podemos ayudarte hoy " + nombre.toUpperCase() +"? \n 1| Cotizar un seguro \n 2| Conocer una cobertura \n 3| Salir del programa")
    if (seleccion == 1) {
        marca = prompt("¿Cual es la marca del vehículo?");
        modelo = prompt("¿Cual es el modelo?");
        anio = prompt("Año del vehículo:");
        valor = prompt("Valor del vehículo:");
        seleccionarCobertura();
        calcularPrima();
        continuar();
    } else if (seleccion == 2) {
        alert("Responsabilidad Civil (A): Cubre solo los daños provocados hacia otros vehículos o personas. \n Terceros completo (C): Incorpora además daños totales y parciales por robo o incendio del vehículo, y destrucción total por accidente \n Todo Riesgo (D): Cubre además los daños parciales por accidente al vehículo propio.");
    } else if (seleccion == 3) {
        fin = 1;
    }
}


// Cartel de revisión del último costo al salir
let despedida = prompt("¿Desea rever alguno de los costos antes de salir? \nEn caso afirmativo ingrese el nombre del modelo, caso contrario deje este casillero en blanco.")
despedida = despedida.toUpperCase()

if (despedida !="") {
    const consultaFinal = registroDeCotiz.find((el) => el.modelo == despedida);
    console.log(consultaFinal);
        
    alert("El costo del seguro para su " + consultaFinal.marca + " " + consultaFinal.modelo + " " + consultaFinal.anio + " es. \n" + consultaFinal.producto + ": $" + consultaFinal.valor);
}



alert("¡Gracias por visitarnos! Te esperamos nuevamente.")
