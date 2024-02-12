export const btnChat = () => {
  const btnChat = document.createElement("button");
  btnChat.className = "btn-chat";
  const textBoton = document.createTextNode("Chatear");
  btnChat.appendChild(textBoton);
  return btnChat;
};
