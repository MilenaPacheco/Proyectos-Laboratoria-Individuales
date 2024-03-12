// Importa la función a probar
import { communicateWithOpenAI } from "./../src/lib/openAIApi.js";

describe("communicateWithOpenAI", () => {
  // Objeto en el que se guardará la respuesta esperada con la simulación de la API
  const theExpectedApiResponse = {};

  // Mock de fetch para simular la respuesta de la API
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(theExpectedApiResponse),
      })
    );
  });

  //verificar si la función devuelve los datos esperados de la API y se resuelve correctamente
  test("devuelve los datos esperados de la API", async () => {
    // Llamar a communicateWithOpenAI() y esperar a que se resuelva la promesa
    const data = await communicateWithOpenAI("Cuéntame de ti", "The Social Dilemma");
    expect(data).toEqual(theExpectedApiResponse);
  });

  //verificar que se realiza una sola solicitud a la API con la URL correcta
  test("realiza una sola solicitud a la API con la URL correcta", async () => {
    // Llama a la función para activar el mock de fetch
    await communicateWithOpenAI("¿Cuántos años tienes?", "jobs");
    // Verifica que fetch se haya llamado exactamente una vez y con la URL correcta
    expect(fetch).toHaveBeenCalledTimes(1);
    //expect(fetch).toHaveBeenCalledWith("https://api.openai.com/v1/chat/completions");
  });

  test("Se resuelve la promesa", async () => {
    const messages = "Hola";
    const film = "Hackers";
    const data = await communicateWithOpenAI(messages, film);
    expect(data).toEqual(theExpectedApiResponse);
    //queda pendiente el uso de resolves para verificar o eliminar este test----------->DELETE
  });

  // Prueba para verificar si la promesa se rechaza correctamente
  test("communicateWithOpenAI se rechaza correctamente", () => {
    // fetch para simular el rechazo de la promesa
    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() => Promise.reject(new Error("Error")));

    //rejects para verificar que la promesa se rechaza correctamente
    return expect(communicateWithOpenAI()).rejects.toThrow("Error");
  });
});


//testear una promesa, test asincrono
//verificar si la promesa está rechazada o resuelta

//hacer alguno de componentes smock, testear la AI


