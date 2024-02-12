// regresa una pantalla atrás
export const btnRegresar = () => {
  const btnRegresar = document.createElement("button");
  btnRegresar.className = "btn-regresar btn-regresar-API";
  const textBoton = document.createTextNode("Regresar");
  btnRegresar.appendChild(textBoton)
  return btnRegresar
};
