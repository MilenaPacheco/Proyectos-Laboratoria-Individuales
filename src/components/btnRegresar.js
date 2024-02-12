// regresa una pantalla atrás
export const btnRegresar = () => {
  const btnRegresar = document.createElement("button");
  btnRegresar.className = "btn-regresar";
  const textBoton = document.createTextNode("Regresar");
  btnRegresar.appendChild(textBoton)
  return btnRegresar
};
