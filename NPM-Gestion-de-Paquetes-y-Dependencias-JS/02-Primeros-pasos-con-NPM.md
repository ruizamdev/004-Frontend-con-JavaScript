# Primeros pasos con NPM

Vamos a crear un proyecto desde la terminal

Creamos un directorio y nos movemos dentro de él:

```shell
mkdir npm-init
cd npm-init
```

Después iniciamos un repositorio de git:

```shell
git init
```

Esto nos crea los ficheros necesarios para el manejo de repositorios mediante git.

Para comenzar a gestionar paquetes dentro de nuestro proyecto debemos inicializarlo:

```shell
npm init
```

Éste comando nos permite agregar la información referente a nuestro proyecto, tal como el nombre, la versión, una descripción, el autor, entre otras cosas más.

```text
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press C at any time to quit.
package name: (npm-init)
version: (1.0.0)
description: some text to describe the project
entry point: (index.js)
test command: some testing commands
git repository: if theres one
keywords: javascript, node, npm
author: Armando Ruiz <artmx@proton.me>
license: (ISC)
```

Al finalizar, el gestor nos crea un fichero de configuración con toda esta información llamado _*package.json*_

```json
{
  "name": "npm-init",
  "version": "1.0.0",
  "description": "Curso de NPM",
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js",
    "node": "node src/index.js && node src/index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ruizamdev/NPM-Gestion-de-Paquetes-y-Dependencias-JS.git"
  },
  "keywords": [
    "javascript",
    "node",
    "npm"
  ],
  "author": "Armando Ruiz @ruizamdev <artmx@proton.me>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ruizamdev/npm-init/issues"
  },
  "homepage": "https://github.com/ruizamdev/npm-init#readme",
  "dependencies": {
    "json-server": "^1.0.0-beta.3",
    "moment": "^2.30.1",
    "react": "^19.1.1"
  },
  "devDependencies": {
    "eslint": "^9.34.0"
  }
}
```

En este fichero también podremos ver las dependencias o paquetes que hemos agregado al proyecto, pero eso lo veremos más adelante.
