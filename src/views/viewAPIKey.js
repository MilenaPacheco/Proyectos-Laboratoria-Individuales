import { headerComponent } from "./../components/header.js";
import { footerComponent } from "./../components/footer.js";
import { btnRegresar } from "../components/btnRegresar.js";
import { navigateTo } from "./../router.js";
import { setApiKey } from "./../lib/apiKeyFunction.js";
export const viewAPIKey = () =>{
  const root = document.createElement("div")
  
  const header = headerComponent();
  root.appendChild(header);

  const div = document.createElement("div");
  div.className = "container-api-key"
  root.appendChild(div);

  const label =document.createElement("label");
  label.setAttribute("for", "api-key");
  div.appendChild(label);

  const input = document.createElement("input");
  input.id = "api-key";
  input.type = "password";
  input.value = "";
  input.placeholder = "Ingresa tu API Key";
  div.appendChild(input);

  const btnConfirmar = document.createElement("button");
  btnConfirmar.className = "btn btn-confirmar";
  btnConfirmar.textContent = "Confirmar"; // Agregar texto al botón
  div.appendChild(btnConfirmar);
  btnConfirmar.addEventListener("click", () => {
    // Validar API. Si es correcta, dirigir a la vista de bienvenida. Sino, mostrar elemento con API errónea
    const key = input.value;
    console.log(input.value);
    setApiKey(key);
    navigateTo(`/confirmar`);
  });
  
  //verificar si hay una ApiKey ingresada,------> lleno el imput con la que esta, otra opción de ingresar una nueva
  //Lo que se ingresa al input no se debe visualizar solamente los últimos números, ---- Revisar atributo y expresion regular 
  const botonRegresar = btnRegresar();
  botonRegresar.className = "btn btn-regresar-API";
  div.appendChild(botonRegresar);
  botonRegresar.addEventListener("click", () => {
    navigateTo(`/`)
  })

  const footer = footerComponent();
  root.appendChild(footer);

  return root
} 
