import { headerComponent } from "./../components/header.js";
import { data } from "./../data/dataset.js";
import { footerComponent } from "./../components/footer.js";
import { communicateWithOpenAI } from "./../lib/openAIApi.js";
import { navigateTo } from "../router.js";
//import { btnRegresar } from "../components/btnRegresar.js";
//import { btnChat } from "../components/btnChat.js";

export const viewChats = (cardActual) => {
  console.log(typeof cardActual, cardActual.length);
  console.log(typeof cardActual.name, cardActual.name.length);
  //condicional para ver si el argumento que se recibe, cardActual es {name:"chat-grupal"} o {name:cardActual.id}
  const chatActual = data.find((card) => card.id === cardActual.name);
  //console.log(typeof chatActual, chatActual.length)
  const root = document.createElement("div");

  const header = headerComponent();
  root.appendChild(header);

  const divContainerAll = document.createElement("div");
  divContainerAll.className = "contenedor-all";
  root.appendChild(divContainerAll);

  if (cardActual.name === "chat-grupal") {
    const divImageChatGrupal = document.createElement("div");
    divImageChatGrupal.className = "div-img-chat div-img-chat-grupal";
    data.forEach((film) => {
      const filmImage = document.createElement("img");
      filmImage.className = "chat-image-circle";
      filmImage.src = film.imageUrl;
      filmImage.alt = `Imagen de la película ${film.name}`;
      filmImage.title = film.name;
      divImageChatGrupal.appendChild(filmImage);
      divContainerAll.className = "contenedor-all contenedor-all-grupal";
      divContainerAll.appendChild(divImageChatGrupal);
    });
  } else {
    const divImageChatIndividual = document.createElement("div");
    divImageChatIndividual.className = "div-img-chat div-img-chat-individual";
    const filmImage = document.createElement("img");
    filmImage.className = "chat-image";
    filmImage.src = chatActual.imageUrl;
    filmImage.alt = `Imagen de la película ${cardActual.name}`;
    divImageChatIndividual.appendChild(filmImage);
    //divContainerAll.className = "contenedor-all-grupal";
    divContainerAll.appendChild(divImageChatIndividual);
  }

  const contenedorChat = document.createElement("div");
  contenedorChat.className = "contenedor-chat";
  divContainerAll.appendChild(contenedorChat);

  const historialChat = document.createElement("div");
  historialChat.className = "historial-chat";
  //const dataResponse = communicateWithOpenAI();
  //historialChat.appendChild(response);
  contenedorChat.appendChild(historialChat);

  const divInputIcon = document.createElement("div");
  divInputIcon.className = "div-input-icon";
  contenedorChat.appendChild(divInputIcon);

  const label = document.createElement("label");
  label.setAttribute("for", "chat");
  label.className = "label-chat";
  divInputIcon.appendChild(label);
  const input = document.createElement("input");
  input.className = "input-chat";
  divInputIcon.appendChild(input);

  const btnEnviar = document.createElement("button");
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-paper-plane";
  btnEnviar.appendChild(icon);
  btnEnviar.className = "btn-icon-enviar";
  divInputIcon.appendChild(btnEnviar);

  let parametro2;
  if (cardActual.name === "chat-grupal") {
    const dataName = data.map((film) => film.name);
    //seleccionar tres numeros random que representen los indices del array, guardarlos en un array y encontrar su valor por name
    parametro2 = [];
    for (let i = 0; i < 3; i++) {
      const indexRandom = Math.floor(Math.random() * dataName.length);
      parametro2.push(dataName[indexRandom]);
    }
    console.log("parametro2: ", parametro2);
  } else {
    parametro2 = cardActual.name;
  }
  console.log("parametro2: ", parametro2);

  btnEnviar.addEventListener("click", () => {
    const message = input.value;
    const parrafoUser = document.createElement("p");
    parrafoUser.className = "parrafo parrafo-user";

    parrafoUser.textContent = message;
    historialChat.appendChild(parrafoUser);
    console.log(parrafoUser);
    function procesarRespuesta(response, name) {
      if (
        response &&
        response.choices &&
        response.choices[0] &&
        response.choices[0].message
      ) {
        const parrafo = document.createElement("p");
        parrafo.className = "parrafo parrafo-system";
        const contenidoMensaje = response.choices[0].message.content;
        const emisor = `<h6 class="emisor emisor-system">${name}:</h6>`
        parrafo.innerHTML = emisor + contenidoMensaje;
        historialChat.appendChild(parrafo);
        console.log(response);
        console.log(parrafo);
      } else {
        console.error("Respuesta inesperada:", response);
      }
    }

    function manejarError(error) {
      console.error("Error:", error);
    }

    function llamarAOpenAI(message, cardActual) {
      if (Array.isArray(cardActual)) {
        cardActual.forEach((role) => {
          communicateWithOpenAI(message, role)
            .then((response) => {
              procesarRespuesta(response, role);
            })
            .catch((error) => {
              manejarError(error);
            });
        });
      } else {
        communicateWithOpenAI(message, cardActual)
          .then((response) => {
            procesarRespuesta(response, cardActual);
          })
          .catch((error) => {
            manejarError(error);
          });
      }
    }

    // Para un chat individual
    //llamarAOpenAI(message, cardActual);

    // Para un chat grupal
    llamarAOpenAI(message, parametro2);
    input.value = ""
  });

  const divBoton = document.createElement("div");
  divBoton.className = "div-boton";
  divContainerAll.appendChild(divBoton);

  const btnSalirChat = document.createElement("button");
  btnSalirChat.className = "btn btn-salir-chat";
  btnSalirChat.textContent = "Salir del Chat";
  divBoton.appendChild(btnSalirChat);
  btnSalirChat.addEventListener("click", () => {
    navigateTo(`/`);
  });

  const footer = footerComponent();
  root.appendChild(footer);

  return root;
};

