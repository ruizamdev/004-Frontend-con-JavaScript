# Bonus

## Axios: librerías de JS para consumir APIs.

**HTTP Clients**
- Axios
- Trae.js
- node-fetch (para Node.js)
- request (para Node.js)
- Etc.

```javascript
const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
})
api.defaults.headers.common['X-API-KEY'] = 'live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs'
```
De esto:

```javascript
const res = await fetch(API_URL_FAVORITES, {
      method: 'POST',
      headers: {
        'X-API-KEY': 'live_Db80T6nPnXwGk6WSkG9UN7ZSQsJNVWCsPMIHWUQfCiwG6wbGEMv13LoyqqVyP4cs',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_id: id,
      }),
    });
    const data = await res.json();
```

Pasamos a esto:

```javascript
const {data, status} = await api.post('/favourites', {
      image_id: id,
    });
```