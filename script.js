function redirectToPage(pageURL) {
    window.location.href = pageURL;
}
document.getElementById("copy-button").addEventListener("click", function() {
    var iframeText = document.getElementById("my-iframe").outerHTML;
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
