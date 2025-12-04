// Esegue il codice solo dopo che l'intera pagina è stata caricata
document.addEventListener("DOMContentLoaded", function() {
    // Seleziona la navbar presente nella pagina
    const navbar = document.querySelector('.navbar');
    // Aggiunge un listener allo scroll della finestra
    window.addEventListener('scroll', function() {
        // Se l'utente ha scrollato più di 50px verso il basso
        if (window.scrollY > 50) {
            // Aggiunge sfondo scuro e ombra alla navbar
            navbar.classList.add('bg-dark', 'shadow');
            // Rimuove trasparenza e padding grande
            navbar.classList.remove('bg-transparent', 'p-3');
            // Aggiunge padding più piccolo per una navbar compatta
            navbar.classList.add('p-2');
        } else {
            // Quando torna in alto (< 50px), ripristina stile originale della navbar
            navbar.classList.remove('bg-dark', 'shadow', 'p-2'); // Rimuove stile compatto
            navbar.classList.add('bg-transparent', 'p-3');       // Rende la navbar trasparente e con padding maggiore
        }
    });
});
