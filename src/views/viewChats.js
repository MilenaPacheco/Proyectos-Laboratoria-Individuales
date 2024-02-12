import { headerComponent } from "./../components/header.js";
//import { data } from "./../data/dataset.js";
import { footerComponent } from "./../components/footer.js";
//import { btnRegresar } from "../components/btnRegresar.js";
//import { btnChat } from "../components/btnChat.js";
//import { navigateTo } from "./../router.js";

export const viewChats = (cardActual) =>{
  const root = document.createElement("div");

  const header = headerComponent();
  root.appendChild(header);

  const contenedorChat = document.createElement("div")
  contenedorChat.className = "contenedor-chat"
  root.appendChild(contenedorChat)

  const filmImage = document.createElement("img");
  filmImage.className = "chat-image";
  filmImage.src = cardActual.imageUrl;
  filmImage.alt = `Imagen de la película ${cardActual.name}`;
  contenedorChat.appendChild(filmImage);

  const historialChat = document.createElement("div");
  historialChat.className="historial-chat";
  contenedorChat.appendChild(historialChat)

  const label = document.createElement("label");
  label.setAttribute("for", "chat")
  label.className="label-chat"
  contenedorChat.appendChild(label)
  const input = document.createElement("input");
  input.className="input-chat";
  contenedorChat.appendChild(input);

  const btnEnviar = document.createElement("button");
  btnEnviar.className="btn-icon-enviar";
  contenedorChat.appendChild(btnEnviar);

  const btnSalirChat = document.createElement("button");
  btnSalirChat.className = "btn btn-salir-chat";
  btnSalirChat.textContent="Salir del Chat";
  root.appendChild(btnSalirChat);

  const footer =footerComponent();
  root.appendChild(footer);

  return root

}