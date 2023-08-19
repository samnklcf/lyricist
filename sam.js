// Attachez un gestionnaire d'événements au bouton d'impression
document.getElementById("boutonImprimer").addEventListener("click", function() {
    // Obtenez l'élément contenant la partie à imprimer
    var contenuAImprimer = document.getElementById("contenuAImprimer");

    // Créez une fenêtre d'impression
    var fenetreImpression = window.open("", "Samuel est une");

    // Insérez le contenu à imprimer dans la fenêtre d'impression
    fenetreImpression.document.write(`<html><head>
    <tyle>
    body {
        background-color: brown;
    }
    </tyle> <title>Impression</title></head><body>`);
    fenetreImpression.document.write(contenuAImprimer.innerHTML);
    fenetreImpression.document.write('</body></html>');

    // Imprimez la fenêtre d'impression
    fenetreImpression.print();

    // Fermez la fenêtre d'impression
    fenetreImpression.close();
});
