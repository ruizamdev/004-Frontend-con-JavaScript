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

## CORS, Caché, Redirect y tu propio clon de fetch

Además de `method` y `headers` existen otros parámetros que podemos agregar a nuestra función fetch, como es el caso de `mode`, `cache` y `redirect`.

### CORS

CORS es un protocolo de seguridad, Cross-Origin Resource Sharing por sus siglas en inglés, que limita el acceso a peticiones externas a nuestro backend, tiene cuatro opciones: `cors`, `no-cors`, `same-origin` y `navigate`.

- `cors`: El que se configura por defecto, sigue el protocolo CORS, permite las peticiones _cross-origin_ y es la mas común para aplicaciones web.

- `no-cors`: Muy restrictiva, previene la lectura de los datos de respuesta, útil para recursos en caché, métodos HTTP limitados (GET, HEAD, POST)

- `same-origin`: Solo permite peticiones del mismo origen, falla en las peticiones cross-origin, alto nivel de seguridad.

- `navigate`: Usado por los navegadores para la navegación entre páginas, normalmente no se utiliza en las llamadas de fetch.

### Caché

Esta nos ayuda a recordar la información que ya hemos obtenido en solicitudes anteriores, podemos guardar los datos en el navegador o aplicación, para cuando necesitemos esa misma información no tengamos que hacer una petición al backend de nuevo. Puede tener varias opciones:

- `default`
- `no-store`
- `reload`
- `no-cache`
- `force-cache`
- `only-if-cached`

Pero no es necesario agregar este parámetro ya que fetch lo tiene configurado

### Redirect

El parámetro `redirect` controla cómo se manejan las redirecciones HTTP. Tiene tres posibles valores:

- `follow` (default): Sigue automáticamente las redirecciones HTTP
- `error`: Rechaza la petición con un error si hay una redirección
- `manual`: Permite manejar las redirecciones manualmente

#### Ejemplos de uso:

```javascript
// Seguir redirecciones (comportamiento por defecto)
fetch(url, {
  redirect: 'follow'
});

// Rechazar redirecciones
fetch(url, {
  redirect: 'error'
});

// Manejar redirecciones manualmente
fetch(url, {
  redirect: 'manual'
});
```

Este parámetro es útil cuando:  
- Necesitas controlar específicamente cómo manejar las redirecciones
- Quieres evitar redirecciones por razones de seguridad
- Necesitas implementar lógica personalizada para las redirecciones

## GraphQL, Web Sockets y Web 3.0: El mundo más allá de REST

REST no es el único protocolo de APIs que nos permite comunicarnos y hacer peticiones HTTP al backend. Existen muchos otros protocolos de los cuales veremos algunos.

### sendBeacon

Es una API web que permite enviar datos de manera asíncrona a un servidor web, especialmente util para:

- **Analytics**: Envío de datos de análisis.
- **Métricas de uso**: Recopilación de estadísticas.
- **Logs**: Registro de eventos.

#### Características principales

- No espera una respuesta del servidor.
- Funciona de manera asíncrona.
- Garantiza el envío de datos incluso cuando la página se está cerrando.
- No afecta el rendimiento de la página.
- Ideal para tracking y analytics.

#### Ejemplo de uso

```javascript
// Enviar datos de analytics cuando el usuario cierra la página
window.addEventListener('unload', function() {
  const analyticsData = {
    timeSpent: 5000,
    lastPage: '/home',
    userAction: 'exit',
  };

  navigator.sendBeacon(
    '/api/analytics',
    JSON.stringify(analyticsData)
  );
});
```

#### Ventajas

- No bloquea la navegación.
- Altamente confiable para el envío de datos.
- Mejor rendimiento que XMLHttpRequest o fetch.
- Ideal para seguimiento de eventos de salida.

### GraphQL

Es un lenguaje de consulta y manipulación de datos para APIs, desarrollado por Facebook. Ofrece una alternativa más flexible y eficiente a REST.

#### Características Principales

- **Consultas Precisas**: Solo obtienes los datos que necesitas.
- **Una única URL**: A diferencia de REST, solo hay un endpoint.
- **Tipado fuerte**: Sistema de tipos que define la estructura de datos.
- **Jerárquico**: La estructura de consulta refleja la forma de los datos.

#### Ejemplo de consulta

```graphql
query {
  user(id: "123") {
    name
    email
    posts {
      title
      comments {
        text
      }
    }
  }
}
```

#### Ventajas vs REST

1. **Evita Over-fetching**
  - REST: Devuelve todos los datos del endpoint.
  - GraphQL: Solo devuelve los campos solicitados.

2. **Reduce multiples requests**
  - REST: Múltiples endpoints para diferentes recursos.
  - GraphQL: Una sola consulta para múltiples recursos.

3. **Versionado más simple**
  - REST: Diferentes versiones de API (v1, v2, etc.).
  - GraphQL: Evolución continua sin versiones.

#### Ejemplo de implementación

```javascript
// Cliente GraphQL básico
const query = `
  query GetUser($id: ID!) {
    user(id: $id) {
      name
      email
    }
  }
`;

const variables = { id: "123" };

fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables
  })
}).then(res => res.json())
  .then(data => console.log(data));
```

#### Casos de uso ideales

- Aplicaciones con datos complejos y relacionados.
- APIs que sirven a múltiples cliente con diferentes necesidades.
- Proyectos que requieren desarrollo rápido y flexible.
- Aplicaciones que necesitan optimizar el uso de datos.

### Web Sockets

Son una tecnología que permite una comunicación bidireccional y en tiempo real entre el cliente y el servidor sobre una única conexión TCP persistente.

#### Características principales

- **Conexión Persistente**: Mantiene una conexión abierta entre cliente y servidor.
- **Comunicación bidireccional**: Ambas partes pueden enviar datos en cualquier momento.
- **Bajo Overhead**: Menor sobrecarga comparado con HTTP polling.
- **Tiempo Real**: Ideal para aplicaciones que requieren actualizaciones instantáneas

#### Diferencias con REST/HTTP

| WebSocket | REST/HTTP |
|---|---|
| Conexión persistente | Conexión por request |
| Bidireccional | Unidireccional |
| Protocolo ws:// o wss:// | Protocolo http:// o https:// |
| Ideal para datos en tiempo ideal | Ideal para operaciones CRUD |


#### Ejemplo de implementación

```javascript
// Crear conexión WebSocket
const ws = new WebSocket('ws://mi-servidor.com);

// Eventos del WebSocket
ws.onopen = () => {
  console.log('Conexión establecida');
  ws.send('¡Hola servidor!');
};

ws.onmessage = (event) => {
  console.log('Mensaje recibido:', event.data);
};

ws.onclose = () => {
  console.log('Conexión cerrada');
};

ws.onerror = (error) => {
  console.error('Error:', error);
};
```

#### Casos de uso

- **Chat en tiempo real**
- **Juegos multijugador**
- **Dashboards en vivo**
- **Notificaciones instantáneas**
- **Trading y datos financieros**
- **Colaboración en tiempo real**

## Web 3.0

Web 3.0 representa la próxima evolución de internet, caracterizada por la descentralización, blockchain y tecnologías semánticas.

### Características Principales

- **Descentralización**: No depende de servidores centrales.
- **Blockchain**: Utiliza tecnología de cadena de bloques.
- **Tokens**: Incorpora criptomonedas y NFTs.
- **Smart Contracts**: Contratos auto-ejecutables.
- **Semantic Web**: Mejor comprensión del contexto.

### Diferencias entre versiones web

| Versión | Características | Ejemplos |
| Web 1.0 | Sitios estáticos, solo lectura | Páginas informativas |
| Web 2.0 | Interactiva, redes sociales | Facebook, Twitter |
| Web 3.0 | Descentralizada, blockchain | DApps, DAOs |

### Ejemplo de implementación

```javascript
// Ejemplo de conexión con Web3.js
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');

// Interactuar con un Smart Contract
const contract = new web3.eth.Contract(ABI, contractAddress);

// Ejecutar una transacción
async function transferToken() {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.transfer(recipient, amount)
    .send({ from: accounts[0] });
};
```

#### Tecnologías clave

1. **Blockchain**
  - Ethereum
  - Solana
  - Polkadot

2. **Almacenamiento descentralizado**
  - IPFS.
  - Filecoin.
  - Sia.

3. **Identidad Digital**
  - MetaMask.
  - WalletConnect.
  - ENS (Ethereum Name Service).

#### Casos de uso

- DeFi (Finanzas Descentralizadas).
- NFTs y Arte digital.
- DAOs (Organizaciones autónomas descentralizadas).
- Juegos play-to-earn.
- Identidad digital soberana.