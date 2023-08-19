// Vérifie si le navigateur prend en charge le service de l'installation d'une PWA
if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('load', function() {
      // Enregistre le service worker
      navigator.serviceWorker.register('sw.js')
        .then(function(registration) {
          console.log('Service worker enregistré avec succès:', registration);
        })
        .catch(function(error) {
          console.log('Échec de l\'enregistrement du service worker:', error);
        });
  
      // Affiche le bouton de téléchargement lorsque l'événement "beforeinstallprompt" est déclenché
      window.addEventListener('beforeinstallprompt', function(event) {
        event.preventDefault(); // Empêche l'affichage de la bannière d'installation automatique
        var downloadButton = document.getElementById('downloadButton');
        downloadButton.style.display = 'block'; // Affiche le bouton de téléchargement
  
        // Ajoute un gestionnaire d'événement pour le clic sur le bouton de téléchargement
        downloadButton.addEventListener('click', function() {
          event.prompt(); // Affiche la bannière d'installation manuelle
        });
      });
    });
  }
  