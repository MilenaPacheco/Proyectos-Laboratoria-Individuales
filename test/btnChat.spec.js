import { btnChat } from "../src/components/btnChat.js";
describe("Botón Chat", () => {
  const botonChat = btnChat();
  test("btnChat existe y es una función", () => {
    expect(typeof btnChat).toBe("function");
  });
  test("btnChat retorna un elemento HTML", () => {
    expect(botonChat).toBeInstanceOf(HTMLElement);
  });
});
test("Crea un elemento de botón", () => {
  const button = btnChat();
  expect(button.tagName).toBe("BUTTON");
});
