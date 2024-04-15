function redirectToPage(pageURL) {
    window.location.href = pageURL;
}
document.getElementById("copy-button").addEventListener("click", function() {
    var iframeText = '<iframe src="https://www.il-tuo-sito.com" width="600" height="400" frameborder="0"></iframe>';
    copyTextToClipboard(iframeText);
});

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        var copyStatus = document.getElementById("copy-status");
        copyStatus.style.display = "block";
        setTimeout(function() {
            copyStatus.style.display = "none";
        }, 5000); // Nasconde la notifica dopo 5 secondi
    });
}
 window.onload = function() {
            // Apriamo una finestra pop-up
            var popup = window.open('', 'popup', 'width=400,height=200');
            
            // Aggiungiamo del contenuto alla finestra pop-up
            popup.document.write('<h2>Finestra Pop-up</h2>');
            popup.document.write('<p>Contenuto della finestra pop-up</p>');
            
            // Aggiungiamo un bottone per chiudere la finestra pop-up
            popup.document.write('<button onclick="chiudiPopup()">Chiudi</button>');
        };
        
        function chiudiPopup() {
            // Chiudiamo la finestra pop-up
            window.close();
        }
