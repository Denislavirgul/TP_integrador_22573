
let cant = parseInt.document.getElementById("cantidad");
let categ = document.getElementById("categoria");

let est = parseInt.document.getElementById("estudiante");
let trai = document.getElementById("trainee");
let jun = document.getElementById("junior");
let t = document.getElementById("total");

let borr = document.getElementById("borrar");

let resum = document.getElementById("resumen");


function calculo (){
	let r;
	
	if(categ == "estudiante"){
		r = (200*80)/100;
	}else if(categ == "trainee"){
		r = (200*50)/100;
	}else (categ == "junior"){
		r = (200*15)/100;
	}
	
	r = (200 - r) * cant;
	
	document.querySelector("r").innerHTML = r;
	
}



resum.addEventListener("click",calculo);


