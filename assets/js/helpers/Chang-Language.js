const languageToggle = document.getElementById('language-toggle');
const H1 = document.getElementsByClassName('home__title')[0];

languageToggle.addEventListener('change', function() {  
  if (H1.textContent.trim() === 'Hola, Soy Daniel') {
      window.location.href = '/index-en.html'; 
    } 
    else if (H1.textContent.trim() === 'Hi, I´m Daniel') {
        window.location.href = '/index.html';
    }
});


export default languageToggle;