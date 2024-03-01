// test/apiKey.spec.js

import { getApiKey, setApiKey } from "./../lib/apiKeyFunction";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    // Desarrolla el test correspondiente aquí
    const apiKey = "valor de prueba";
    localStorage.setItem("apiKey", apiKey)
    const obtenerValor = getApiKey();
    expect(obtenerValor).toBe(apiKey)
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    // Desarrolla el test correspondiente aquí
    const apiKey = "valor de prueba";
    setApiKey(apiKey);
    expect(localStorage.getItem("apiKey")).toBe(apiKey);
  });
});
