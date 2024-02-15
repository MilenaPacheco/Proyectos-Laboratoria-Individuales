import { headerComponent } from "./../components/header.js";
import { footerComponent } from "./../components/footer.js";
import { btnRegresar } from "../components/btnRegresar.js";
import { navigateTo } from "./../router.js";

export const viewBienvenida = () =>{
  const root = document.createElement("div");
  root.className="ingreso"

  const header = headerComponent();
  root.appendChild(header);

  const bienvenida = document.createElement("h1");
  bienvenida.className="bienvenida"
  bienvenida.textContent="Bienvenida";
  root.appendChild(bienvenida)

  const validacionTrue = document.createElement("h2");
  validacionTrue.className="validacion validacion-correcta";
  validacionTrue.textContent="API Key ingresada con éxito";
  root.appendChild(validacionTrue);

  const validacionFalse = document.createElement("h2");
  validacionFalse.className="validacion validacion-false"
  validacionFalse.textContent="API Key incorrecta"

  const botonRegresar = btnRegresar();
  root.appendChild(botonRegresar);
  botonRegresar.addEventListener("click", () => {
    navigateTo(`/`)
  })

  const footer = footerComponent();
  root.appendChild(footer);

  return root  
}