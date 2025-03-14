document.addEventListener('DOMContentLoaded', function() {
       const button = document.getElementById('About');
       button.addEventListener('click', function() {
           window.location.href = 'About.html';
       });

       const aboutButton = document.getElementById('Websites');
       aboutButton.addEventListener('click', function() {
           window.location.href = 'Websites.html';
       });

       const gamesButton = document.getElementById('Games');
       gamesButton.addEventListener('click', function() {
           window.location.href = 'Games.html';
       });
   });