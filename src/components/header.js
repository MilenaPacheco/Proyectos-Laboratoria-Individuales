// Aquí deben estar: 
// - btnChatgrupal
// - btnAPIkey
// - btnHome (nombre MovieDev en header, te devuelve al inicio)

export const headerComponent = () => {
    const header = document.createElement("header");
    header.id = "namePage";
    header.innerHTML = "<h1>MovieDev</h1>";

    const btnChatgrupal = document.createElement("button");
    btnChatgrupal.className = "btn";
    btnChatgrupal.innerHTML = "Chat grupal";

    const btnAPIkey = document.createElement("button");
    btnAPIkey.className = "btn";
    btnAPIkey.innerHTML = "API key";

    header.appendChild(btnChatgrupal);
    header.appendChild(btnAPIkey);


    return header;
} 

