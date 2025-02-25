const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs';
const spanError = document.getElementById('error');
/* fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
  }); */
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

async function removeFavoriteMichis() {
  
}

loadRandomMichis();
loadFavoritesMichis();