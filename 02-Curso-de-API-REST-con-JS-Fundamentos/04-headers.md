# Headers en peticiones HTTP

## ¿Qué son los headers HTTP?

Los headers HTTP (encabezados HTTP) son metadatos que se envían en las peticiones y respuestas HTTP para proporcionar información adicional sobre la transacción que se está realizando. Estos headers contienen información importante como:

- Tipo de contenido que se está enviando o recibiendo
- Información de autenticación
- Control de caché
- Configuración de CORS
- Información del navegador o servidor
- Estado de la conexión

Algunos headers comunes incluyen:

- `Content-Type`: Define el tipo de contenido del recurso
- `Authorization`: Contiene credenciales para autenticar al usuario
- `Accept`: Especifica qué tipos de contenido puede procesar el cliente
- `User-Agent`: Identifica el software/navegador que hace la petición
- `Cache-Control`: Define las directivas de almacenamiento en caché

Los headers se envían tanto en las peticiones (request headers) como en las respuestas (response headers) y son fundamentales para el funcionamiento correcto de la comunicación HTTP.


## Header de autorización

El header de autorización nos permite persindir de los query parametres en la url de la api a la que vamos a solicitar información.  
si bien nuestras aplicaciones pueden funcionar exactamente igual con query parameters, es más cómodo utilizar el _"header authorization"_.

Query parameter:

```
?api_key=<API_KEY_HERE>
```

Auth Header:

```
X-API-KEY:<API_KEY_HERE>
```

Los headers no son más seguros que los query parameters, un atacante con mínimo conocimiento puede obtener los headers.

## Header de Content-Type

El header de _content-type_, indica el tipo de información que queremos obtener. Definiendolo le decimos al backend el tipo de recurso que necesitamos.

Existen muchos tipos de _content-type_:

- `application`:
  - json
  - xml
  - zip
  - x-www-forum-urlencoded
- `audio`:
  - mpeg
  - x-ms-wma
  - vnd.rnd-realaudio
  - x-wav
- `image`:
  - gif
  - jpg
  - png
  - x-icon
  - svg+xml
- `multipart`:
  - mixed
  - alternative
  - related
  - form-data
- `text`:
  - css
  - csv
  - html
  - plain
  - xml
- `video`:
  - mpeg
  - mp4
  - quicktime
  - webm
- `vnd`:
  - vnd.ms-excel
  - vnd.ms-powerpoint
  - msword

### MIME Types

> _**MIME** = Multi-Purpose Internet Mail Extensions_

Los MIME Types o Tipos MIME son la especificación actual de formato para los diferentes tipos de datos.  
Es un estándar que indica la naturalieza y el formato de un documento.  

#### Diferencias con Content-Type

**Alcance**:
- Los tipos MIME son la especificación del formato: `application/json`
- Content-Type es la cabecera _"header"_ que usa los tipos MIMES como valor: 

```javascript
headers: {
  'Content-Type': 'application/json',
}
```

**Uso**:
- Los tipos MIME pueden ser usados en varios contextos (email, web, etc).
- Content-Type es específico para cabeceras HTTP.

**Relación**:
- Content-Type es el contenedor.
- Los tipos MIME es el valor dentro del contenedor.

## FormData: Publicando imágenes de michis

```html
<section id="uploadingMichi">
    <h2>Sube la foto de tu michi:</h2>

    <form id="uploadingForm">
      <input id="michi-file", type="file" name="file">
      <button type="button" onclick="uploadMichiPhoto()">Subir foto de michi</button>
    </form>
  </section>
```
```javascript
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
```