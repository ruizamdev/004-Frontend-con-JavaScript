# Eliminación de dependencias y fichero package-lock.json

Para eliminar un paquete se utiliza el parámetro `uninstall` seguido del nombre de la dependencia

```shell
npm uninstall webpack-dev-server
```

Otra forma de hacerlo es eliminando el paquete desde la lista de dependencias en el package.json, eliminar la carpeta _node_modules_ y realizar una instalación general de todo `npm install`

Es posible compilar el proyecto para visualizarlo y mandarlo a producción

```shell
npm run build --dd
```

Otro comando que nos sirve para ver paquetes obsoletos es:

```shell
npm ci
```

Estos también sincronizan el fichero package.json con package-lock.json

## package-lock.json

Este fichero es más extenso que el package.json, el cual contiene también las dependencias que serán utilizadas en el proyecto pero de una manera mucho mas detallada, este fichero no se modifica.
