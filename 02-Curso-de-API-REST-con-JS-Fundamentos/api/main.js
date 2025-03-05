const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
})
api.defaults.headers.common['X-API-KEY'] = 'live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs'

const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=9';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites';
const API_URL_FAVORITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;
const API_URL_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';
const spanError = document.getElementById('error');
const favoritesMichis = document.getElementById('favorites-michis');
const randomMichis = document.getElementById('random-michis');
/* fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
  }); */
async function loadRandomMichis () {
  try {
    var res = await fetch(API_URL_RANDOM, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs'
      }
    });
    var data = await res.json();
    console.log('Se ha obtenido una respuesta de michis random');
    console.log(res);
    console.log('Se han obtenido michis aleatorios')
    console.log(data);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    } else {
      randomMichis.innerHTML = "";
      /* const randomMichisBtn = document.createElement('button');
      const randomMichisBtnText = document.createTextNode('Click for Random Michis');
      randomMichisBtn.appendChild(randomMichisBtnText);
      randomMichisBtn.onclick = () => loadRandomMichis();
      randomMichis.appendChild(randomMichisBtn); */
      data.forEach(randomMichi => {
        const imgContainer = document.createElement('article');
        imgContainer.classList.add('img-container');
        const img = document.createElement('img');
        img.id = randomMichi.id;
        img.src = randomMichi.url;
        const favBtn = document.createElement('span');
        favBtn.classList.add('fav-btn');
        favBtn.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#a2a0a0"/>
        </svg>`
        favBtn.onclick = () => saveFavoriteMichi(randomMichi.id)
        imgContainer.appendChild(img);
        imgContainer.appendChild(favBtn);
        randomMichis.appendChild(imgContainer);
      })
    } 
    /* const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');

    img1.src = data[0].url;
    img2.src = data[1].url;
    btn1.onclick = () => saveFavoriteMichi(data[0].id);
    btn2.onclick = () => saveFavoriteMichi(data[1].id); */
  } catch (error) {
    spanError.innerHTML = `HTTP error! status: ${res.status} : ${error.message}`;
    console.error(`Error: ${error}`)
  }
}

async function loadFavoritesMichis () {
  try {
    const res = await fetch(API_URL_FAVORITES, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs',
      }
    });
    const data = await res.json();
    console.log('Se ha obtenido una respuesta de michis favoritos')
    console.log(res)
    console.log('Se han obtenido michis favoritos');
    console.log(data);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} : ${data.message}`)
    } else {
      favoritesMichis.innerHTML = '';
      data.forEach(michi => {
        const article = document.createElement('article');
        article.classList.add('img-container');
        const img = document.createElement('img');
        const btn = document.createElement('button');
        const btnText = document.createTextNode('Remove from favorites');

        img.src = michi.image.url;
        btn.appendChild(btnText);
        btn.onclick = () => removeFavoriteMichi(michi.id)
        article.appendChild(img);
        article.appendChild(btn);
        favoritesMichis.appendChild(article);
      })
    }

  } catch (error) {
      spanError.innerHTML = `Hubo un error: ${error}`;
      console.error('Error:', error)
    }
  
}

async function saveFavoriteMichi (id) {
  try {

    const {data, status} = await api.post('/favourites', {
      image_id: id,
    });

    /* const res = await fetch(API_URL_FAVORITES, {
      method: 'POST',
      headers: {
        'X-API-KEY': 'live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_id: id,
      }),
    });
    const data = await res.json(); */

    console.log('Guardado')

    if (status !== 200) {
      throw new Error(`HTTP error! status: ${status} : ${data.message}`);
    } else {
      console.log('Michi guardado en favoritos');
      loadFavoritesMichis();
    }
  } catch (error) {
    spanError.innerHTML = `Hubo un error: ${error.message}`;
    console.error('Error:', error);
  }
}

async function removeFavoriteMichi (id) {
  try {
    const res = await fetch(API_URL_FAVORITES_DELETE(id), {
      method: 'DELETE',
      headers: {
        'X-API-KEY': 'live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs'
      },
    })
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} : ${data.message}`);
    } else {
      console.log('Michi eliminado de favoritos');
      loadFavoritesMichis();
    }
  } catch {
    spanError.innerHTML = `Hubo un error: ${error.message}`;
    console.error('Error:', error);
  }
}

async function uploadMichiPhoto() {
  const form = document.getElementById('uploadingForm');
  const formData =  new FormData(form);
  console.log(formData);
  console.log(formData.get('file'));
  try {
    const response = await fetch(API_URL_UPLOAD, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'X-API-KEY': 'live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs'
      },
      body: formData,
    })
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} : ${data.message}`)
    } else {
      console.log('Foto de michi subida!');
      console.log({data});
      console.log(data.url);
      saveFavoriteMichi(data.id);
    }
  } catch (error) {
    spanError.innerHTML = `Hubo un error: ${error.message}`;
    console.error('Error:', error);
  }
  
}

loadRandomMichis();
loadFavoritesMichis();