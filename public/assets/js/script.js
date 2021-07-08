function detectar_msj_para_mi(msj){
	var div1 = document.getElementById("btn_enviar_msj_para_mi");
div1.href="https://api.whatsapp.com/send?phone=16188470531&text="+msj.value;
}

function detectar_dom(){
	var enlace_de_llamado="";
	var URLdomain = window.location.host;
	switch(URLdomain){
		case 'yosoy.mosquedacordova.com': enlace_de_llamado="https://api.whatsapp.com/send?phone=16188470531&text=Hola%20Mosqueda%20C%C3%B3rdova%2C%20me%20interesa%20tu%20trabajo%2C%20%C2%BFpuedes%20ayudarme%3F%20gracias.";
		break;
		case 'el.mosquedacordova.com': enlace_de_llamado="https://api.whatsapp.com/send?phone=16188470531&text=Hola%20amigo%20Mosqueda%2C%20me%20interesa%20tu%20trabajo%2C%20%C2%BFpuedes%20ayudarme%3F%20gracias.";
		break;
		case 'yo.mosquedacordova.com': enlace_de_llamado="https://api.whatsapp.com/send?phone=16188470531&text=Hola%20Isaac%20Mosqueda%2C%20me%20interesa%20tu%20trabajo%2C%20%C2%BFpuedes%20ayudarme%3F%20gracias.";
		break;
		default: enlace_de_llamado="https://api.whatsapp.com/send?phone=16188470531&text=Hola%20Mosqueda%20C%C3%B3rdova%2C%20me%20interesan%20tus%20servicios%2C%20%C2%BFpuedes%20ayudarme%3F%20gracias.";
	}
	document.getElementById("enlace_1").href=enlace_de_llamado;
}
detectar_dom();