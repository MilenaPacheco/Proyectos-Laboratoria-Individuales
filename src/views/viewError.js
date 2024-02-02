export const viewError = () => {
    const errorBox = document.createElement("div")
    errorBox.className = "error-box";
    errorBox.innerHTML = "ruta no encontrada";
    return errorBox;
} 