// Say Hello Button Action
const helloBtn = document.querySelector('#helloBtn');
const statusText = document.querySelector('#status');

helloBtn.addEventListener('click', () => {
  statusText.textContent = 'System Active: Hello from GitHub Pages!';
  statusText.style.color = '#00ff88';
});

// Glow Effect Toggle Action
const themeToggleBtn = document.querySelector('#themeToggleBtn');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('glow-mode');
  
  if (document.body.classList.contains('glow-mode')) {
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Normal Glow';
  } else {
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Glow Effect';
  }
});