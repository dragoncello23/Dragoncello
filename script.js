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
