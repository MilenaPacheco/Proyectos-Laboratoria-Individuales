export const viewError = () => {
  const errorBox = document.createElement("div");
  errorBox.className = "error-box";

  const imgError = document.createElement("img");
  imgError.className = "error-image";
  imgError.src = "https://cdn-icons-png.flaticon.com/512/755/755014.png";
  imgError.alt = "Error 404"

  errorBox.appendChild(imgError);

  const messageError = document.createElement("p");
  messageError.className="error-message"
  messageError.innerHTML= "<strong>¡Error! Sitio no encontrado</strong>";

  errorBox.appendChild(messageError);

  return errorBox;
};
