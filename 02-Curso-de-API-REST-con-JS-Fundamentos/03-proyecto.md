# Proyecto

## Maquetación del proyecto

En este proyecto vamos a hacer un feed de fotos de michis, tendrá una sección de michis favoritos en donde podremos guardar las fotos que más nos gusten, y además de poder subir nuestras propias fotos a la API.

La estructura HTML es la siguiente:

```html
<body>

  <h1>Rando-Michi'o'Matic</h1>

  <section id="random-michis" >

    <h2>Get Random Michis!</h2>

    <article class="img-container">
      <img id="img1" alt="Foto de gatitos aleatorios">
      <button>Save to favorites</button>
    </article>
    <article class="img-container">
      <img id="img2" alt="Foto de gatitos aleatorios">
      <button>Save to favorites</button>
    </article>
    <button onclick="reload()">Random Cat!</button>

  </section>
  

  <section id="favorites-michis">
    <h2>Favorites Michis</h2>
    <article class="img-container">
      <img id="img1" alt="Foto de gatitos aleatorios">
      <button>Remove from favorites</button>
    </article>
  </section>

  <script src="./main.js"></script>
</body>
```

## ¿Qué son los métodos HTTP?

Los métodos HTTP son una referencia del tipo de solicitud que el frontend realizara al backend

Los métodos son:

- _**GET**_: Este método nos ayuda a recuperar información para poder leerla solamente
- _**POST**_: POST nos sirve para generar información, usuarios, imagenes, etc.
- _**PUT y PATCH**_: Estos nos sirven para editar la información ya creada, put particularmente nos sirve para modificar todos los atributos de algún elemento, patch solo para modificar alguna atributo.
- _**DELETE**_: Borra la información.

## GET: Leyendo michis favoritos

```javascript
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs';
```

```javascript
async function loadRandomMichis () {
  try {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    img1.src = data[0].url;
    img2.src = data[1].url;
  } catch (error) {
    spanError.innerHTML = `Hubo un error: ${error.message}`;
    console.error(`Error: ${error}`)
  }
}

loadRandomMichis();
```

```javascript
async function loadFavoritesMichis () {
  try {
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log('Favorites Michis: ');
    console.log(data);

    const favoritesMichis = document.getElementById('favorites-michis');

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    for (let i = 0; i < data.length; i++) {
      const imgContainer = document.createElement('article');
      imgContainer.classList.add('img-container');
      imgContainer.innerHTML = `
        <img src="${data[i].image.url}" alt="Un michi favorito">
        <button onclick="">Remove from Favorites</button>
      `
      favoritesMichis.appendChild(imgContainer);
    }

  } catch (error) {
      spanError.innerHTML = `Hubo un error: ${error.message}`;
      console.error(`Error: ${error}`)
    }
  
}

loadRandomMichis();
loadFavoritesMichis();
```

## POST: Guardando michis favoritos

```javascript
async function saveFavoriteMichis() {
  try {
    const res = await fetch(API_URL_FAVORITES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_id: "c3g",
      }),
    });
    const data = await res.json();
    console.log(data);
  
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  } catch (error) {
    spanError.innerHTML = `Hubo un error: ${error.message}`;
    console.error('Error:', error);
  }
}
```

## Consultando a la API para escribir HTML dinámico



## DELETE: Borrando michis favoritos