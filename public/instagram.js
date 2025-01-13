const firebaseFunctionUrl = 'https://us-central1-mosqueda-cordova-992b2.cloudfunctions.net/getInstagramImages'; // URL de tu función de Firebase
function preLoaderInstagram(isLoading, container, message = '', targetContainer = null) {
  container.style.display = isLoading || message ? 'block' : 'none';
  container.classList.toggle('shine', isLoading);
  container.innerHTML = message;
  if (targetContainer) {
    targetContainer.style.background = isLoading ? '' : 'none';
  }
}
async function fetchInstagramImages() {
    const instagramLoadingImg = document.getElementById('instagramLoadingImg');
    const instagramImageContainer = document.getElementById('instagramImageContainer');
    preLoaderInstagram(true, instagramLoadingImg);
    try {
        const response = await fetch(firebaseFunctionUrl);
        const data = await response.json();
        if (data && data.length > 0) {
            const imagesToShow = data.slice(0, 6);
            // Función para agregar imágenes a los contenedores
            const addImagesToContainer = (container) => {
                container.innerHTML = '';
                imagesToShow.forEach(item => {
                  const imgContainerElement = document.createElement('div');
                  imgContainerElement.className = "insta_img";
                  const imgElement = document.createElement('img');
                  imgElement.src = item.media_url;
                  imgElement.alt = 'Instagram Image';
                  imgContainerElement.appendChild(imgElement);
                  container.appendChild(imgContainerElement);
                });
            };
            addImagesToContainer(instagramImageContainer);
            // Ocultar mensajes de carga
            preLoaderInstagram(false, instagramLoadingImg, '', instagramImageContainer);
        } else {
            preLoaderInstagram(false, instagramLoadingImg, 'No se encontraron imágenes.');
        }
    } catch (error) {
        console.error('Error al obtener las imágenes:', error);
        preLoaderInstagram(false, instagramLoadingImg, 'Error al cargar imágenes.');
    }
}