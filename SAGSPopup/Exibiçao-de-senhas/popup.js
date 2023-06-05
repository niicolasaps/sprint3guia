// Seleciona o botão que abre a popup
const modalBtn = document.querySelector('.button3');
// Seleciona a modal
const modal = document.querySelector('#carouselModal');
// Seleciona o botão para fechar a popup
const closeBtn = document.querySelector('.btn-close');

// Adiciona um evento de clique ao botão que abre a popup
modalBtn.addEventListener('click', () => {
  modal.classList.add('show');
  modal.style.display = 'block';
});

// Adiciona um evento de clique ao botão que fecha a popup
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.style.display = 'none';
});

// Fecha a modal se o usuário clicar fora dela
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
});

// Adiciona suporte para teclas de navegação
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
});

// Rediciona para página de Guia de novos usuários
function redirecionarPagina() {
  window.location.href = "guiausuario.html";
}

// Adiciona um evento que abre a popup
function openVideoModal() {
  var modal = new bootstrap.Modal(document.getElementById('videoModal'));
  modal.show();
}

// Adiciona um evento que fecha a popup
function closeVideoModal() {
  var modal = new bootstrap.Modal(document.getElementById('videoModal'));
  modal.hide();
}

// Rediciona da página de Guia de novos usuários para Home page
const logoImage = document.getElementById('logo

        const logoImage = document.getElementById('

        const logoImage = document.getElementById('logo-image');
        logoImage.addEventListener('

        const logoImage = document.getElementById('logo-image');
        logoImage.addEventListener('click', () => {
            window.location.href = 'index.html

        const logoImage = document.getElementById('logo-image');
        logoImage.addEventListener('click', () => {
            window.location.href = '

        const logoImage = document.getElementById('logo-image');
        logoImage.addEventListener('click', () => {
            window.location.href = 'index.html';
        });