// Simple form validation and gallery lightbox feature
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you for reaching out!');
      form.reset();
    });
  }
  // Gallery lightbox (basic)
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0; overlay.style.left = 0;
      overlay.style.width = '100vw'; overlay.style.height = '100vh';
      overlay.style.background = 'rgba(18,20,22,0.8)';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = 10000;
      overlay.addEventListener('click', () => overlay.remove());
      const imgLarge = document.createElement('img');
      imgLarge.src = img.src;
      imgLarge.style.maxWidth = '90vw';
      imgLarge.style.maxHeight = '84vh';
      imgLarge.style.borderRadius = '14px';
      imgLarge.style.boxShadow = '0 6px 24px #34c3ff70';
      overlay.appendChild(imgLarge);
      document.body.appendChild(overlay);
    });
  });
});