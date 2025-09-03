# Webpack

Es un empaquetador de módulos para aplicaciones web, es el más ampliamente utilizado, creado en 2012.

- Toma tu código (JS, CSS, Imágenes, etc.) y sus dependencias.
- Los convierte en bundles optimizados listos para el navegador.
- Usa loaders para transformar ficheros (ej. TypeScript -> JS, Sass -> CSS).
- Usa plugins para tareas extra (minificación, split de código, etc.)

Sirve para:

- Optimización de rendimiento (minificar, dividir código por demanda)
- Compatibilidad (transpilar ESNext a ES5).
- Gestión de dependencias (todo tu proyecto en bundles organizados).
- Desarrollo más cómodo con hot reload y dev server.

## Instalación y configuración de Webpack en un proyecto

Una vez creada la carpeta del proyecto, inicializado un repo de git y configurado npm, para instalarlo debemos hacer lo siguiente:

Instalamos webpack y su herramienta de linea de comandos:

```shell
npm install webpack webpack-cli -D
```

Instalamos plugins de html y copy de webpack y el core y loader de babel

```shell
npm install html-webpack-plugin copy-webpack-plugin @babel/core babel-loader -D
```

Creamos el fichero de configuración _*webpack.config.js*_ en la raíz del proyecto y lo rellenamos con la configuración correspondiente:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}
```

Desarrollamos el proyecto, para ejecutarlo en nuestro entorno de desarrollo necesitamos:

```shell
npm install webpack-dev-server -D
```

Agregamos los scripts en _*package.json*_ para ejecutar la construcción del proyecto y la ejecución en el navegador de manera local.

```json
"scripts": {
  "build": "webpack --mode production",
  "start": "webpack-dev-server --open --mode development" 
}
```

Lo ejecutamos:

```shell
npm run build && npm run start
```

_Bonus_: Hacer el despliegue en github pages:

```shell
npm install gh-pages -D
```

y en el _*package.json*_:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Por último hacemos deploy:

```shell
npm run deploy
```
