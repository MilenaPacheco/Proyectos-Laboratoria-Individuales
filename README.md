# MovieDev

[Visita nuestra página](https://proyectos-laboratoria-individuales.vercel.app/)

![Imagen Principal de MovieDev](imagenPrincipalDesk)


## 1. Resumen del proyecto

### MovieDev
MovieDev es una plataforma web diseñada para las desarrolladoras web que buscan inspiración y entretenimiento relacionado con el mundo de la tecnología. La plataforma ofrece una colección de tarjetas que cubren 24 películas cuidadosamente seleccionadas de géneros como documental, thriller, ciencia ficción, drama y animación. Todas estas películas exploran diversos aspectos del fascinante mundo tecnológico.

Características principales:
Colección de películas: MovieDev presenta una selección de 24 películas relacionadas con la tecnología, asegurando una variedad de géneros para adaptarse a diferentes gustos.
Información detallada: Cada tarjeta de película proporciona información detallada sobre la trama, el elenco y otros aspectos relevantes, ofreciendo a las usuarias una visión completa de cada película.
Chat individual y grupal: Integración de un chat tanto individual como grupal, permitiendo a las usuarias interactuar con los protagonistas de cada película y discutir sobre temas relacionados.
Datos y colaboración:
La información recopilada en MovieDev se basa en un conjunto de datos generado con la colaboración de ChatGPT. Este enfoque único permite a las usuarias explorar y descubrir películas que se ajusten a sus intereses y preferencias dentro del ámbito tecnológico.

Uso:
Para comenzar a explorar las películas disponibles, navega a través de las tarjetas en la plataforma y haz clic en aquellas que llamen tu atención para obtener más detalles. Además, puedes interactuar con los protagonistas a través del chat individual y grupal, puededes preguntar por datos relevantes y hasta datos personales cada intengrante te responderá independientemente.

### Los objetivos generales de este proyecto son los siguientes

* Desarrollar una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Aplicar los conceptos de responsividad en el desarrollo de las vistas
* Implementar un router para la navegación entre las diferentes
vistas de la aplicación
* Integrar una API externa
* Entender la asincronía en JavaScript
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

## 2. Consideraciones generales

* El rango de tiempo en el que se lleva a cabo el proyecto fue de 7 semanas.

* La lógica del proyecto está implementada completamente en JavaScript
  (ES6+), HTML y CSS.

## 3. Funcionalidades
Responsive Design:

La aplicación se adapta y es accesible en diferentes dispositivos y tamaños de pantalla.

Single Page Application (SPA):
Se implemento un sistema de enrutamiento que permite la navegación fluida dentro de la aplicación.
Cargar dinámicamente cada vista de la aplicación mediante JavaScript.
Asegurar que la URL se actualice adecuadamente según la vista cargada.
Cargar la vista correspondiente a la URL actual al iniciar la aplicación.

### Funcionalidades de Dataverse:
Visualizar la data disponible.
Filtrar la data según diferentes criterios.
Ordenar la data según diferentes atributos.
Calcular estadísticas sobre la data.
Detalles de Personajes/Entidades:

Al hacer clic en una tarjeta de personaje/entidad, redirigir a una vista propia con su propia URL que muestre información detallada sobre ese personaje/entidad en particular.
Configuración de API Key:

Permitir a la usuaria configurar la API Key necesaria para interactuar con la API de OpenAI.
Interacción a través de Chat:

Utilizando la API de OpenAI, permiten a la usuaria interactuar con un personaje de la película a través de un sistema de chat.
Las respuestas del sistema de chat son informativas y personalizadas según las preguntas de las usuarias, gracias a la inteligencia artificial de OpenAI.

Al implementar estas funcionalidades, MovieDev proporcionará una experiencia enriquecedora y completa para las usuarias interesadas en explorar y aprender sobre personajes y entidades relevantes en el ámbito de la tecnología.

Funcionalidades Específicas del Proyecto
Interacción Simultánea con Personajes/Entidades a través de Chat
La aplicación permite al usuario interactuar simultáneamente con todos los personajes/entidades a través de un chat. Aquí están los detalles clave de esta funcionalidad:

URL de Acceso: Esta funcionalidad se encuentra disponible en la URL /panel.

Interacción de la Usuaria:

La usuaria puede ingresar sus preguntas o mensajes en un cuadro de texto designado y enviarlos utilizando un botón de envío.
Personalización de Mensajes:

Cada mensaje enviado por la usuaria se ajusta automáticamente para cada personaje/entidad, con el objetivo de generar una respuesta única basada en su personalidad y conocimiento.
Visualización de Respuestas:

Las respuestas de todos los personajes se muestran ordenadas según el tiempo de respuesta.
Indicador de Respuesta:

La aplicación indica visualmente cuando uno o varios personajes/entidades están generando una respuesta al mensaje enviado, proporcionando retroalimentación en tiempo real sobre el proceso de interacción.
Manejo de Errores de API
La aplicación informa a la usuaria sobre cualquier error que pueda surgir al interactuar con la API, incluyendo situaciones como alcanzar la cuota de tokens por minuto u otros errores relacionados con la API. Aquí se detallan las características de este manejo de errores:

Descripción Clara de Errores:
Se proporciona una descripción clara de la causa del problema cuando ocurre un error relacionado con la API.
Posibles Soluciones:
Además de describir el problema, la aplicación ofrece posibles soluciones para resolver el error de manera efectiva y continuar con la interacción.

  
## 4. Consideraciones técnicas

La lógica del proyecto esta implementada completamente en JavaScript
(ES6), HTML y CSS.

El _boilerplate o estructura_ del proyecto :

```text
├── src
|  ├── components
                   btnChat.js
                   btnRegresar.js
                   footer.js
                   header.js
                   btnSalirdelChat.js
                   menuSelects.js
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── dataFunctions.js
|  |   -  apyKeyFunction.js
      ──  openAIApi.js
|  ├── views
                   - home.js
                   - viewAPIKey
                   - viewBienvenida.js
                   - viewChats.js
                   - viewDescriptionCard.js
                   - viewError.js 
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── apiKey.spec.js
|  └── btnChat.spec.js
|  └── header.spec.js
|  └── openAIApi.spec.js
├── README.md
└── package.json

```

## 5. Definición del producto

Proceso de Diseño
Investigación Inicial
Comenzamos nuestro proceso investigando las necesidades y preferencias de nuestras usuarias objetivo escogiendo contenido y funcionalidades relevante para ellas, las desarrolladoras web. Pedimos feedback para adecuar de una manera estratégica la posición de los elementos, combinación de los colores y las proporciones de cada una de las secciones además de utilizar principios de diseños.

Definición de Funcionalidades
Con base en la retroalimentación de nuestras usuarias y nuestro objetivo de proporcionar un recurso educativo y entretenido, definimos las funcionalidades clave de MovieDev y con los parámetros establecidos inicialmente. Esto incluye la visualización de películas, la capacidad de filtrar y ordenar la data, así como interactuar con los personajes a través de un chat impulsado por la inteligencia artificial, especificamente vinculado con la API de Open AI.

Diseño y Desarrollo
Utilizando las mejores prácticas de diseño web y la metodología ágil, comenzamos a diseñar y desarrollar MovieDev. Creamos wireframes y prototipos para iterar y refinar nuestra interfaz de usuario. Luego, implementamos el diseño utilizando tecnologías como HTML, CSS y JavaScript con la ayuda de Figma, acontinuación mostramos el prototipo.

Resolución de Problemas
Problemas Identificados
Durante el desarrollo, nos enfrentamos a desafíos como el manejo de grandes conjuntos de datos y distribución de espacios estrategicos para visualizar esta información, la integración de la API de OpenAI para el chat de inteligencia artificial tanto para una API gratuita con restricciones y una paga. 

## 6. Soluciones Implementadas

Para abordar estos problemas, hemos implementado una serie de estrategias:

Paginación de Datos: Dividimos los conjuntos de datos en páginas más pequeñas para mejorar la carga y la velocidad de respuesta de la aplicación............

Optimización del Código: Realizamos ajustes y mejoras en el código para optimizar el rendimiento de la aplicación y reducir los tiempos de carga.

Personalización del Chat con OpenAI: Utilizamos la API de OpenAI para personalizar las respuestas del chat, proporcionando respuestas relevantes y atractivas a las preguntas de las usuarias.

Integración de Opción de API Key Gratuita: Hemos añadido una nueva opción de manejo de API Key Gratuita, además de la opción de API paga. En el chat grupal, debido a las limitaciones de la API gratuita en términos de tokens y respuestas, se entabla una conversación con tres películas escogidas al azar. Esto garantiza que las usuarias puedan seguir interactuando de manera significativa, incluso con las restricciones de la API gratuita.

### Resultados y Beneficios
MovieDev ofrece una solución integral para nuestras usuarias, permitiéndoles explorar películas relacionadas con la tecnología, aprender sobre personajes relevantes y entablar conversaciones interactivas a través del chat. Creemos que nuestro producto resuelve el problema de encontrar contenido educativo y entretenido en un formato accesible y atractivo para las desarrolladoras web, y lo hace de manera económica al ofrecer opciones tanto gratuitas como de pago para la integración de la API Key.

¡Esperamos que disfrutes de MovieDev y encuentres inspiración en las historias y personajes que presenta!.

## 7. Historias de usuaria

Una vez que entiendas las necesidades de tus usuarias, escribe las [Historias
de Usuaria](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que la usuaria necesita hacer/ver. Las **Historias de Usuaria** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarias.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

Usa tus historias de usuaria para planificar tus sprints dividiendo
cada historia en tareas.

En la medida de lo posible, termina una Historia de Usuaria antes de pasar
a la siguiente (cumpliendo con la Definición de Terminado y los Criterios
de Aceptación).

#### Historia de Usuario 1:
**Yo como desarrolladora web quiero** ver información más detallada y específica de cada uno de los films. **Para** saber más detalles interesantes y no quedarme con información básica.

##### Criterios de aceptación:
- Botón claramente visible en la tarjeta de cada película que permita acceder a su información detallada, intuitivamente
- Al hacer click en el botón, la página debe cambiar y mostrar información más amplia y detallada sobre la película seleccionada
- La información ampliada debe incluir detalles interesantes sobre la película, que no se mostraron en la tarjeta de inicio
- La navegación de regreso desde la vista detallada a la vista principal debe ser intuitiva y fácil de usar
- La funcionalidad de visualización de información detallada debe poder verse de manera consistente en dispositivos móviles y de escritorio.
##### Definición de terminado:
- Al darle click al botón, la información más detallada se despliega en una nueva vista con su propia URL
- El código asociado con la implementación de la vista detallada debe estar libre de errores. Debe superar sus propios tests
- La interfaz de usuario para la vista detallada debe ser estéticamente agradable y coherente con el diseño general de la página web. Respeta las buenas prácticas de UX design
- Debe ser responsive. Y realizar pruebas para garantizar que la funcionalidad de información detallada funcione correctamente en diversos navegadores y dispositivos.


#### Historia de Usuario 2:

##### Criterios de aceptación:
Interacción en la Pantalla de Cada Película
En la pantalla de cada película, se debe incluir un botón claramente visible que permita a la usuaria iniciar una conversación para interactuar con dicha película.

Funcionamiento del Botón de Chat
- Si la Usuaria Ingresó Previamente la API Key:
- Al hacer clic en el botón de chat, se abrirá un chat que permitirá a la usuaria enviar preguntas o comentarios de manera directa.
- Si la Usuaria No Ingresó Previamente la API Key:
- Al hacer clic en el botón de chat, se abrirá la vista para ingresar las credenciales de la API Key.
- Después de ingresar las credenciales, la página automáticamente redirigirá a la usuaria al chat, donde podrá enviar preguntas o comentarios sin problemas.
- Características del Chat Individual
- La pantalla de chat individual está diseñada para adaptarse a diferentes tipos de dispositivos y navegadores, asegurando una experiencia óptima para todas las usuarias.
- En el chat, se puede diferenciar claramente la interacción entre la usuaria y la película, garantizando una comunicación efectiva.
- Se permite el uso de emoticones para enriquecer la comunicación.
- Se incluye un botón de envío para mensajes, facilitando el proceso de comunicación.
- El diseño del chat es agradable a la vista, con una interfaz intuitiva y atractiva.
- Se proporciona una opción para salir del chat en caso de que la usuaria no desee continuar la conversación.
- Se presenta una ventana para ver el despliegue del chat y otra para el input de la usuaria, asegurando una organización clara y eficiente durante la interacción.

##### Definición de terminado:
- El botón para entrar al chat funciona sin errores y cumple con los criterios de diseño de Experiencia de Usuario (UX). Es legible, con un contraste adecuado y está ubicado de manera intuitiva para llamar a la acción.
- El despliegue de la vista del chat individual se realiza de manera rápida y precisa, sin errores perceptibles.
- En caso de ser necesario, el redireccionamiento de las credenciales de la API Key hacia el chat ocurre de forma rápida, precisa y sin errores.
- La pantalla del chat individual es una vista independiente que cuenta con su propia URL.
- La pantalla del chat individual es responsive, adaptándose correctamente a diferentes dispositivos y tamaños de pantalla.
- El funcionamiento del chat y su legibilidad se han probado mediante pruebas de usabilidad, asegurando una experiencia fluida para la usuaria.
- El ingreso de texto en los campos de entrada y la lectura del chat se realiza de manera cómoda y sin interrumpir la visualización de la página. El chat admite los caracteres típicos necesarios para una conversación fluida.
- El botón de envío de mensajes funciona sin errores y cumple con los criterios de diseño de UX. Es legible, con suficiente contraste y su posición invita intuitivamente a la acción.
- El estilo de la vista del chat es coherente con el resto de la página web, manteniendo una apariencia uniforme y profesional.
- La función de chat ha superado satisfactoriamente sus propias pruebas, demostrando su correcto funcionamiento y cumplimiento de los requisitos establecidos.

#### Historia de Usuario 3:

##### Criterios de aceptación:
- Criterios de Aceptación:
- El botón de ingreso al chat debe estar animado y destacado en la parte superior de la página, claramente visible para la usuaria.
- Al hacer clic en el botón, la página debe cambiar para mostrar todos los personajes y la conversación, con la opción de enviar emojis.
- El chat debe presentarse en forma de nube y mostrar el nombre de quien escribe cada mensaje.
- En la parte inferior del chat, la usuaria debe tener la opción de regresar a la página principal para salir del chat.
- Todo el contenido del chat debe ser coherente con el tamaño de pantalla, asegurando una experiencia consistente desde cualquier dispositivo.
- Si la usuaria ingresa una credencial errónea, se le debe notificar del error sin salir de la página actual, permitiéndole corregir la información ingresada.

##### Definición de terminado:
- Al hacer clic en "chat grupal", se debe generar un nuevo renderizado de la vista asociada al pathname: /chatgrupal. Esta vista debe incluir todas las partes del chat y presentar los mensajes en forma de burbujas.
- Los módulos del proyecto deben superar los tests propuestos por Laboratoria, garantizando su funcionalidad y confiabilidad. Además, deben ser independientes entre sí para facilitar la modulación y la mantenibilidad del código.
- El despliegue de la aplicación debe ser responsive, adaptándose correctamente a diferentes dispositivos y tamaños de pantalla. Debe cumplir con los requisitos establecidos desde el inicio del proyecto y ofrecer una experiencia de usuaria consistente y atractiva en todas las plataformas.
- Se debe implementar un alert para advertir a la usuaria en caso de que ingrese credenciales erróneas, proporcionando una indicación clara del error sin interrumpir la experiencia de navegación.

#### Historia de Usuario 4:

##### Criterios de aceptación:
- Criterios de Aceptación:
- Debe existir un botón animado y destacado en la parte superior de la página para ingresar la API Key.
- Al hacer clic en el botón, la página debe cambiar para mostrar un cuadro donde el usuario pueda ingresar su API Key.
- En la parte inferior del cuadro de ingreso, el usuario debe tener dos opciones: una para validar los datos ingresados y otra para regresar a la página principal.
- Todo el contenido del cuadro de ingreso de la API Key debe adaptarse adecuadamente al tamaño de pantalla del dispositivo desde el cual se accede, asegurando una experiencia coherente y agradable para la usuaria.

##### Definición de terminado:
- Al hacer clic en el botón "Ingresar API Key", se debe generar un nuevo renderizado de la vista asociada al pathname: /api. Esta vista mostrará un campo de entrada para que el usuario ingrese sus credenciales de la API Key.
- Todos los módulos del proyecto deben superar satisfactoriamente los tests propuestos por Laboratoria. Además, cada módulo debe ser independiente para facilitar su modulación y reutilización en futuros desarrollos.
- El despliegue del proyecto debe ser completamente responsivo, adaptándose de manera adecuada a diferentes tamaños de pantalla y dispositivos. Debe cumplir con los requisitos establecidos desde el inicio del proyecto para ofrecer una experiencia de usuaria coherente, atractiva y consistente en cualquier dispositivo utilizado.


## 7. Diseño de la Interfaz de Usuaria

#### Prototipo de alta fidelidad

- Durante la fase de desarrollo, refinamos el prototipo de alta fidelidad basándonos en el feedback que recibimos de nuestras usuarias. Este proceso de iteración nos permitió realizar ajustes significativos para mejorar la experiencia del usuario y garantizar que el diseño final cumpla con sus expectativas y necesidades.
- Una de las áreas clave en las que nos enfocamos fue la combinación de colores utilizada en el prototipo. Después de analizar el feedback y realizar investigacionesen combinaciones de colores, hicimos ajustes para asegurarnos de que los colores elegidos reflejaran adecuadamente la identidad de nuestra marca y proporcionaran una experiencia visual atractiva y coherente.
- Además, revisamos las proporciones de las secciones en el prototipo para garantizar una distribución equilibrada del contenido y una navegación fluida para las usuarias. Esto implicó ajustes en la disposición y el tamaño de los elementos para optimizar la legibilidad y la accesibilidad en todas las pantallas y dispositivos.
- Una de las áreas de enfoque más importantes fue el diseño y la disposición de los chats. Tomando en cuenta los comentarios de las usuarias, realizamos cambios significativos en la forma y la presentación de los chats para mejorar la claridad y la facilidad de uso. Esto incluyó ajustes en la disposición de los mensajes, la tipografía utilizada y la incorporación de elementos visuales para mejorar la comprensión y la interacción.

![Imagen Prototipo](PrototipoAltaFidelidad1)
![Imagen Prototipo](PrototipoAltaFidelidad2)
![Imagen Prototipo](PrototipoAltaFidelidad3)
![Imagen Prototipo](PrototipoAltaFidelidad4)
