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