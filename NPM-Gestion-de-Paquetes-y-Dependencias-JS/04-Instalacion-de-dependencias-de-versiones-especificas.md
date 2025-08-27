# Instalación de dependencias de versiones especificas

Para poder especificar la versión del paquete que queremos instalar se escribe `@` al final del nombre del paquete, seguido de la versión.

```shell
npm install json-server@0.15.0
```

Para garantizar la instalación de la última versión de la dependencia, en vez de la versión en si se escribe la palabra `latest`

```shell
npm install json-server@latest
```

En este caso se actualiza el paquete _json-server_ a la versión mas reciente.

Para poder verificar los paquetes disponibles en nuestro proyecto podemos utilizar `npm list`, nos listará.

Si hemos clonado un repo, necesitaremos instalar las dependencias que ocupa, lo podemos hacer simplemente con `npm install`, este comando lee el fichero package.json para verificar las dependencias necesarias.
