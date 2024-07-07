//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”

let bellisimo = prompt("¿Hola, Eres bellisimo/a?: contesta:  si ó no ");

if (bellisimo == "si"){
    alert("Ciertamente");
    }else if (bellisimo == "no"){
        alert("No te creo")
    }

//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let numero = prompt("¿Hola, escribe un número:");

function numeroDivisible(numero){
    return numero 
    }

    if(numero %2 == 0){
        alert( "número " + numero + " es divisible entre 2")
    }else if(numero %2 == 1){
        alert( "número " + numero + " no es divisible entre 2")
    }

//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

    let espar = prompt("¿Hola, dame un número par:");

    function esPar(espar){
        return espar 
        }

        if(espar %2 == 0){
            alert( "correcto " + espar + " es un número par")
        }else if(espar %2 == 1){
            alert( "ERROR " + espar + " es un número IMPAR")
        }
//4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
            
let numerocliente = prompt("Bienvenido, escribe tu número de cliente:");

function sorteo(numerocliente){
return numerocliente
}
if(numerocliente == 1000){
    alert("Ganaste un premio")
}else if(numerocliente != 1000)
    alert("Lo sentimos, sigue participando")

//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.   

let edadPadre = prompt(" ¿la edad de tu padre es?:")
let edadMadre = prompt("¿La edad de tu madres es?:")

function menor(edadpadre, edadmadre){
return edadPadre;
return edadMadre;
}

if(edadPadre < edadMadre){

    console.log(" tu padre es menor que tu madre, tu padre tiene " + edadPadre + " tu madre tiene " + edadMadre)
}

//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let numero1 = Number(prompt("escribe un número del 20 al 25"));
let numero2 = Number(prompt("escribe otro número del 20 al 25"));
let numero3 = Number(prompt("escribe otro número del 20 al 25"));

function numeromayor(uno, dos, tres){
    return numero1;
    return numero2;
    return numero3;
}

if(numero1 >= numero2 && numero1 >= numero3){
    document.write("el número mayor es #" + numero1);
}else if(numero2>=numero1 && numero2 >=numero3){document.write("el número mayor es 3" + numero2);}
    else if(numero3>=numero1 && numero3>=numero2){document.write("el número mayor es #" + numero3)
}

//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let dia = prompt("escribe un día de la semana: ")

function diaSemana(lunes, martes, miercoles, jueves, viernes, sabado, domingo){
return diaSemana;

}
if(dia == "lunes"){
    document.write("Que tengas una buen inicio de semana en tu trabajo");
}else if(dia == "viernes"){document.write("Que tengas muy buen fin de semana, nos vemos el Lunes")}else if(dia == "sabado"){document.write("Disfruta tu día libre")}else if(dia == "domingo"){document.write("Disfruta el Domingo en Familia")}else if(dia == "martes" || "miercoles" || "jueves"){document.write("Buen dia de labores")}

//8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.



let calificacion = prompt("Dame la calificación de tu tarea, debe ser entre 0 a 10");

function rango(calificacion){
    return calificacion;
}

if(calificacion >= 0 && calificacion <= 10 ){console.log( + calificacion + " esta en el rango")} else{alert("ERROR, Calificación fuera de rango 0 a 10")}

function valuacion(calificacion){
    return calificacion
}
if(calificacion >=0 && calificacion<= 5 ){alert( "Calificacion: "+calificacion + " Es reprobado")}else if (calificacion >=6 & calificacion <=8 ){alert("Tu Calificación: " + calificacion +  " Regular")}
else if (calificacion >=9 & calificacion <=10 ){alert("Tu Calificación: " + calificacion +  " Es Excelente")}

// Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
//El helado sin topping cuesta 50 MXN.
//El topping de oreo cuesta 10 MXN.
//El topping de KitKat cuesta 15 MXN.
//El topping de brownie cuesta 20 MXN.
//En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

document.write('Bienvenido a la mejor Heladeria del Rumbo, "Helados Amilado" Nuestro menú: Solo helado: $50.00, agrega tus toppings favoritos: Oreo $10.00 / KitKat $15.00 / Brownie $20.00')

alert('Bienvenido a la mejor Heladeria del Rumbo, "Helados Amilado" Nuestro menú: Solo helado: $50.00, agrega tus toppings favoritos: Oreo $10.00 / KitKat $15.00 / Brownie $20.00 / SELECCIONA TU # DE COMBO: 1=helado 2=helado + oreo/ 3=helado + kitkat / 4=helado+brownie / 5=helado + oreo + kitkat / 6= helado oreo + kitkat + brownie')

let combo = Number(prompt("Indicanos tu combo: 1,2,3,4,5,6 "))

const helado = 50
const oreo = 10
const kitkat = 15
const brownie = 20
let combo1 =(helado)
let combo2 =(helado + oreo)
let combo3 =(helado + kitkat)
let combo4 =(helado + brownie)
let combo5 =(helado + oreo + kitkat)
let combo6 =(helado + oreo + kitkat + brownie)


function calculo(helado, oreo, kitkat, brownie){
return combo
}

if(combo == 1){alert(`Su cuenta es de \$${combo1}.00`)
}else if(combo == 2){alert("Su cuenta es de $" + combo2 +".00")}else if(combo == 3){alert("Su cuenta es de $" + combo3 +".00")}else if(combo == 4){alert("Su cuenta es de $" + combo4 +".00")}else if(combo == 5){alert("Su cuenta es de $" + combo5 +".00")}else if(combo == 6){alert("Su cuenta es de $" + combo6 +".00")}else (alert("no tenemos este topping, lo sentimos.  El precio del helado sin ningún topping es de $" + combo1 +".00"))


//10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
/*El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
    Carrera $3999 MXN
    Master: $2999 MXN
    Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
    Beca Facebook: 20% de descuento.
    Beca Google: 15% de descuento.
    Beca Jesua: 50% de descuento.
    Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
    Course: 2 meses
    Carrera 6 meses
    Master: 12 meses */



alert('Gracias por visitaros en tu proxima escuela de desarrollo  de aplicaciones, estamos proximos a iniciar nuevos cursos:  Course / Carrera /Master')

let curso = prompt("Selecciona el curso de tu interés: course, carrea, master");

let descuento =prompt("seleccona cual Beca tienes si es que cuentas con ella: facebook, google, jesua, ninguna")


let course = 9998
let carrera = 23994
let master  = 35988
let facebook = 20
let google = 15
let jesua = 50
let ninguna = 0


function courseFacebook(course, facebook){
    return course * facebook;
}

function courseGoogle(course, google){
    return course * carrera;
}
function courseJesua(course, jesua){
    return course * jesua
}

if(curso == "course" && descuento == "facebook"){
    alert("tu pago mensual es de " + course /2 + ".00");
    alert("tu descuento es de $" + course * facebook / 100);
    alert("tu inversion total es de $"  +(course - (course * facebook/100)));
    alert("tu pago mensual con descuento es de $ " + ((course - ((course * facebook/100)))/2));
     } else if(curso == "course" && descuento == "google"){
        alert("tu pago mensual es de " + course /2 + ".00");
        alert("tu descuento es de $" + course * google / 100);
        alert("tu inversion total es de $"  +(course - (course * google/100)));
        alert("tu pago mensual con descuento es de $ " + ((course - ((course * google/100)))/2));
     }else if(curso == "course" && descuento == "jesua"){
        alert("tu pago mensual es de " + course /2 + ".00");
        alert("tu descuento es de $" + course * jesua / 100);
        alert("tu inversion total es de $"  +(course - (course * jesua/100)));
        alert("tu pago mensual con descuento es de $ " + ((course - ((course * jesua/100)))/2));
     }else if(curso == "course" && descuento == "ninguna"){
        alert("tu pago mensual es de " + course /2 + ".00");
        alert("tu descuento es de $" + course * ninguna / 100);
        alert("tu inversion total es de $"  +(course - (course * ninguna/100)));
        alert("tu pago mensual con descuento es de $ " + ((course - ((course * ninguna/100)))/2));
     }else if(curso == "carrera" && descuento == "facebook"){
        alert("tu pago mensual es de " + carrera /6 + ".00");
        alert("tu descuento es de $" + carrera * facebook/ 100);
        alert("tu inversion total es de $"  +(carrera - (carrera * facebook/100)));
        alert("tu pago mensual con descuento es de $ " + ((carrera - ((carrera * facebook/100)))/6));
     }else if(curso == "carrera" && descuento == "google"){
        alert("tu pago mensual es de " + carrera /6 + ".00");
        alert("tu descuento es de $" + carrera * google/ 100);
        alert("tu inversion total es de $"  +(carrera - (carrera * google/100)));
        alert("tu pago mensual con descuento es de $ " + ((carrera - ((carrera * google/100)))/6));
     }else if(curso == "carrera" && descuento == "jesua"){
        alert("tu pago mensual es de " + carrera /6 + ".00");
        alert("tu descuento es de $" + carrera * jesua/ 100);
        alert("tu inversion total es de $"  +(carrera - (carrera * jesua/100)));
        alert("tu pago mensual con descuento es de $ " + ((carrera - ((carrera * jesua/100)))/6));
     }else if(curso == "carrera" && descuento == "ninguna"){
        alert("tu pago mensual es de " + carrera /6 + ".00");
        alert("tu descuento es de $" + carrera * ninguna/ 100);
        alert("tu inversion total es de $"  +(carrera - (carrera * ninguna/100)));
        alert("tu pago mensual con descuento es de $ " + ((carrera - ((carrera * ninguna/100)))/6));
     }else if(curso == "master" && descuento == "facebook"){
        alert("tu pago mensual es de " + master /12 + ".00");
        alert("tu descuento es de $" + master * facebook/ 100);
        alert("tu inversion total es de $"  +(master - (master * facebook/100)));
        alert("tu pago mensual con descuento es de $ " + ((master - ((master * facebook/100)))/12));
     }else if(curso == "master" && descuento == "google"){
        alert("tu pago mensual es de " + master /12 + ".00");
        alert("tu descuento es de $" + master * google / 100);
        alert("tu inversion total es de $"  +(master - (master * google/100)));
        alert("tu pago mensual con descuento es de $ " + ((master - ((master * google/100)))/12));
     }else if(curso == "master" && descuento == "jesua"){
        alert("tu pago mensual es de " + master /12 + ".00");
        alert("tu descuento es de $" + master * jesua / 100);
        alert("tu inversion total es de $"  +(master - (master * jesua/100)));
        alert("tu pago mensual con descuento es de $ " + ((master - ((master * jesua/100)))/12));
     }else if(curso == "master" && descuento == "ninguna"){
        alert("tu pago mensual es de " + master /12 + ".00");
        alert("tu descuento es de $" + master * ninguna/ 100);
        alert("tu inversion total es de $"  +(master - (master * ninguna/100)));
        alert("tu pago mensual con descuento es de $ " + ((master - ((master * ninguna/100)))/12));
     }

/*11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
Entregables*/

alert("Bienvenido a tu departamento de viaticos");

let unidad = prompt("¿que unidad utilizas: moto, coche, autobus");
let distancia = prompt("¿Cual es la distancia de tu recorrido en Km ?");

let moto = .10
let coche = .20
let autobus = .50
let distanciamenor = 5
let distanciamayor = 10

function motoCicleta(distancia, unidad){
    return distancia * unidad;
}


if(unidad == "moto" && distancia <= 100 ){
    alert("total a pagar $ " + ((distancia * moto) + distanciamenor)   );
}else if(unidad == "moto" && distancia >= 100 ){
    alert("total a pagar $ " + ((distancia * moto) + distanciamayor)  );
}else if(unidad == "coche" && distancia <= 100 ){
    alert("total a pagar $ " + ((distancia * coche) + distanciamenor)   );
}else if(unidad == "coche" && distancia >= 100 ){
    alert("total a pagar $ " + ((distancia * coche) + distanciamayor) );
}else if(unidad == "autobus" && distancia <= 100 ){
    alert("total a pagar $ " + ((distancia * autobus) + distanciamenor)  );
}else if(unidad == "autobus" && distancia >= 100 ){
    alert("total a pagar $ " + ((distancia * autobus) + distanciamayor)  );
}