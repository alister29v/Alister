let estadoLicuadora = "apagado";
let licuadora = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-button-sound");

function encenderLicuadora() {
    if (estadoLicuadora === "apagado") {
        estadoLicuadora = "encendido";
        hacerRuido();
        licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagado";
        hacerRuido();
        licuadora.classList.remove("active");
    }
}

function hacerRuido() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
