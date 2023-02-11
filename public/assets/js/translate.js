window.onload = function () {
 //alert(window.location);
	let ln = navigator.language || navigator.userLanguage;
	let url= 'index.html'
	if (ln == 'es-419' || ln == 'es-US' || ln == 'es' || ln == 'es') {
	  console.log("español")
	  window.location.replace(url);
	}else{
		url= 'indexEN.html' //INGLES
	 	console.log("cualquier otro idioma:", ln)
	 	window.location.replace(url);
	}
 }