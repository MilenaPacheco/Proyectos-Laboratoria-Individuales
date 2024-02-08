export const viewError = () => {
  const errorBox = document.createElement("div");
  errorBox.className = "error-box";
  const imgError = document.createElement("img");
  imgError.className = "error-image";
  imgError.src = "https://raw.githubusercontent.com/MilenaPacheco/DEV013-dataverse/main/src/img/the-imitation-game.jpeg";
  imgError.alt = "Error 404"
  errorBox.appendChild(imgError);
  const messageError = document.createElement("p");
  messageError.className="error-message"
  messageError.textContent= "ruta no encontrada";
  errorBox.appendChild(messageError);
  //errorBox.textContent = "ruta no encontrada";
  return errorBox;
};
