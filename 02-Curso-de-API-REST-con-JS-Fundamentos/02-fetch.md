# Primeros pasos con fetch

## Consume tu primera API REST

Para consumir nuestra primera API vamos a ir [public-apis](https://github.com/public-apis/public-apis).

Ahí veremos una lista de diferentes APIs que nos pueden servir para construir proyectos que podamos agregar a nuestro portafolio.

En este caso escogeremos la API de [That Api Company](https://portal.thatapicompany.com/), [The Cat API](https://thecatapi.com/)

### Para comenzar creamos la estructura HTML

```html
<body>
  <h1>Gatitos Aleatorios</h1>

  <img alt="Foto de gatitos aleatorios">
  
  <script src="./main.js"></script>
</body>
```

### Y después hacemos el llamado a la API

```javascript
const URL = 'https://api.thecatapi.com/v1/images/search'

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
  });
```

Reto: Crea un botón que actualice la imagen de gatos

```html
<body>
  <h1>Gatitos Aleatorios</h1>

  <section>
    <img alt="Foto de gatitos aleatorios">
  </section>

  <button>Random Cat!</button>
  
  <script src="./main.js"></script>
</body>
```

```css
* {
      margin: 0;
      padding: 0;
    }
    body {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: 50px;
      width: 100%;
      font-family: 'Roboto Flex', sans-serif;
    }
    h1 {
    }
    section {
      display: flex;
      width: 50%;
      height: 50%;
    }
    img {
      display: inline-block;
      margin: 0 auto;
      border-radius: 10px;
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.30);
    }
    button{
      width: 15%;
      height: 7%;
      border-radius: 10px;
      border: 0;
      background-color: rgb(223, 220, 220);
      box-shadow: 1px 1px 4px 2px rgb(0,0, 0, 0.25);
    }
    button:hover {
      cursor: pointer;
      background-color: rgb(199, 195, 195);
    }
```

```javascript
const URL = 'https://api.thecatapi.com/v1/images/search'

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
  });

const button = document.querySelector('button');
button.addEventListener('click', () => {
  fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
  });
})
```

## Endpoints y query parameters

Los endpoints y query parameters son una de las formas en que podemos modificar el resultado que nos da nuestra API REST.

Los endpoints son rutas.

- api.com/breeds
- api.com/categories
- api.com/images
- api.com/images/michi34

Los query parameters son información extra que se agrega a los endpoints para que podamos limitar o especificar mucho mejor cual es el contenido que queremos pedirle a nuestra api o backend.

- /categories?search=fun
- /breeds?limit=5&page=2
- /images?category=3
- /images/michi34?format=png

```html
<body>
  <h1>Gatitos Aleatorios</h1>

  <section>
    <div class="img-container">      
      <img id="img1" alt="Foto de gatitos aleatorios">
    </div>
    <div class="img-container">
      <img id="img2" alt="Foto de gatitos aleatorios">
    </div>
    <div class="img-container">
      <img id="img3" alt="Foto de gatitos aleatorios">
    </div>
  </section>

  <button onclick="reload()">Random Cat!</button>
  
  <script src="./main.js"></script>
</body>
```

```css
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html {
      font-size: 62.5%;
    }
    body {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 50px;
      width: 100%;
      font-family: 'Roboto Flex', sans-serif;
      font-size: 1.6rem;
    }
    h1 {
      font-size: 6rem;
      font-weight: 700;
    }
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      width: 100%;
      height: 50%;
    }
    img {
      width: 420px;
      height: 420px;
      border-radius: 10px;
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.30);
      object-fit: cover;
    }
    button{
      width: 15%;
      height: 7%;
      border-radius: 8px;
      border: 0;
      background-color: rgb(223, 220, 220);
      box-shadow: 1px 1px 4px 2px rgb(0,0, 0, 0.25);
    }
    button:hover {
      cursor: pointer;
      background-color: rgb(199, 195, 195);
    }
```

```javascript
const URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs'

async function reload () {
  const response = await fetch(URL);
  const data = await response.json();
  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');
  console.log(data);
  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;
}

reload();
```

## ¿Qué son los HTTP Status Codes?

Debido a que el internet es bastante complejo y se ha ido construyendo _"sobre la marcha"_, los HTTP Status Codes es una forma en la que el protocolo HTTP nos da una referencia de qué es lo que ha pasado con nuestra solicitud, y en caso de haber un error determinar de que lado es el fallo, si del lado del cliente o del servidor, si es la API, o cualquier otra incidencia que no permita la satisfactoria conexión con los recursos.

Estos _Status Codes_ van de un rango de los 100 a los 500

- 2XX = ok!
- 3XX = redirect
- 4XX = frontend error 
- 5XX = backend error

## ¿Qué es una API Key?

Las API KEY son una de las formas en las que el backend puede identificar quien esta haciendo cada solicitud. Para poder profundizar en esta definición debemos conocer los conceptos de Autenticación y Autorización.

### Autenticación

Esta consiste en identificar quien es cada quien, identificar solamente si el backend tiene conocimiento de ese usuario.

### Autorización

Es la que identifca que permisos tiene cada quien

- **Query parameter**: ?api_key=REPLACE_FOR_API_KEY
- **Authorization header**: X-API-Key=REPLACE_FOR_X_API_KEY

### Alternativas

- Authorization: Basic
- Authorization: Bearer Token
- OAuth 2.0
- Access Key + Secret Key (firebase)

### ¿Por qué?

- Application-based authentication
- User-based authentication