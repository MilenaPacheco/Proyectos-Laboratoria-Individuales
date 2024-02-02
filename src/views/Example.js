import { headerComponent } from "./../components/header.js";

export const Example = () => {
    const p = document.createElement("p")
    p.innerHTML = "Esto es una práctica";
    const viewHeader = headerComponent();
    
    return viewHeader;
    
};


