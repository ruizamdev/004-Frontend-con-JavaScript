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


## FormData: Publicando imágenes de michis