    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("btnDescargar").addEventListener("click", function() {
            // Ruta al archivo PDF que quieres descargar
            var archivoPDF = "mi_cv.pdf";
            
            // Crea un elemento <a> temporal para descargar el archivo
            var linkDeDescarga = document.createElement("a");
            linkDeDescarga.href = archivoPDF;
            
            // Asigna un nombre de archivo al elemento de descarga
            linkDeDescarga.download = "CV_ISAAC_MOSQUEDA.pdf";
            
            // Simula un clic en el elemento de descarga
            linkDeDescarga.click();
        });
    });