// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from "./apiKeyFunction";

export const communicateWithOpenAI = (messages, film) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  const apiKey = getApiKey();
  const bodyMessages = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: `Eres la película ${film}`}, 
      { role: "user", content: `Responde a esta pregunta: ${messages}`}
    ],
    temperature: 0.7,
  };
  //Configuración del objeto de opciones de peticiones fetch
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(bodyMessages), // body data type must match "Content-Type" header
  };
  fetch("https://api.openai.com/v1/completions", options).then((Response) => Response.json())
    .catch((error) => console.error("Error:", error))
    .then((Response) => console.log("Success:", Response));
};
