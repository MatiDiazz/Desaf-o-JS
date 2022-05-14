/* cálculo de peso para bobinas de trefilado , según el diámetro, los metros y la densidad (Cu:8,96 o Al:2,70),*/
/*Primer ejercicio:
 function resultado(){

    let ingresarDiámetro = parseInt(prompt("Ingresar diámetro:"));
    let ingresarMetros = parseInt(prompt("Ingresar Metros:"));
    let ingresarDensidad = parseInt(prompt("Ingresar Densidad:"));
    
    let resultado = (ingresarDiámetro * ingresarDensidad * ingresarMetros)/1000 ;
    alert("kg: " + resultado);
} */

function PesoRes() {

    var A = parseInt(document.getElementById("Diámetro").value);
    var B = parseInt(document.getElementById("Metros").value);
    var C = parseInt(document.getElementById("Densidad").value);
    
    document.getElementById("peso").innerHTML = A*B*C/1000;
    
}

function ContracciónRes() {

    var X = parseInt(document.getElementById("DiámetroHot").value);
    var Y = parseInt(document.getElementById("DiámetroCold").value);
    
    document.getElementById("contracción").innerHTML = 100-(100*Y/X);

    let contracción = 10;
    contracción > 10 ? alert("Revisar") : alert("APROBADO");

}


function DDRRes() {

    var M = parseInt(document.getElementById("Matriz").value);
    var N = parseInt(document.getElementById("Niple").value);
    var K = parseInt(document.getElementById("Cable").value);
    var C = parseInt(document.getElementById("Cuerda").value);

    document.getElementById("DDr").innerHTML =  (M*M - N*N)/(K*K-C*C) ;

    let DDr = 1.5;
    DDr > 1.5 ? alert("Incorrecta Selección") : alert("Aprobado");
    
}

function limpiar() {
    document.getElementsById("kilogramos").reset();
}
function limpiar2() {
    document.getElementsById("contracciones").reset();
}
function limpiar3() {
    document.getElementsById("DDR").reset();
}


/* Lista de tareas para cargar// */
/* const listaTareas = [];

let cantidad = 8;

do{
    let Tarea = prompt("Cargar tarea");
    console.log(Tarea);
    listaTareas.push(Tarea);
} while (listaTareas.length<=cantidad); */

/* Tipos de tareas para desarrollar: */

/* const Tarea1 = "Proyecto";
const Tarea2 = "Seguridad e Higiene";
const Tarea3 = "Estandarización";
const Tarea4 = "AAMFE";
const Tarea5 = "Diseño";
const Tarea6 = "Sobreconsumo";
const Tarea7 = "Pedido de compra - SAP";
const Tarea8 = "Pedido de cotización";
const Tarea9 = "Tiempos y metodos";
const Tarea10 = "Reducción de SCRAP";
 */


/* const Tareas = ["Proyecto", "Seguridad e Higiene", "Estandarización", "AMFE", "Diseño", "Sobreconsumo", "Pedido de compra - SAP", "Pedido de cotización", "Tiempos y metodos","Reducción de SCRAP"];

console.log(Tareas);

for (let index = 0; index < 10; index++) {
    alert ("Tipo de tarea: " +Tareas[index]);
}

/* Verificación: */

/* console.log(Tareas.includes("Proyecto"));
console.log(Tareas.includes("Trabajo diarío"));
 */
 
/* MÁQUINAS DE TRABAJO: */
/* const Máquina1 = "126";
const Máquina2 = "132";
const Máquina3 = "140";
const Máquina4 = "1123";
const Máquina5 = "1125";
const Máquina6 = "615";
const Máquina7 = "617";
const Máquina8 = "618";
const Máquina9 = "414";
const Máquina10 = "237";
const Máquina11 = "238";
const Máquina12 = "1231";
const Máquina13 = "1223";
const Máquina14 = "1239";

const Maquinas = ["126", "132", "140", "1123", "1125", "615", "617","618","414","237","238","1231","1223","1239"];

Maquinas.push("416");

console.log(Maquinas);

for (let index = 0; index < 15; index++) {
    alert ("Número de máquina: " + Maquinas[index]);
} */

/* Productos: */
/* const Producto1 = "CAD";
const Producto2 = "CCD";
const Producto3 = "CADLA";
const Producto4 = "ACSR";
const Producto5 = "AACSR";
const Producto6 = "CCD/E";
const Producto7 = "CMXA";
const Producto8 = "DVXCA/PR"; */

/* const Productos = ["CAD", "CCD", "CADLA", "ACSR","AACSR","CCD/E","CMXA","DVXCA/PR"];

Productos[8] = "CADX";

console.log(Productos);

for (let index = 0; index < 8; index++) {
    alert ("Producto: " + Productos[index]);
}

 */
/* Meses del año: */
/* const Mes1 = "Enero";
const Mes2 = "Febrero";
const Mes3 = "Marzo";
const Mes4 = "Abril";
const Mes5 = "Mayo";
const Mes6 = "Junio";
const Mes7 = "Julio";
const Mes8 = "Agosto";
const Mes9 = "Septiembre";
const Mes10 = "Octubre";
const Mes11 = "Noviembre";
const Mes12 = "Diciembre"; */


/* const Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio", "Julio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ];

console.log(Meses);

for (let index = 0; index < 12; index++) {
    alert ("Mes: " + Meses[index]);
}
 */
/* TERNARIO PARA : Resistencia eléctrica que expresa sobreconsumo de conductores */
/* let sección16 = 1.91

sección16 > 1.91 ? alert("sobreconsumo") : alert("Aprobado")

let sección25 = 1.2

sección25 > 1.2 ? alert("sobreconsumo") : alert("Aprobado")

let sección35 = 0.868

sección35 > 0.868 ? alert("sobreconsumo") : alert("Aprobado")

let sección50 = 0.641

sección50 > 0.641 ? alert("sobreconsumo") : alert("Aprobado")

let sección70 = 0.443

sección70 > 0.443 ? alert("sobreconsumo") : alert("Aprobado")

let sección95 = 0.32

sección95 > 0.32 ? alert("sobreconsumo") : alert("Aprobado")

let sección120 = 0.253

sección120 > 0.253 ? alert("sobreconsumo") : alert("Aprobado")

let sección150 = 0.206

sección150 > 0.206 ? alert("sobreconsumo") : alert("Aprobado")

let sección185 = 0.164

sección185 > 0.164 ? alert("sobreconsumo") : alert("Aprobado")

let sección240 = 0.125

sección240 > 0.125 ? alert("sobreconsumo") : alert("Aprobado")

let sección300 = 0.1

sección300 > 0.1 ? alert("sobreconsumo") : alert("Aprobado")

let sección400 = 0.0778

sección400 > 0.0778 ? alert("sobreconsumo") : alert("Aprobado")

let sección500 = 0.0605

sección500 > 0.0605 ? alert("sobreconsumo") : alert("Aprobado")

let sección600 = 0.0469

sección600 > 0.0469 ? alert("sobreconsumo") : alert("Aprobado")
 */
/*Operador AND ------------------------------------------------- */

const peso = []

peso.length === 0  &&  console.log("No hay masa de cálculo!")

const numeros = [4, 77, 92, 10,3,-32,54,11]

console.log(Math.max(...numeros))

console.log(Math.min(...numeros))

function sumar (...numeros) {
    console.log(numeros)
}

sumar (4,2)

sumar(10,15,30,5)