window.onload = function() {
    const Load = document.querySelectorAll("#IframeLoader");
    const Bg = document.querySelectorAll("#DataIframe");

    for (let i = 0; i < Load.length; i++) {
        Load[i].style.display = "none";
    }

    for (let i = 0; i < Bg.length; i++) {
        Bg[i].style.display = "block";
    }
};