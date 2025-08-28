# Versionado de paquetes y paquetes privados

Hay una estructura semántica que debemos de seguir para el versionado de nuestros paquetes, ésta semántica nos indica que debe de llevar 3 números: `1.0.0`

Siendo el primer número un cambio mayor al paquete que es incompatible con versiones anteriores, el segundo un cambio menor que aún conserva compatibilidad y el tercero un parche que corrige bugs.

Al finalizar los cambios de nuestro paquete, lo podemos actualizar de la siguiente manera:

```shell
npm version 1.1.0
```

y volver a publicarlo

```shell
npm publish
```

También exista la posibilidad de crear un paquete de manera privada, en caso de que el paquete sea de uso privado.