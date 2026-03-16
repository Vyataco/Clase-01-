function cambiarModo() {
    const body = document.body;
    const temaActual = body.getAttribute("data-theme");

    if (temaActual === "dark") {
        body.setAttribute("data-theme", "light");
    } else {
        body.setAttribute("data-theme", "dark");
    }
}
