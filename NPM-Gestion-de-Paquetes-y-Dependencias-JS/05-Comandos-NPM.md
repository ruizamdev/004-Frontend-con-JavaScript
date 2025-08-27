# Comandos NPM (Scripts)

Es posible configurar scripts o comandos en el fichero package.json, agregando objeto _"scripts"_

```json
{
  "scripts": {
    "start": "node src/index.js",
    "node": "node src/index.js && node src/index.js"
  }
}
```

Para ejecutar los scripts:

```shell
npm run start
npm run node
```

## NPX

NPX, siglas de Node Package Execute, nos permite ejecutar acciones particulares sin tener que pasar por la instalación.

Tomemos como ejemplo React.

```shell
npx create-react-app react-npm
cd react-npm
npm start
```

Tenemos como resultado la ejecución del proyecto en un entorno local.

![react app](assets/Screenshot%202025-08-27%20081919.png)
