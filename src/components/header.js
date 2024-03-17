import { navigateTo } from "./../router.js";

export const headerComponent = () => {
  const header = document.createElement("header");
  header.innerHTML = `
    <h1 class="btn-home"> MovieDev</h1>
    <div class="button-container">
        <button class="open-menu">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="25" viewBox="0 0 24 24">
                <path d="M5,7h2h12c1.1,0,2-0.9,2-2s-0.9-2-2-2H7H5C3.9,3,3,3.9,3,5S3.9,7,5,7z" fill="#1F0441"></path>
                <path d="M19,10h-3H5c-1.1,0-2,0.9-2,2s0.9,2,2,2h11h3c1.1,0,2-0.9,2-2S20.1,10,19,10z" fill="#1F0441"></path>
                <path d="M19,17h-6H5c-1.1,0-2,0.9-2,2s0.9,2,2,2h8h6c1.1,0,2-0.9,2-2S20.1,17,19,17z" fill="#1F0441"></path>
            </svg>
        </button>
        <button class="btn-api" title="Ingresar API"><i class="fa-solid fa-key"></i></button>
        <button class="btn-chat-grupal" title="Chat grupal"><i class="fa-brands fa-rocketchat"></i></button>
        </div>
`;

  document.body.appendChild(header);

  const btnRegresar = document.querySelector(".btn-home");
  btnRegresar.addEventListener("click", () => {
    navigateTo(`/`);
  });

  //Escuchar click y cambiar display:none/flex
  const elementClick = document.querySelector(".open-menu");
  elementClick.addEventListener("click", function () {
    const elementDiv = document.querySelector(".inputs");
    if (elementDiv.style.display === "none") {
      elementDiv.style.display = "flex";
      //console.log(elementDiv)
    } else {
      elementDiv.style.display = "none";
      //console.log(elementDiv)
    }
  });

  const btnAPIkey = document.querySelector(".btn-api");
  btnAPIkey.addEventListener("click", () => {
    navigateTo(`/viewAPIKey`);
  });

  const btnChatgrupal = document.querySelector(".btn-chat-grupal");
  btnChatgrupal.addEventListener("click", () => {
    navigateTo(`/chats`, { name: "chat-grupal" });
  });

  return header;
};

