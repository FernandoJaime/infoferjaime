// Obtengo el botón y el contenedor
const button = document.querySelector('.button_perfil');
const container = document.querySelector('.container');
const backbutton = document.querySelector('.button_back')

// Agrego un evento de click al botón card perfil
button.addEventListener('click', () => {
  
    // Oculto el botón card perfil
  button.style.display = 'none';

    // Muestro el contenedor
  container.style.display = 'block';

});

// Agrego un evento de click al botón back
backbutton.addEventListener('click', () => {
    
    // Oculto el contenedor
    container.style.display = 'none';

    // Muestro el botón card perfil
    button.style.display = 'block'; 
})

/* Funcion para los botones abrir links */
function redirectToLink(event) {
  const link = event.currentTarget.getAttribute('href');
  window.open(link, '_blank');
}
const botones = document.querySelectorAll('.redes button');
botones.forEach(button => button.addEventListener('click', redirectToLink));