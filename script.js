window.addEventListener('load', () => {
  const imagens = document.querySelectorAll('.produto img');
  const lontrinha = document.getElementById('lontrinha-animada');

  imagens.forEach(img => {
    img.addEventListener('click', () => {
      lontrinha.classList.remove('lont-show');
      void lontrinha.offsetWidth; // reinicia animação
      lontrinha.classList.add('lont-show');
    });
  });
});