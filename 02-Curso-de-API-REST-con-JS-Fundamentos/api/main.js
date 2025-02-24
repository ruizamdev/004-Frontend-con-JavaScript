const URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs'

/* fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].url;
  }); */

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