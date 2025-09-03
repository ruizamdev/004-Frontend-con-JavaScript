# Parcel

Hacemos lo habitual, crear el directorio del proyecto, inicializamos repo en git (agregamos remoto también), inicializamos proyecto de node con npm para gestionar paquetes.

Después instalamos parcel:

```shell
npm install -D parcel
```

Desarrollamos. Una vez desarrollado el proyecto, es momento de probarlo mediante scripts en package.json, lo primero seria modificar la propiedad *"main"*, por la palabra *"source"*

```json
{
  "source": "src/index.html"
}
```

Y en la sección de scripts:

```json
{
  "scripts" {
    "start": "parcel serve --port 8080 src/index.html",
    "build": "parcel build src/index.html --public-url ./"
  }
}
```
