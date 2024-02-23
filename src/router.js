let ROUTES = {}; // Esta variable almacena información sobre las rutas en la SPA.
let rootElement; //Elemento DOM

export const setRootElement = (newRootelementValue) => {
  // assign rootEl
  rootElement = newRootelementValue;
}

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  if(typeof newRoutesValue !== "object" || newRoutesValue === null){
    throw new Error("La ruta/routes no es un objeto o no está definida");
  }
  // assign ROUTES
  ROUTES = newRoutesValue;
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  if(!queryString){
    return {}
  }
  const params = new URLSearchParams(queryString);
  console.log(Object.fromEntries(params));
  return Object.fromEntries(params);
  // convert URLSearchParams to an object
  /*const newObj = {};
  for(const [key, value] of params){
    newObj[key]=value;
  }
  // return the object
  return newObj;*/
  console.log(params)
}

const renderView = (pathname, props={}) => {
  // clear the root element
  const root = rootElement;
  root.innerHTML = "";
  let template;
  // find the correct view in ROUTES for the pathname
  if(ROUTES[pathname]){
    // render the correct view passing the value of props
    template = ROUTES[pathname](props);
    // in case not found render the error view
  }else{
    template = ROUTES["/error"](props);
  }
  // add the view element to the DOM root element
  root.appendChild(template);
} 
//Actualiza la URL usando window.history.pushState y luego llama a renderView con el pathname y los props dados para mostrar la vista correspondiente.
export const navigateTo = (pathname, props = {}) => {
  console.log("Props actuales:", props);
  
  const searchParams = new URLSearchParams(window.location.search);
  console.log("Nuevo objeto con parámetros: ",searchParams);

  for (const [key, value] of Object.entries(props)) {
    searchParams.set(key, value);
    console.log("For objeto parámetros",searchParams);
  }
  //http://localhost:3000/description?name=short-circuit
  const currentPathname = window.location.pathname;
  console.log("Pathname actual: ",currentPathname);
  const newQueryString = searchParams.toString();
  console.log("Parámetros string: ",newQueryString);

  let newURL;

  /*if (newQueryString !== "") {
    newURL = `${pathname}?${newQueryString}`;
  } else {
    newURL = pathname;
  }*/

  if (Object.keys(props).length === 0) {
    newURL = pathname;
  } else {
    newURL = `${pathname}?${newQueryString}`;
  }
  
  console.log("New URL:", newURL);
  
  window.history.pushState({pathname, props}, '', newURL);
  //console.log("Navigated to:", pathname, props);
  
  renderView(pathname, props);
};


export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  location = window.location.pathname;
  console.log(location);
  const params = window.location.search;
  console.log(params);
  // convert the search params to an object
  const searchParams = queryStringToObject(params);
  console.log(searchParams);
  // render the view with the pathname and object
  renderView(location, searchParams);
}

