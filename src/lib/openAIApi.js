// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from "./apiKeyFunction.js";

export const communicateWithOpenAI = async (messages, film) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  //console.log("input ", messages)
  const apiKey = getApiKey();
  const bodyMessages = {
    model: "gpt-3.5-turbo",
    
    messages: [

      { role: "system", content: `Eres el protagonista del film ${film} siempre responderas desenvolviendo ese papel`}, 
      { role: "user", content: `Responde a esta pregunta: ${messages}`}
    ],
    //"messages": [{"role": "user", "content": "Say this is a test!"}],
    temperature: 0.7,
  };
  //Configuración del objeto de opciones de peticiones fetch
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
      //"Authorization": "Bearer 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"
    },
    body: JSON.stringify(bodyMessages), // body data type must match "Content-Type" header
  };
  return fetch("https://api.openai.com/v1/chat/completions", options)
    .then((response) => response.json())
    .then((data) => {
      //console.log("Message:", data.choices[0].message.content);
      return data;
    })
    .catch((error) => {
      //console.error("Error:", error);
      throw error; // Re-lanza el error para que pueda ser capturado externamente
    });
};
