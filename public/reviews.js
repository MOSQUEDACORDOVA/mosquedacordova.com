const reviewApiUrl = 'https://us-central1-mosqueda-cordova-992b2.cloudfunctions.net/getReviews';
async function fetchReviews() {
    try {
        const response = await fetch(reviewApiUrl);
        const data = await response.json();
        if (data.reviews && data.reviews.length > 0) {
          const reviewsContainer = document.getElementById('reviews-container');
          data.reviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('sub_card');
            // Limitamos la longitud del texto de la reseña
            const maxLength = 100; // Cambia este valor según la longitud deseada
            const truncatedText = review.text.length > maxLength 
              ? review.text.substring(0, maxLength) + '...'
              : review.text;
            reviewCard.innerHTML = `
              <div class="image">
                <img src="${review.profile_photo_url}" alt="${review.author_name}">
              </div>
              <div class="flex_1 flex_direction_column body_sub_card">
                <div>
                  <h3>${review.author_name}</h3>
                  <div class="small">
                    ${truncatedText}
                  </div>
                  <div  class="small">
                    <strong>Ver completa</strong>
                  </div>
                </div>
              </div>
            `;
            reviewsContainer.appendChild(reviewCard);
          });
        } else {
          document.getElementById('reviews-container').innerHTML = 'No se encontraron reseñas.';
        }
    } catch (error) {
        console.error('Error al obtener las reseñas:', error);
        document.getElementById('reviews-container').innerHTML = 'Error al cargar reseñas.';
    }
}