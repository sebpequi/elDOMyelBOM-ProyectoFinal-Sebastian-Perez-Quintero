// JavaScript Document
/*
Primero que todo declaramos las funciones y eventos de simple funcionamiento
del sitio web, como por ejemplo los clics para mostrar menu y el efecto de onload
*/

	//Declaración de la funcción onLoad para animar la entrada de la plataforma.
	function pageload() {
		document.getElementById("caja_sitio").style.display = "block";
		document.getElementById("caja_sitio").style.animation = "entradacaja 1.5s linear";
	}

/*
Declaramos el JSON Estudiantes para nuestra tabla
*/
var estudiantes = []
var elCodigo = document.getElementById("codigoEst").value;
var elNombre = document.getElementById("nombreEst").value;
var laNota1 = document.getElementById("nota1Est").value;
var laNota2 = document.getElementById("nota2Est").value;
/**
Vamos a declarar el siguiente proceso
1. Verificar que la info que se ingresa ya no este en otro estudiante
2. Si el estudiante ya existe, pedir confirmación para cambiar las notas
3. Si el estudiante no esta, ingresarlo en el JSON
4. Imprimir en la tabla los estudiantes ingresados en el JSON

Formato para ingresar los datos al JSON:
{"codigo":10, "nombre":"Esmeralda", "nota1":4.5, "nota2":3.9, "promedio":0}
**/



//Ahora vamos a calcular el promedio para cada estudiante
function promedioIndividual(){
	var j;
	for (j = 0; j < estudiantes.length; j++) {
		estudiantes[j].promedio = (estudiantes[j].nota1 + estudiantes[j].nota2)/2;
	}
}

//Declaramos la función para mostrar el JSON estudiantes
	function mostrar_Lista(json) {
		var i;
			imprLista = "";
		for (i = 0; i < json.length; i++) {
			imprLista += "<tr>"+"<td>"+json[i].codigo+"</td>"+"<td>"+json[i].nombre+"</td>"+"<td>"+json[i].nota1.toFixed(1)+"</td>"+"<td>"+json[i].nota2.toFixed(1)+"</td>"+"<td>"+json[i].promedio.toFixed(1)+"</td>"+"</tr>";
			document.getElementById("content_mlest").innerHTML = imprLista;
		}

	}

//Declaramos la función para mostrar el promedio de las personas
	function mostrar_promedio(json) {
		var e;
			suma = 0;

		for (e = 0; e < json.length; e++) {
			suma += json[e].nota1 + json[e].nota2;
			promedio = suma/20;
			document.getElementById("elpromedio").innerHTML = promedio.toFixed(2);

		}
	}

//Declaramos la función para hallar al mejor estudiante y felicitarlo
	function elmejor(json) {
		mejornota = 0;
		index = 0;

		for (var c = 0; c < json.length; c++) {
			if (mejornota < json[c].promedio) {
				mejornota = json[c].promedio;

				index=c;

			}
			document.getElementById("nombre_mejor").innerHTML = json[index].nombre+" que logro una nota promedio de "+mejornota;
			document.getElementById("elmejorestudiante").style.display = "block";
			document.getElementById("masesfuerzo").style.display = "none";

		}
	}

//Declaramos la función para hallar al que necesita de más esfuerzo.
	function masesfuerzo(json) {
		peornota = json[0].promedio;
		elpeorest = 0;

		for (var b = 0; b < json.length; b++) {
			if (peornota > json[b].promedio) {
				peornota = json[b].promedio;

				elpeorest=b;

			}
			document.getElementById("nombre_malo").innerHTML = json[elpeorest].nombre;
			document.getElementById("elmejorestudiante").style.display = "none";
			document.getElementById("masesfuerzo").style.display = "block";
		}

	}

//Declaramos la función para ver quienes van ganando la certificación.
	function lavanGanando(json) {
		var g;
			vanganando = "";
		for (g = 0; g < json.length; g++) {
			if (json[g].promedio >= 3.5) {
				vanganando += "<li>"+json[g].nombre+"</li>";
				document.getElementById("losganadores").innerHTML = vanganando;
			} else {
				document.getElementById("losganadores").innerHTML = "Nadie va ganando"+"<br>"+"¡ojo!";
			}

		}

	}

//Declaramos la función para mostrar los que van perdiendo la certificación
	function lavanPerdiendo(json) {
		var p;
			vanperdiendo = "";
		for (p = 0; p < json.length; p++) {
			if (json[p].promedio <= 3.4) {
				vanperdiendo += "<li>"+json[p].nombre+"</li>";
				document.getElementById("losperdedores").innerHTML = vanperdiendo;
			}

		}
	}
