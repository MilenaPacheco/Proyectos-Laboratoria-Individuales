// dom.test.js
import { headerComponent } from "../src/components/header.js";

describe("headerComponent", () => {
  const header = headerComponent();

  test("El componente header existe y es una función", () => {
    expect(typeof headerComponent).toBe("function");
  });

  test("El componente header devuelve un elemento HTML", () => {
    expect(header).toBeInstanceOf(HTMLElement);
  });

  test("Debe contener al menos un botón", () => {
    headerComponent();

    // Verifica si hay al menos un botón dentro del header
    const buttons = document.querySelectorAll("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  test("Existe algún encabezado", () => {
    const encabezado = header.querySelector("h1");
    //toBeTruthy() retorna en true si el header tiene contenido
    expect(encabezado.textContent).toBeTruthy();
  });

});
//exista un elemento
//retorne un elemento html