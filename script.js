const imagenes = document.querySelectorAll(".galeria img");
const visor = document.getElementById("visor");
const imagenGrande = document.getElementById("imagenGrande");
const cerrar = document.querySelector(".cerrar");
const izquierda = document.querySelector(".izquierda");
const derecha = document.querySelector(".derecha");

let actual = 0;

imagenes.forEach((img, i) => {
    img.addEventListener("click", () => {
        actual = i;
        mostrarImagen();
        visor.classList.add("activo");
    });
});

function mostrarImagen() {
    imagenGrande.src = imagenes[actual].src;
}

cerrar.addEventListener("click", () => {
    visor.classList.remove("activo");
});

derecha.addEventListener("click", () => {
    actual++;
    if (actual >= imagenes.length) actual = 0;
    mostrarImagen();
});

izquierda.addEventListener("click", () => {
    actual--;
    if (actual < 0) actual = imagenes.length - 1;
    mostrarImagen();
});

document.addEventListener("keydown", (e) => {

    if (!visor.classList.contains("activo")) return;

    if (e.key === "ArrowRight") {
        derecha.click();
    }

    if (e.key === "ArrowLeft") {
        izquierda.click();
    }

    if (e.key === "Escape") {
        visor.classList.remove("activo");
    }

});

function cotizar() {

    const tipo = Number(
        document.getElementById("tipo").value
    );

    const metros = Number(
        document.getElementById("metros").value
    );

    if (tipo === 0 || metros <= 0) {

        document.getElementById("resultado")
        .innerHTML =
        "Seleccione un producto y los metros.";

        return;
    }

    let total = tipo * metros;

    document.getElementById("resultado")
    .innerHTML =
    "Valor estimado: $" +
    total.toLocaleString("es-CO");
}
