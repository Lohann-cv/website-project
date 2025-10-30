//C'est pour le quizooooooooooquiz
function setupQuizReveal() {
  document.querySelectorAll('.reveal').forEach((btn) => {
    const box = document.getElementById(btn.dataset.target);
    if (!box) return;
    box.classList.remove('show');

    btn.addEventListener('click', () => {
      const show = !box.classList.contains('show');
      box.classList.toggle('show', show);
      btn.setAttribute('aria-expanded', show ? 'true' : 'false');
      btn.textContent = show ? 'Masquer la réponse' : 'Voir la réponse';
    });
  });
}

document.addEventListener('DOMContentLoaded', setupQuizReveal);
