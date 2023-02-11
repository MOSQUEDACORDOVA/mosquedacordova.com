window.onload = function () {

	let ln = navigator.language || navigator.userLanguage;
	let url= 'index.html';

	if (ln == 'es-419' || ln == 'es-US' || ln == 'es' || ln == 'es' || ln == 'es-ES') {
	  
	 	console.log("Idioma:", ln);
	}
	else {
	  
		url= 'indexEN.html'; //INGLES
	 	console.log("cualquier otro idioma:", ln);
	 	window.location.replace(url);
	}
 }