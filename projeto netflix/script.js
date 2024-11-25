// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Menu de Perfil Interativo
    const profileMenuToggle = document.getElementById('profile-menu-toggle');
    const profileMenu = document.getElementById('profile-menu');
  
    profileMenuToggle.addEventListener('click', () => {
      profileMenu.classList.toggle('hidden');
    });
  
    // Carrossel para as Seções de Conteúdo
    function createCarousel(rowId) {
      const row = document.getElementById(rowId);
      let scrollAmount = 0;
  
      row.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
          scrollAmount += 300; // Scroll para direita
        } else {
          scrollAmount -= 300; // Scroll para esquerda
        }
        row.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
    }
  
    // Inicializar o carrossel em cada seção
    createCarousel('row-populares');
    createCarousel('row-lancamentos');
  });
  