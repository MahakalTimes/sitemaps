// Theme: apply saved choice or system preference
(function(){
  const saved = localStorage.getItem('mt-theme');
  if(saved){
    document.documentElement.setAttribute('data-theme', saved);
  } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
    document.documentElement.setAttribute('data-theme','light');
  }
})();

// Toggle theme
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('themeToggle');
  if(!btn) return;
  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('mt-theme', next);
  });
});
