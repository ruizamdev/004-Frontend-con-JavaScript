# Instalación de dependencias

La instalación de dependencias es bastante sencilla, solo tenemos que ejecutar el comando `npm install` seguido del nombre del paquete.

```shell
npm install moment
```

Esta es la forma permite llevar los paquetes instalados a producción desde el entorno de desarrollo, pero hay ocasiones en las que solo necesitamos algún paquete solo en el entorno de desarrollo, para lo cual podemos utilizar el comando anterior pero agregando el flag `--save-dev` o simplemente `-D` al final.

```shell
npm install eslint --save-dev
npm install eslint -D
```

Para garantizar que una dependencia sea llevada a producción podemos utilizar los flags `-S` o `--save` al final del comando.

```shell
npm install react -S
npm install react --save
```

Ya instaladas todas estas dependencias, las podremos ver en el fichero de configuración _*package.json*_

```text
"dependencies": {
    "json-server": "^1.0.0-beta.3",
    "moment": "^2.30.1",
    "react": "^19.1.1"
  },
  "devDependencies": {
    "eslint": "^9.34.0"
  }
```

También surgen ocasiones en las que tendremos que instalar algún paquete de manera global. Los comandos anteriores solo instalan las dependencias de manera local, es decir solo dentro de nuestro proyecto, como podremos ver en la carpeta node_modules, la cual hablaremos con mayor detalle más adelante.

La instalación de paquetes de manera global, permite que esa dependencia este disponible en cualquier proyecto, ya que se instala en nuestra computadora y no solo en el proyecto, para poder instalar de manera global utilizamos el flag `-g` antes del nombre del paquete.

```shell
npm install -g cowsay
```

Para poder ver qué paquetes tenemos instalados podemos utilizar `npm list` para paquetes locales y `npm list -g` para paquetes globales.

Otra forma de instalar paquetes es de manera opcional agregando el flag `-o`

```shell
npm install eslint -o
```

En este caso, al ya tener la dependencia _eslint_ en modo dev, el flag `-o` simplemente cambiara el modo en el que esta instalada a opcional.

Y una opción muy interesante que tenemos es la de `--dry-run` que nos permite simular la instalación sin modificar nada

```shell
npm install react-dom --dry-run
```

Esto es útil para verificar que la dependencia no tiene conflictos